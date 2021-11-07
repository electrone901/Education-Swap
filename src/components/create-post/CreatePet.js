import React from 'react'
import './CreatePet.css'
import { Container, StylesProvider, Typography } from '@material-ui/core'

function CreatePet() {
  // Add variables

  return (
    <StylesProvider injectFirst>
      <Container
        className="root-create-pet"
        style={{ minHeight: '70vh', paddingBottom: '3rem' }}
      >
        <div>
          <Typography className="title" color="textPrimary" gutterBottom>
            Add a photo of your pet
          </Typography>

          {/* Add Form */}
        </div>
      </Container>
    </StylesProvider>
  )
}

export default CreatePet
