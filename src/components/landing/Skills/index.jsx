import React from 'react'
import {Container} from 'components/common'
import {Details, SkillsWrapper, Thumbnail, Wrapper} from './styles'
import skills from 'assets/illustrations/new/skills.svg'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={skills} alt="Skills" />
      </Thumbnail>
      <Details>
        <h2>About Me</h2>
        <p>I'm a front-end developer with passion for building engaging and intuitive user interfaces.</p>
        <ul>
          <li>Proficient with HTML5, CSS3 and Javascript (ES6)</li>
          <li>Hands-on experience using front end technologies, including Angular, Vue.js and React.</li>
          <li>Strong user interface design skills, usability analysis and experience with responsive design patterns.</li>
          <li>Understanding of RESTful web-architectures.</li>
          <li>Certified Google Analytics and Lean Six Sigma Yellow Belt professional.</li>
        </ul>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
