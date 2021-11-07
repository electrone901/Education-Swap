import React, {  useEffect } from 'react'
import { useParams } from 'react-router'

import {

  Grid,
  Container,
  StylesProvider,
} from '@material-ui/core'
import './PetDetails.css'


function PetDetails({ account, contractData }) {
  const { petId } = useParams()
  // Add state variables

  useEffect(() => {
    if (petId) {
      getMetadata()
      getImage()
    }
  }, [petId, contractData])

  const getImage = (ipfsURL) => {}

  const getMetadata = async () => {}


  return (
    <StylesProvider injectFirst>
      <Container
        className="root-pet-details"
        style={{ minHeight: '50vh', paddingBottom: '3rem' }}
      >
        <div className="">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className="grid-container">
              {/* Add pet details */}


            </Grid>

            <Grid item xs={12} sm={6}>
              {/*Add Transaction Confirmation: */}

              {/* Add form */}

              {/* Display comments  */}
            </Grid>
          </Grid>
        </div>
      </Container>
    </StylesProvider>
  )
}

export default PetDetails
