import React from 'react'
import {Box, Block, Heading, Text} from 'primer-react'
import Octicon, {iconsByName} from '@githubprimer/octicons-react'
import BoxPro from '../src/BoxPro'
import Nav from '../src/Nav'
import Hero from '../src/Hero'


export default () =>
<React.Fragment>
  <BoxPro bg='black'>
    <Nav />
    <Hero />
  </BoxPro>
</React.Fragment>
