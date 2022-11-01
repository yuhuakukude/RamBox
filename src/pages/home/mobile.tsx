import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material'
import Image from '../../components/Image'
import topBG from '../../assets/images/top-bg.png'
import topImage from '../../assets/images/top-img.png'
import dots from '../../assets/images/dots.png'
import topText from '../../assets/images/top-text.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import telegram from '../../assets/images/telegram.png'
import medium from '../../assets/images/medium.png'
import discord from '../../assets/images/discord.png'
import game from '../../assets/images/game.png'
import cards from '../../assets/images/cards.png'
import web from '../../assets/images/web.png'
import flower from '../../assets/images/flower.png'
import coin from '../../assets/images/coin.png'
import footerBG from '../../assets/images/footer-bg.png'
import centerBG from '../../assets/images/center-bg.png'
import { ExternalLink } from '../../theme/components'

const TopFrame = styled('div')(`
width: 100%;
height: auto;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${topBG});
background-size: 100% auto;
background-repeat: no-repeat;
background-position: top center;
`)

const Title = styled(Typography)`
  font-size: 42px;
  font-family: 'PhosphateSolid' !important;
  margin: auto;
  width: fit-content;
  color: #ffbe01;
`

const BuyButton = styled(Button)`
  background: transparent;
  box-shadow: 0 0 10px 4px #d7c658 inset;
  width: 219px;
  height: 67px;
  border-radius: 67px;
  font-size: 30px;
`

const TextCard = styled(Typography)`
  width: 284px;
  height: 80px;
  box-shadow: 0 0 10px 4px #242381 inset;
  font-size: 24px;
  color: #ffbe01;
  border-radius: 12px;
  text-align: center;
  line-height: 80px;
  font-family: 'PhosphateSolid' !important;
`

const list = [
  ['Team Building', 'RamBox Positioning & Vision', 'Economic Model'],
  ['Website', 'WhitePaper', 'NFT Design'],
  ['RAM IDO', 'Launch NFT', 'RAM public offering'],
  ['NFT Equity Incentive', 'Pool', 'Rambox DAO', 'Ram Chain Beta test'],
  ['NFT Equity Community', 'Launch Ram Chain', 'Node Incentives'],
  ['NFT Upgrade', 'Ram Chain DAO', 'RAM Eco-Fund ']
]

function Data({ title, value }: { title: string; value: string }) {
  return (
    <Stack direction={'column'} spacing={16}>
      <Typography color={'#FFBE01'} fontSize={42} fontFamily={'PhosphateSolid'}>
        {value}%
      </Typography>
      <Typography fontSize={24}>{title}</Typography>
    </Stack>
  )
}

function Card({ image, title, text }: { image: string; title: string; text: string }) {
  return (
    <Stack
      borderRadius={'12px'}
      pt={47}
      alignItems={'center'}
      width={382}
      height={460}
      boxShadow={'0 0 10px 4px #23207B inset'}
    >
      <Image width={125} src={image} />
      <Typography color={'#FFBE01'} mt={12} fontSize={26} fontFamily={'PhosphateSolid'}>
        {title}
      </Typography>
      <Typography textAlign={'center'} mt={31} fontSize={18} maxWidth={314}>
        {text}
      </Typography>
    </Stack>
  )
}

export default function MobileHome() {
  return (
    <Box p={0} width={'100%'}>
      <TopFrame>
        <Image style={{ marginTop: 30 }} width={68} src={topImage} />
        <Stack mt={98} mb={30} direction={'row'} spacing={34}>
          <ExternalLink href="">
            <Image width={28} src={facebook} />
          </ExternalLink>
          <ExternalLink href="">
            <Image width={28} src={twitter} />
          </ExternalLink>
          <ExternalLink href="">
            <Image width={28} src={telegram} />
          </ExternalLink>
          <ExternalLink href="">
            <Image width={28} src={medium} />
          </ExternalLink>
          <ExternalLink href="">
            <Image width={28} src={discord} />
          </ExternalLink>
        </Stack>
        <Image width={381} src={topText} />
        <Typography mt={35} mb={57} fontSize={32} textAlign={'center'}>
          The first GameFi aggregation protocol which advocates F2P2E (Free to Play to Earn)
        </Typography>
        <BuyButton>Buy $RAM</BuyButton>
        <ExternalLink href="">
          <Typography mt={33} fontSize={32} color={'#ffffff'}>
            0x62214327CB0CB4041F84e6B7e6FeC6418af26F34
          </Typography>
        </ExternalLink>
        <Image style={{ marginTop: 117 }} width={381} src={dots} />
        <Stack
          width={1200}
          mt={46}
          borderRadius={2}
          padding={'58px 50px'}
          direction={'row'}
          boxShadow={'0 0 10px 4px #4a1193 inset'}
          justifyContent={'space-between'}
        >
          <Data title={'Staking APY'} value={'0'} />
          <Data title={'Number of Holders'} value={'0'} />
          <Data title={'Twitter Followers'} value={'0'} />
          <Data title={'Telegram Members'} value={'0'} />
        </Stack>
      </TopFrame>
      <Box sx={{ background: `url(${centerBG})`, backgroundPosition: 'center', backgroundSize: 'auto 100%' }}>
        <Title style={{ marginTop: 117 }}>Project Video</Title>
        <Title>RamBox Products</Title>
        <Stack mt={75} justifyContent={'center'} spacing={26} direction={'row'}>
          <Card
            image={game}
            title={'GameList'}
            text={
              'The RamBox platform \n' +
              'encourages outstanding GameFi teams to launch GameFi projects with high playability and reasonable tokenomics on Gamelist and decides whether to putthem online through DAO (Decentralized self-regulatory organization) voting'
            }
          />
          <Card
            image={cards}
            title={'Marketplace'}
            text={
              'Users can buy/sell various game NFTs in Marketplace,\n' +
              'including character NFTs, props NFTs, etc. This allows users to enjoy the convenience and wealth effect brought by "game value capitalization"'
            }
          />
          <Card
            image={web}
            title={'DAO'}
            text={
              'RamBox platform supports RAM token holders to form DAO spontaneously in order to carry out the community governance of RamBox. DAO implements a democratic system of 1 vote for 1 Ram. DAO can decide the following ...'
            }
          />
        </Stack>
        <Title style={{ marginTop: 93 }}>RAM Tokenomics</Title>
        <Stack mt={77} direction={'row'} justifyContent={'center'} spacing={123}>
          <Stack textAlign={'left'}>
            <Typography fontSize={24}>RAM is the driving force of RamBox ecosystem.</Typography>
            <Typography mt={35} fontSize={17} lineHeight={2.2}>
              1.Users can stake RAM in RAMSWAP module to get RAM token rewards.
            </Typography>
            <Typography fontSize={17} lineHeight={2.2}>
              2.Users can stake the LP of RAM and USDT in RAMSWAP module to get RAM token rewards.
            </Typography>
            <Typography fontSize={17} maxWidth={880} lineHeight={2.2}>
              3.Users can participate in all kinds of games in GameList module. RAM will be built into the economic
              model of these games.
            </Typography>
            <Typography fontSize={17} maxWidth={880} lineHeight={2.2}>
              4.RAM can be used as a medium to get RAM token rewards when users buy/sell NFT, stake NFT or produce NFT
              synthetic asset in Marketplace.
            </Typography>
          </Stack>
          <Stack>
            <Image width={194} src={flower} />
            <Typography mt={46} fontSize={16} color={'#FFBE01'}>
              Total Supply: 74,380,704 RAM
            </Typography>
          </Stack>
        </Stack>

        <Title style={{ marginTop: 159 }}>Investors & Partners</Title>
        <Grid mt={74} justifyContent={'center'} container rowSpacing={21} columnSpacing={20} direction={'row'}>
          <Grid item>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
        </Grid>
      </Box>
      <Box
        margin={'auto'}
        borderRadius={'12px'}
        width={1200}
        padding={38}
        mt={115}
        boxShadow={'0 0 10px 4px #242381 inset'}
      >
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack spacing={20} direction={'row'}>
            <Image width={82} height={45} src={topImage} />
            <Stack>
              <Typography fontSize={18}>RAM Price</Typography>
              <Typography fontSize={18} color={'#F9662A'}>
                $0.009
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={26} alignItems={'center'}>
            <Image width={40} height={43} src={coin} />
            <Typography fontSize={18}>Buy RAM</Typography>
          </Stack>
          <Stack>
            <Stack direction={'row'}>
              <Typography fontSize={18}>Total Supply: </Typography>
              <Typography fontSize={18} color={'#F9662A'}>
                &nbsp; 74,380,704 RAM
              </Typography>
            </Stack>
            <Stack direction={'row'}>
              <Typography fontSize={18}>Max Supply: </Typography>
              <Typography fontSize={18} color={'#F9662A'}>
                &nbsp;74,380,704 RAM
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography fontSize={18}>Max Supply</Typography>
            <Typography fontSize={18} color={'#F9662A'}>
              74,380,704 RAM
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box mt={118} paddingBottom={299} sx={{ background: `url(${footerBG})`, backgroundPositionX: 'center' }}>
        <Title>Roadmap</Title>
        <Stack
          margin={'auto'}
          mt={53}
          borderRadius={'12px'}
          boxShadow={'0 0 10px 4px #242381 inset'}
          padding={'22px 35px'}
          width={1200}
          direction={'row'}
          justifyContent={'space-between'}
        >
          <Typography fontSize={24} color={'#FFBE01'}>
            Q2 2022
          </Typography>
          <Typography fontSize={24} color={'#FFBE01'}>
            Q2 2022
          </Typography>
          <Typography fontSize={24} color={'#FFBE01'}>
            Q2 2022
          </Typography>
          <Typography fontSize={24} color={'#FFBE01'}>
            Q2 2022
          </Typography>
          <Typography fontSize={24} color={'#FFBE01'}>
            Q2 2022
          </Typography>
          <Typography fontSize={24} color={'#FFBE01'}>
            Q2 2022
          </Typography>
        </Stack>
        <Stack
          margin={'auto'}
          mt={36}
          padding={'22px 35px'}
          width={1200}
          justifyContent={'space-between'}
          direction={'row'}
        >
          {list.map((item, index) => {
            return (
              <Stack spacing={12} key={index}>
                {item.map(subItem => {
                  return (
                    <Typography
                      sx={{
                        '&::before': {
                          content: '"."',
                          fontSize: 48,
                          color: '#FFBE01',
                          lineHeight: 0.2,
                          position: 'absolute',
                          marginTop: -12,
                          marginLeft: -16,
                          fontFamily: 'Roboto !important'
                        }
                      }}
                      paddingRight={20}
                      paddingLeft={16}
                      width={207}
                      fontSize={14}
                      key={index + 's'}
                    >
                      {subItem}
                    </Typography>
                  )
                })}
              </Stack>
            )
          })}
        </Stack>
      </Box>
    </Box>
  )
}
