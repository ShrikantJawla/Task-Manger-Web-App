import { Button, FormControl, HStack, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSubTask } from '../redux/taskDetail/task.actions'
import OneSubTask from './OneSubTask'
import { v4 } from 'uuid'

function AddSubTasks() {
  const [subTask, setSubTask] = useState({})
  const {
    tasksDetails: { newTask },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(addSubTask(subTask))
  }

  return (
    <VStack h="full" overflow="auto" p="10px">
      <HStack>
        <FormControl>
          <Input
            placeholder="Add Subtask"
            variant="filled"
            outline="1px solid black"
            onChange={({ target }) =>
              setSubTask({ id: `${v4()}+${Math.random()}`, text: target.value })
            }
          />
        </FormControl>
        <Button onClick={handleSubmit} variant="solid" colorScheme="facebook">
          Add
        </Button>
      </HStack>
      {/* This is to be added in loop */}
      {newTask.subTasks &&
        newTask.subTasks.map((task) => (
          <OneSubTask
            key={`${v4()}+${Math.random() * Math.random()}`}
            subTask={task.text}
            id={task.id}
          />
        ))}
    </VStack>
  )
}

export default AddSubTasks
