import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import intro from 'assets/illustrations/new/intro.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m Ratna Prema and I’m a Front End developer with a knack for UI/UX design.</h4>
				<Button as={AnchorLink} href="#projects">
					My Projects
				</Button>
			</Details>
			<Thumbnail>
				<img src={intro} alt="Intro" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
