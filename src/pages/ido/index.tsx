import { Stack, Typography } from '@mui/material'
import ActionButton from '../../components/Button/ActionButton'
import { useIDO, useMint } from '../../hooks/useIDO'
import NumericalInput from '../../components/Input/InputNumerical'
import { useTokenBalance } from '../../state/wallet/hooks'
import { RAM, RAM_ADDRESS, USDT } from '../../constants'
import { useActiveWeb3React } from '../../hooks'
import { useCallback, useMemo, useState } from 'react'
import usdtImg from '../../assets/images/usdt.png'
import useModal from '../../hooks/useModal'
import TransactionPendingModal from 'components/Modal/TransactionModals/TransactionPendingModal'
import TransactionSubmittedModal from '../../components/Modal/TransactionModals/TransactiontionSubmittedModal'
import MessageBox from '../../components/Modal/TransactionModals/MessageBox'
import { tryParseAmount } from '../../utils/parseAmount'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { isMobile } from 'react-device-detect'
import { TokenAmount } from '../../constants/token'

export default function IDO() {
  const { account, chainId } = useActiveWeb3React()
  const [typed, setTyped] = useState('')
  const { showModal, hideModal } = useModal()
  const { totalSale, totalSoleAmountInUSDT, totalSoleAmount, totalSaleUSDTWithAccount } = useIDO()
  const { mint } = useMint()
  const usdtBalance = useTokenBalance(account ?? undefined, USDT[chainId ?? 56])
  const ramBalance = useTokenBalance(account ?? undefined, RAM[chainId ?? 56])
  const inputAmount = tryParseAmount(typed, USDT[chainId ?? 56]) as TokenAmount | undefined
  const [approvalState, approveCallback] = useApproveCallback(inputAmount, RAM_ADDRESS)
  const mintCallback = useCallback(async () => {
    if (!typed || !account || !inputAmount) return
    showModal(<TransactionPendingModal />)
    mint(inputAmount)
      .then(() => {
        hideModal()
        showModal(<TransactionSubmittedModal />)
      })
      .catch((err: any) => {
        hideModal()
        showModal(
          <MessageBox type="error">{err.error && err.error.message ? err.error.message : err?.message}</MessageBox>
        )
        console.error(err)
      })
  }, [typed, account, inputAmount, showModal, mint, hideModal])
  const mintDisable = useMemo(() => {
    if (
      !inputAmount ||
      !totalSaleUSDTWithAccount ||
      totalSaleUSDTWithAccount.add(inputAmount).greaterThan(BigInt('200'))
    ) {
      return true
    }
    return false
  }, [inputAmount, totalSaleUSDTWithAccount])

  return (
    <Stack>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        padding={'30px 20px'}
        borderRadius={'12px'}
        width={isMobile ? 'unset' : 540}
        boxShadow={'0 0 10px 4px #242381 inset'}
        margin={'auto 20px'}
      >
        <Typography fontSize={isMobile ? 28 : 36}>
          RamBox<span style={{ color: '#FFBE01' }}>??????</span>??????
        </Typography>
        <Typography mt={32} fontSize={isMobile ? 16 : 18}>
          ?????????????????????????????????????????????
        </Typography>
        <Typography color={'#FFBE01'} fontSize={28} mt={20}>
          Pre Sale
        </Typography>
        <Typography mb={36} mt={20}>
          100 USDT / 20000 RAM{' '}
        </Typography>
        <NumericalInput
          style={{ marginBottom: 20 }}
          unit="USDT"
          balance={usdtBalance?.toExact()}
          placeholder={''}
          endAdornment={<img alt="" style={{ width: 28, maxWidth: 'unset', marginRight: 12 }} src={usdtImg} />}
          value={typed}
          height={60}
          onChange={e => {
            setTyped(e.target.value)
          }}
          onMax={() => {
            if (usdtBalance) {
              setTyped(usdtBalance?.toExact() ?? '')
            }
          }}
        />
        <ActionButton
          pending={approvalState === ApprovalState.PENDING}
          disableAction={!usdtBalance || !inputAmount || mintDisable}
          actionText={
            !inputAmount
              ? 'Enter amount'
              : mintDisable
              ? 'Max is 200U'
              : approvalState === ApprovalState.NOT_APPROVED
              ? 'Allow RamBox to use your USDT'
              : 'Buy RAM'
          }
          onAction={approvalState === ApprovalState.NOT_APPROVED ? approveCallback : mintCallback}
        />
        <Stack mt={36} spacing={20} width={'100%'}>
          <Stack width={'100%'} justifyContent={'space-between'} direction={'row'}>
            <Typography fontSize={16}>Total left RAM</Typography>
            <Typography fontSize={16}>
              {totalSoleAmount
                ? totalSale
                    .subtract(totalSoleAmount)
                    .toSignificant(6, { groupSeparator: ',' })
                    .toString()
                : '--'}
            </Typography>
          </Stack>
          <Stack width={'100%'} justifyContent={'space-between'} direction={'row'}>
            <Typography fontSize={16}>Total RAM</Typography>
            <Typography fontSize={16}>{totalSale.toSignificant(6, { groupSeparator: ',' }).toString()}</Typography>
          </Stack>
          <Stack width={'100%'} justifyContent={'space-between'} direction={'row'}>
            <Typography fontSize={16}>Total sold USDT</Typography>
            <Typography fontSize={16}>
              {totalSoleAmountInUSDT
                ? totalSoleAmountInUSDT.toSignificant(6, { groupSeparator: ',' }).toString()
                : '--'}
            </Typography>
          </Stack>
          <Stack width={'100%'} justifyContent={'space-between'} direction={'row'}>
            <Typography fontSize={16}>My RAM</Typography>
            <Typography fontSize={16}>
              {ramBalance ? ramBalance.toSignificant(6, { groupSeparator: ',' }).toString() : '--'}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        padding={'30px 20px'}
        borderRadius={'12px'}
        width={isMobile ? 'unset' : 540}
        boxShadow={'0 0 10px 4px #242381 inset'}
        margin={'auto 20px'}
        mt={30}
      >
        <Typography>100u??????????????????50U??????????????????????????????????????????????????????????????????????????????????????????????????????</Typography>
        <Typography>?????????50U????????????DAPP?????????6???????????????????????????10%??????????????????????????????????????????????????????</Typography>
        <Typography>
          ??????????????????????????????????????????????????????????????????????????????????????????15%???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          Daos ????????????????????????????????????????????? DAPP ?????????Ido????????????DAPP??????????????????
        </Typography>
      </Stack>
    </Stack>
  )
}
