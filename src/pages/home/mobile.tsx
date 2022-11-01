import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material'
import Image from '../../components/Image'
import topBG from '../../assets/images/top-bg-mobile.png'
import topImage from '../../assets/images/top-img.png'
import dots from '../../assets/images/dots.png'
import topText from '../../assets/images/top-text.png'
// import facebook from '../../assets/images/facebook.png'
// import twitter from '../../assets/images/twitter.png'
// import telegram from '../../assets/images/telegram.png'
// import medium from '../../assets/images/medium.png'
// import discord from '../../assets/images/discord.png'
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
background-size: 130% auto;
background-repeat: no-repeat;
background-position: top center;
`)

const Title = styled(Typography)`
  font-size: 18px;
  font-family: 'PhosphateSolid' !important;
  margin: auto;
  width: fit-content;
  color: #ffbe01;
`

const BuyButton = styled(Button)`
  background: transparent;
  box-shadow: 0 0 10px 4px #d7c658 inset;
  width: 100px;
  height: 32px;
  border-radius: 67px;
  font-size: 12px;
  color: white;
`

const TextCard = styled(Typography)`
  flex: 1;
  height: 40px;
  box-shadow: 0 0 10px 4px #242381 inset;
  font-size: 12px;
  color: #ffbe01;
  border-radius: 12px;
  text-align: center;
  line-height: 40px;
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
      direction={'row'}
      borderRadius={'12px'}
      margin={'0 12px'}
      padding={20}
      alignItems={'center'}
      width={'90%'}
      boxShadow={'0 0 10px 4px #23207B inset'}
    >
      <Stack alignItems={'center'}>
        <Image width={82} src={image} />
        <Typography color={'#FFBE01'} mt={12} fontSize={12} fontFamily={'PhosphateSolid'}>
          {title}
        </Typography>
      </Stack>
      <Typography sx={{ transform: 'scale(0.8)' }} textAlign={'left'} fontSize={12} maxWidth={314}>
        {text}
      </Typography>
    </Stack>
  )
}

export default function MobileHome() {
  return (
    <Box p={0} width={'100%'}>
      <TopFrame>
        <Image style={{ marginTop: 30 }} width={74} src={topImage} />
        {/*<Stack mt={98} mb={30} direction={'row'} spacing={34}>*/}
        {/*  <ExternalLink href="">*/}
        {/*    <Image width={28} src={facebook} />*/}
        {/*  </ExternalLink>*/}
        {/*  <ExternalLink href="">*/}
        {/*    <Image width={28} src={twitter} />*/}
        {/*  </ExternalLink>*/}
        {/*  <ExternalLink href="">*/}
        {/*    <Image width={28} src={telegram} />*/}
        {/*  </ExternalLink>*/}
        {/*  <ExternalLink href="">*/}
        {/*    <Image width={28} src={medium} />*/}
        {/*  </ExternalLink>*/}
        {/*  <ExternalLink href="">*/}
        {/*    <Image width={28} src={discord} />*/}
        {/*  </ExternalLink>*/}
        {/*</Stack>*/}
        <Image style={{ marginTop: 28 }} width={148} src={topText} />
        <Typography mt={4} mb={20} fontSize={12} textAlign={'center'}>
          The first GameFi aggregation protocol which advocates F2P2E (Free to Play to Earn)
        </Typography>
        <BuyButton sx={{ transform: 'scale(0.8)' }}>Buy $RAM</BuyButton>
        <ExternalLink href="">
          <Typography sx={{ transform: 'scale(0.8)' }} mt={2} fontSize={12} color={'#ffffff'}>
            0x62214327CB0CB4041F84e6B7e6FeC6418af26F34
          </Typography>
        </ExternalLink>
        <Image style={{ marginTop: 2 }} width={120} src={dots} />
        <Stack
          sx={{ display: 'none' }}
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
        <Title style={{ marginTop: 32 }}>Project Video</Title>
        <Title>RamBox Products</Title>
        <Stack mt={32} alignItems={'center'} justifyContent={'center'} spacing={12}>
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
        <Title style={{ marginTop: 20 }}>RAM Tokenomics</Title>
        <Stack mt={32} direction={'row'} justifyContent={'center'} spacing={20}>
          <Stack textAlign={'left'}>
            <Typography sx={{ transform: 'scale(0.8)' }} fontSize={12}>
              1.Users can stake RAM in RAMSWAP module to get RAM token rewards.
            </Typography>
            <Typography sx={{ transform: 'scale(0.8)' }} fontSize={12}>
              2.Users can stake the LP of RAM and USDT in RAMSWAP module to get RAM token rewards.
            </Typography>
            <Typography sx={{ transform: 'scale(0.8)' }} fontSize={12} maxWidth={880}>
              3.Users can participate in all kinds of games in GameList module. RAM will be built into the economic
              model of these games.
            </Typography>
            <Typography sx={{ transform: 'scale(0.8)' }} fontSize={12} maxWidth={880}>
              4.RAM can be used as a medium to get RAM token rewards when users buy/sell NFT, stake NFT or produce NFT
              synthetic asset in Marketplace.
            </Typography>
          </Stack>
          <Stack justifyContent={'flex-end'} paddingRight={20}>
            <Image width={90} src={flower} />
            <Typography mt={12} fontSize={12} color={'#FFBE01'}>
              Total Supply: 74,380,704 RAM
            </Typography>
          </Stack>
        </Stack>

        <Title style={{ marginTop: 20 }}>Investors & Partners</Title>
        <Grid
          padding={12}
          mt={20}
          justifyContent={'center'}
          container
          rowSpacing={20}
          columnSpacing={20}
          direction={'row'}
        >
          <Grid item xs={4}>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item xs={4}>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item xs={4}>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item xs={4}>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item xs={4}>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item xs={4}>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item xs={4}>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
          <Grid item xs={4}>
            <TextCard>BSC PROJECT</TextCard>
          </Grid>
        </Grid>
      </Box>
      <Box margin={20} borderRadius={'12px'} padding={38} mt={40} boxShadow={'0 0 10px 4px #242381 inset'}>
        <Stack justifyContent={'space-between'}>
          <Stack spacing={4} direction={'row'} justifyContent={'space-between'}>
            <Stack direction={'row'} spacing={6}>
              <Image width={60} height={'auto'} src={topImage} />
              <Stack>
                <Typography fontSize={14}>RAM Price</Typography>
                <Typography fontSize={14} color={'#F9662A'}>
                  $0.009
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={'row'} spacing={12} alignItems={'center'}>
              <Image width={30} height={'auto'} src={coin} />
              <Typography fontSize={14}>Buy RAM</Typography>
            </Stack>
          </Stack>

          <Stack margin={'auto'} mt={30} spacing={12}>
            <Stack direction={'row'}>
              <Typography fontSize={14}>Total Supply: </Typography>
              <Typography fontSize={14} color={'#F9662A'}>
                &nbsp; 74,380,704 RAM
              </Typography>
            </Stack>
            <Stack direction={'row'}>
              <Typography fontSize={14}>Max Supply: </Typography>
              <Typography fontSize={14} color={'#F9662A'}>
                &nbsp;74,380,704 RAM
              </Typography>
            </Stack>
          </Stack>
          <Stack margin={'auto'} mt={30}>
            <Typography fontSize={14}>Max Supply</Typography>
            <Typography fontSize={14} color={'#F9662A'}>
              74,380,704 RAM
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box mt={30} paddingBottom={60} sx={{ background: `url(${footerBG})`, backgroundPositionX: 'center' }}>
        <Title>Roadmap</Title>
        <Stack direction={'row'}>
          <Stack
            margin={'auto'}
            borderRadius={'12px'}
            boxShadow={'0 0 10px 4px #242381 inset'}
            padding={'0px 12px'}
            justifyContent={'space-between'}
          >
            <Typography sx={{ whiteSpace: 'nowrap' }} lineHeight={'100px'} height={100} fontSize={14} color={'#FFBE01'}>
              Q2 2022
            </Typography>
            <Typography lineHeight={'120px'} height={130} fontSize={14} color={'#FFBE01'}>
              Q2 2022
            </Typography>
            <Typography lineHeight={'120px'} height={130} fontSize={14} color={'#FFBE01'}>
              Q2 2022
            </Typography>
            <Typography lineHeight={'120px'} height={130} fontSize={14} color={'#FFBE01'}>
              Q2 2022
            </Typography>
            <Typography lineHeight={'120px'} height={130} fontSize={14} color={'#FFBE01'}>
              Q2 2022
            </Typography>
            <Typography lineHeight={'120px'} height={130} fontSize={14} color={'#FFBE01'}>
              Q2 2022
            </Typography>
          </Stack>
          <Stack spacing={32} margin={'auto'} mt={36} justifyContent={'space-between'}>
            {list.map((item, index) => {
              return (
                <Stack height={130} spacing={12} key={index}>
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
        </Stack>
      </Box>
    </Box>
  )
}
