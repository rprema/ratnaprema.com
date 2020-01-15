import React from 'react'
import {Card, Container} from 'components/common'
import {Content, Grid, Item, Links, Wrapper} from './styles'

export const Projects = () => {
  let projects = [
      {
          id: 1,
          name: 'Easy Invoice',
          description: 'Create and manage multiple clients, invoices from a single dashboard.',
          demoUrl: 'https://easy-invoice-app.firebaseapp.com/',
          sourceUrl: 'easy-invoice',
          stack: 'Angular, Firebase'
      },
      {
          id: 2,
          name: 'CSS Explorer',
          description: 'Explore CSS properties interactively in a visual grid. Currently supports Flexbox.',
          demoUrl: 'https://css-explorer-app.netlify.com/',
          sourceUrl: 'css-explorer',
          stack: 'Angular'
      },
      {
          id: 3,
          name: 'Visual Email Builder',
          description: 'Drag and drop visual UI builder to create Email Templates.',
          demoUrl: 'https://visual-email-builder.netlify.com/',
          sourceUrl: 'visual-email-builder',
          stack: 'React, React-dnd'
      },
      {
          id: 4,
          name: 'CRS Calculator',
          description: 'Calculate the points needed to apply for the permanent residency in Canada.',
          demoUrl: 'https://crs-calculator.netlify.com/',
          sourceUrl: 'crs-calculator',
          stack: 'Vue.js, Element'
      },
      {
          id: 5,
          name: 'Github Bulk Delete',
          description: 'Delete multiple Github repositories using this UI tool.',
          demoUrl: 'https://bulk-delete-github.netlify.com/',
          sourceUrl: 'bulk-delete-github',
          stack: 'Vue.js, TailwindCSS'
      },
  ];
  return (
    <Wrapper as={Container} id="projects">
      <h2>My Projects</h2>
      <Grid>
        {projects.map((node) => (
          <Item>
            <Card>
              <Content>
                  <h4>{node.name}</h4>
                  <p>Source: <a href={"https://github.com/rprema/" + node.sourceUrl} target={"_blank"}>
                      {"/" + node.sourceUrl}
                  </a></p>
                <p>{node.description}</p>
                <p>Stack: <span>{node.stack}</span></p>
                  <Links>
                      <a href={node.demoUrl} target={"_blank"}>
                          View Demo →
                      </a>
                  </Links>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
