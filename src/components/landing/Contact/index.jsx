import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'
import contact from 'assets/illustrations/new/contact.svg'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
        <h2>Contact Me</h2>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
)
