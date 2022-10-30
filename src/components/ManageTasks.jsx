import { HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAllTasks } from '../redux/taskDetail/task.actions'
import OneTask from './OneTask'
import { v4 } from 'uuid'
import styled from 'styled-components'

const ManageTasks = () => {
  const [statusUpdate, setStatusUpdate] = useState(0)
  const { pendingTasks, completedTasks, todo } = useSelector(
    (store) => store.tasksDetails,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateAllTasks())
  }, [statusUpdate])

  const handleStatusChange = () => {
    setStatusUpdate(statusUpdate + 1)
  }

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      w="full"
      m="auto"
      pt={{ base: '90px', md: '0px' }}
    >
      <StyledVStack
        w="100%"
        flex={1}
        justifyContent="flex-start"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        // backgroundColor="#8bbcccb1"
        h="100vh"
        overflow="auto"
        py="30px"
      >
        <Text color="black" fontSize={20} fontWeight="bold">
          Todo
        </Text>
        <VStack w="full" spacing={8}>
          {todo &&
            todo.map((item) => (
              <OneTask
                key={v4()}
                handleStatusChange={handleStatusChange}
                {...item}
              />
            ))}
        </VStack>
      </StyledVStack>
      <StyledVStack
        flex={1}
        justifyContent="flex-start"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        backgroundColor="#8bbccc8d"
        h="100vh"
        overflow="auto"
        py="30px"
      >
        <Text color="black" fontSize={20} fontWeight="bold">
          InProgress
        </Text>
        <VStack w="full" spacing={8}>
          {pendingTasks &&
            pendingTasks.map((item) => (
              <OneTask
                key={v4()}
                handleStatusChange={handleStatusChange}
                {...item}
              />
            ))}
        </VStack>
      </StyledVStack>
      <StyledVStack
        flex={1}
        justifyContent="flex-start"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        // backgroundColor="#8bbcccb1"
        h="100vh"
        overflow="auto"
        py="30px"
      >
        <Text color="black" fontSize={20} fontWeight="bold">
          Done
        </Text>
        <VStack w="full" spacing={8}>
          {completedTasks &&
            completedTasks.map((item) => (
              <OneTask
                key={v4()}
                handleStatusChange={handleStatusChange}
                {...item}
              />
            ))}
        </VStack>
      </StyledVStack>
    </Stack>
  )
}

export default ManageTasks

const StyledVStack = styled(VStack)`
  &::-webkit-scrollbar {
    display: none;
  }
`
