import { Box } from '@mantine/core'
import React, { Component }  from 'react';
import { useContext } from 'react'
import { useState } from 'react'
import AddButton from '../components/AddButton'
import Campaign from '../components/Campaign'
import NewCampModal from '../components/NewCampaign'
import {CampContext} from '../contexts/CampContext'

const AllCampsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {cat} = useContext(CampContext)
  console.log(cat)

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplate: '1fr / 1fr 1fr',
          gridAutoRows: '1fr',
          gap: '20px',
          margin: '20px',
        }}
      >
      </Box>
      <AddButton setIsModalOpen={setIsModalOpen} />
      <NewCampModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default AllCampsPage