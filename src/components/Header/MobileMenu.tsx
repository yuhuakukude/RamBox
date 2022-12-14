import React, { useState, useCallback } from 'react'
import { ExpandMore } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { Box, MenuItem, styled, Theme, Drawer, Stack } from '@mui/material'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import telegram from '../../assets/images/telegram.png'
import medium from '../../assets/images/medium.png'
import discord from '../../assets/images/discord.png'

import { ExternalLink } from 'theme/components'
import { Tabs } from '.'
import Image from '../Image'

const StyledNavLink = styled(NavLink)({})

const navLinkSx = {
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: 24,
  color: (theme: Theme) => theme.palette.text.secondary,
  padding: '13px 24px',
  width: '100%',
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'flex-start',
  '&.active': {
    color: (theme: Theme) => theme.palette.primary.main
  },
  '&:hover': {
    color: (theme: Theme) => theme.palette.text.primary
  }
} as const

export default function MobileMenu({ isOpen, onDismiss }: { isOpen: boolean; onDismiss: () => void }) {
  return (
    <Drawer
      open={isOpen}
      onClose={onDismiss}
      anchor="top"
      BackdropProps={{ sx: { backgroundColor: 'transparent' } }}
      PaperProps={{
        sx: {
          top: theme => ({ xs: theme.height.mobileHeader, sm: theme.height.header })
        }
      }}
      sx={{
        zIndex: theme => theme.zIndex.appBar,
        overflow: 'hidden',
        top: theme => ({ xs: theme.height.mobileHeader, sm: theme.height.header })
      }}
    >
      <Box display="grid" gap="15px">
        {Tabs.map(({ title, route, link, titleContent, subTab }) => {
          const content = titleContent ?? title
          return subTab ? (
            <Accordion placeholder={title} key={title}>
              {subTab.map(sub => {
                const subContent = sub.titleContent ?? sub.title
                return sub.link ? (
                  <MenuItem key={sub.link}>
                    <ExternalLink href={sub.link} sx={navLinkSx}>
                      {subContent}
                    </ExternalLink>
                  </MenuItem>
                ) : (
                  <MenuItem key={sub.title} onClick={onDismiss}>
                    <StyledNavLink to={sub.route ?? ''} className={'link'} sx={navLinkSx}>
                      {subContent}
                    </StyledNavLink>
                  </MenuItem>
                )
              })}
            </Accordion>
          ) : link ? (
            <ExternalLink href={link} sx={navLinkSx} key={link}>
              {content}
            </ExternalLink>
          ) : (
            route && (
              <StyledNavLink key={title} id={`${route}-nav-link`} to={route} sx={navLinkSx} onClick={onDismiss}>
                {content}
              </StyledNavLink>
            )
          )
        })}
        <Stack padding={'0 30px'} mt={98} mb={12} direction={'row'} spacing={34}>
          <ExternalLink href="">
            <Image width={20} src={facebook} />
          </ExternalLink>
          <ExternalLink href="">
            <Image width={20} src={twitter} />
          </ExternalLink>
          <ExternalLink href="">
            <Image width={20} src={telegram} />
          </ExternalLink>
          <ExternalLink href="">
            <Image width={20} src={medium} />
          </ExternalLink>
          <ExternalLink href="">
            <Image width={20} src={discord} />
          </ExternalLink>
        </Stack>
      </Box>
    </Drawer>
  )
}

function Accordion({ children, placeholder }: { children: React.ReactNode; placeholder: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = useCallback(() => {
    setIsOpen(state => !state)
  }, [])
  return (
    <>
      <Box sx={navLinkSx} display="flex" alignItems="center" gap={12} onClick={handleClick}>
        {placeholder}{' '}
        <ExpandMore
          sx={{
            transform: isOpen ? 'rotate(180deg)' : ''
          }}
        />
      </Box>

      {isOpen && (
        <Box mt={-25} mb={12}>
          {children}
        </Box>
      )}
    </>
  )
}
