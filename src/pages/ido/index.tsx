import { Stack, Typography } from '@mui/material'
import ActionButton from '../../components/Button/ActionButton'
import { useIDO, useMint } from '../../hooks/useIDO'
import NumericalInput from '../../components/Input/InputNumerical'
import { useTokenBalance } from '../../state/wallet/hooks'
import { RAM_ADDRESS, USDT } from '../../constants'
import { useActiveWeb3React } from '../../hooks'
import { useCallback, useState } from 'react'
import usdtImg from '../../assets/images/usdt.png'
import useModal from '../../hooks/useModal'
import TransactionPendingModal from 'components/Modal/TransactionModals/TransactionPendingModal'
import TransactionSubmittedModal from '../../components/Modal/TransactionModals/TransactiontionSubmittedModal'
import MessageBox from '../../components/Modal/TransactionModals/MessageBox'
import { tryParseAmount } from '../../utils/parseAmount'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'

export default function IDO() {
  const { account, chainId } = useActiveWeb3React()
  const [typed, setTyped] = useState('')
  const { showModal, hideModal } = useModal()
  const { totalSale, totalSaleWithAccount, totalSoleAmount } = useIDO()
  const { mint } = useMint()
  const usdtBalance = useTokenBalance(account ?? undefined, USDT[chainId ?? 56])
  const inputAmount = tryParseAmount(typed, USDT[chainId ?? 56])
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
  }, [typed, account, showModal, mint, hideModal])
  return (
    <Stack>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        padding={'68px 55px'}
        borderRadius={'12px'}
        width={540}
        boxShadow={'0 0 10px 4px #242381 inset'}
      >
        <Typography fontSize={36}>
          RamBox<span style={{ color: '#FFBE01' }}>已经</span>启动
        </Typography>
        <Typography mt={32} fontSize={18}>
          链接钱包，参与项目早期财务活动
        </Typography>
        <Typography color={'#FFBE01'} fontSize={28} mt={20}>
          预售
        </Typography>
        <Typography mb={36} mt={20}>
          100 USDT / 50000 RAM{' '}
        </Typography>
        <NumericalInput
          unit="USDT"
          balance={usdtBalance?.toExact()}
          placeholder={''}
          endAdornment={<img alt="" style={{ width: 28, maxWidth: 'unset' }} src={usdtImg} />}
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
          disableAction={!usdtBalance || !inputAmount}
          actionText={
            !inputAmount
              ? 'Enter amount'
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
            <Typography fontSize={16}>Left RAM</Typography>
            <Typography fontSize={16}>0%</Typography>
          </Stack>
          <Stack width={'100%'} justifyContent={'space-between'} direction={'row'}>
            <Typography fontSize={16}>Total sold USDT</Typography>
            <Typography fontSize={16}>
              {totalSaleWithAccount ? totalSaleWithAccount.toSignificant(6, { groupSeparator: ',' }).toString() : '--'}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        mt={30}
        justifyContent={'center'}
        alignItems={'center'}
        padding={'68px 55px'}
        borderRadius={'12px'}
        width={540}
        boxShadow={'0 0 10px 4px #242381 inset'}
      >
        <Typography>100u私募一是发行50U等值代币，让参与的玩家注入煎饼流池，合力做大梦想，做大资产，做大格局</Typography>
        <Typography>此外，50U上线后，DAPP将放大6倍进行挖矿，并邀请10%的代币进行奖励。自由交易不会被锁定。</Typography>
        <Typography>
          道是任何道都需要的工具，可以激活每道新的生命力两个矿池可以用15%的资金激活。一是本金归还矿池，二是矿池的馈赠。我们的愿景是让更多的项目团队来我们的
          Daos 质押挖矿，我们更像是一个公共的 DAPP 平台。Ido将上线，DAPP将同时上线。
        </Typography>
      </Stack>
    </Stack>
  )
}