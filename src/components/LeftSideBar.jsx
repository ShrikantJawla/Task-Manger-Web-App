import React, { useEffect } from 'react'
import { Button, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/auth/auth.actions'
import { getAllTags } from '../redux/taskDetail/task.actions'

const LeftSideBar = () => {
  const dispatch = useDispatch()
  const {
    authDetails: { token },
  } = useSelector((state) => state)
  const { all, personal, official, others } = useSelector(
    (store) => store.tasksDetails.tagsCounts,
  )
  useEffect(() => {
    dispatch(getAllTags())
  }, [])

  return (
    <VStack
      w="20.5%"
      display={{ base: 'none', lg: 'block' }}
      boxShadow="dark-lg"
      backgroundColor="#4C6793"
      h="full"
      position="fixed"
      left={0}
      top="80px"
      bottom={0}
      pt="10px"
    >
      <VStack h="85vh" justify="space-between" align="center">
        <Text color="white">
          <span
            style={{ color: 'black', fontSize: '17px', fontWeight: 'bold' }}
          >
            Token:{' '}
          </span>{' '}
          {token}
        </Text>
        <Divider />
        <VStack
          w="full"
          h="200px"
          boxShadow="outline"
          backgroundColor="#28364d"
          p="5px"
          justify="center"
        >
          <HStack
            backgroundColor="inherit"
            color="white"
            p="2px"
            w="100px"
            justify="center"
          >
            <Text>All</Text>
            <Text>{all}</Text>
          </HStack>
          <HStack
            backgroundColor="inherit"
            color="white"
            p="2px"
            w="100px"
            justify="center"
          >
            <Text>Personal</Text>
            <Text>{personal}</Text>
          </HStack>
          <HStack
            backgroundColor="inherit"
            color="white"
            p="2px"
            w="100px"
            justify="center"
          >
            <Text>Official</Text>
            <Text>{official}</Text>
          </HStack>
          <HStack
            backgroundColor="inherit"
            color="white"
            p="2px"
            w="100px"
            justify="center"
          >
            <Text>Others</Text>
            <Text>{others}</Text>
          </HStack>
        </VStack>
        <Divider />
        <Button
          variant="outline"
          color="white"
          onClick={() => dispatch(logout())}
        >
          Logout
        </Button>
      </VStack>
    </VStack>
  )
}

export default LeftSideBar
