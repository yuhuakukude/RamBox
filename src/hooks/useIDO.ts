import { useActiveWeb3React } from './index'
import { useRAMContract } from './useContract'
import { CurrencyAmount } from '../constants/token'
import { useSingleCallResult } from '../state/multicall/hooks'
import { useTransactionAdder } from '../state/transactions/hooks'
import { useCallback } from 'react'
import JSBI from 'jsbi'
import { calculateGasMargin } from '../utils'
import { TransactionResponse } from '@ethersproject/providers'

export function useIDO() {
  const { account } = useActiveWeb3React()
  const contract = useRAMContract()
  const totalSale = CurrencyAmount.ether(BigInt('60000000000000000000000000'))
  const totalSaleWithAccount = useSingleCallResult(contract, 'mintedAmountInUSDTOf', [account ?? undefined])
  const totalSoleAmount = useSingleCallResult(contract, 'totalMintedAmount')
  console.log('tag-->', totalSaleWithAccount, totalSoleAmount)
  return {
    totalSale,
    totalSaleWithAccount: totalSaleWithAccount?.result
      ? CurrencyAmount.ether(totalSaleWithAccount?.result?.[0])
      : undefined,
    totalSoleAmount: totalSoleAmount?.result ? CurrencyAmount.ether(totalSoleAmount?.result?.[0]) : undefined
  }
}

export function useMint() {
  const addTransaction = useTransactionAdder()
  const contract = useRAMContract()
  const { account } = useActiveWeb3React()
  const mint = useCallback(
    async (amount: CurrencyAmount) => {
      if (!account) throw new Error('none account')
      if (!contract) throw new Error('none contract')
      if (amount.equalTo(JSBI.BigInt('0'))) throw new Error('amount is un support')
      const args = [amount.raw.toString()]
      const method = 'mint'
      console.log('🚀 ~ file: useBuyBong.ts ~ line 18 ~ args', args, method)
      return contract.estimateGas[method](...args, { from: account }).then(estimatedGasLimit => {
        return contract[method](...args, {
          gasLimit: calculateGasMargin(estimatedGasLimit),
          // gasLimit: '3500000',
          from: account
        }).then((response: TransactionResponse) => {
          addTransaction(response, {
            summary: `Buy ${amount
              .multiply(JSBI.BigInt('5'))
              .toSignificant(4, { groupSeparator: ',' })
              .toString()}  RAM with ${amount.toSignificant()} USDT`
          })
          return response.hash
        })
      })
    },
    [account, addTransaction, contract]
  )

  return {
    mint
  }
}
