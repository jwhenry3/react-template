import { Button } from '@material-ui/core'
import { Example } from 'library'
import React from 'react'

export default function IndexPage() {
  return (
    <>
      <Button variant='contained' color='primary'>
        Button from Material
      </Button>
      <Example text='Create React Library Example 😄' />
    </>
  )
}
IndexPage.title = 'Index Page'
