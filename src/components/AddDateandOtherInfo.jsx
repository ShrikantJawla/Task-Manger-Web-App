import { Button, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTask, addTaskDetails } from '../redux/taskDetail/task.actions'

function AddDateandOtherInfo() {
  const {
    tasksDetails: { newTask },
  } = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <VStack h="full" p="10px" align="center">
      <Input
        type="date"
        outline="1px solid black"
        onChange={({ target }) =>
          dispatch(addTaskDetails({ ...newTask, date: target.value }))
        }
      />
      <Button
        onClick={() => dispatch(addNewTask(newTask))}
        w="full"
        colorScheme="linkedin"
      >
        Add task
      </Button>
    </VStack>
  )
}

export default AddDateandOtherInfo
