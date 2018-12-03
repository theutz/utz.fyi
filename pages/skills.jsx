import { Fragment } from 'react'
import styled from 'styled-components'

import Page from '../layouts/main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content, { Title } from '../components/Content'
import Rating from '../components/Rating'
import { space } from '../theme'

const skills = [
  [
    'Languages',
    [
      ['JavaScript', 5],
      ['HTML', 5],
      ['CSS', 5],
      ['TypeScript', 5],
      ['Node', 4],
      ['C#', 3],
      ['Sass', 5],
      ['PHP', 4],
    ],
  ],
  [
    'Frameworks',
    [
      ['React', 5],
      ['Angular', 3],
      ['Bootstrap', 4],
      ['Zurb Foundation', 4],
      ['Bulma', 4],
      ['WordPress', 5],
      ['Jekyll', 5],
      ['Gatsby', 4],
      ['NextJS', 4],
    ],
  ],
  [
    'Tools',
    [
      ['Bash/ZSH', 4],
      ['Git', 5],
      ['Gulp', 4],
      ['Webpack', 4],
      ['MySQL', 3],
      ['Docker', 3],
    ],
  ],
]

const SkillsPage = () => (
  <Page>
    <Header />
    <Content>
      <Title>Skills</Title>
      {skills.map(([header, category], i) => (
        <Fragment key={i}>
          <Heading>{header}</Heading>
          <Grid>
            {category.map(([skill, rating], index) => (
              <Item key={index}>
                <Skill>{skill}</Skill>
                <Rating level={rating} />
              </Item>
            ))}
          </Grid>
        </Fragment>
      ))}
    </Content>
    <Footer />
  </Page>
)

const Heading = styled.h3`
  margin-bottom: ${space(1)};
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-inline-start: 0;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Item = styled.li`
  display: grid;
  padding-bottom: ${space(2)};
  list-style: none;
  grid-template-columns: 1fr 100px;

  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 120px;
  }
`

const Skill = styled.span``

export default SkillsPage
