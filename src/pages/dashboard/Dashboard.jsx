import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import LeftSideBar from '../../components/LeftSideBar'

const Dashboard = () => {
  return (
    <HStack w="100%" h="100vh">
      <Box flex={{ base: 0, lg: 1 }}>
        <LeftSideBar />
      </Box>
      <Box flex={4}>
        <Outlet />
      </Box>
    </HStack>
  )
}

export default Dashboard
