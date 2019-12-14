import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Ratna Prema</h2>
				<span>
					©  {new Date().getFullYear()} All rights are reserved. Built with {' '}
					<a
						href="https://gatsbyjs.org"
						rel="noopener noreferrer"
						target="_blank"
					>
						Gatsby.js
					</a> and hosted on {' '}
					<a
						href="https://netlify.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						Netlify
					</a>. Illustrations from <a
					href="https://undraw.co"
					rel="noopener noreferrer"
					target="_blank"
				>
						Undraw
					</a>.
				</span>
			</Details>
		</Flex>
	</Wrapper>
)
