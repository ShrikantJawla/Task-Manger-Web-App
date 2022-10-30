import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  HStack,
  Input,
  Select,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddDateandOtherInfo from '../components/AddDateandOtherInfo'
import AddSubTasks from '../components/AddSubTasks'
import { addTaskDetails } from '../redux/taskDetail/task.actions'

function AddTask() {
  const [tags, setTags] = useState([])
  const {
    tasksDetails: { newTask },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    if (target.checked) {
      if (!tags.includes(target.value)) setTags([...tags, target.value])
    }
    dispatch(addTaskDetails({ ...newTask, tags }))
  }

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      w="90%"
      m="auto"
      h="100vh"
      p="15px"
      px="40px"
      justify="space-between"
    >
      <VStack h="full">
        <FormControl>
          <Input
            placeholder="Title"
            variant="filled"
            outline="1px solid black"
            onChange={({ target }) =>
              dispatch(addTaskDetails({ ...newTask, title: target.value }))
            }
          />
        </FormControl>
        <FormControl>
          <Textarea
            placeholder="Description"
            variant="filled"
            outline="1px solid black"
            onChange={({ target }) =>
              dispatch(
                addTaskDetails({ ...newTask, description: target.value }),
              )
            }
          />
        </FormControl>
        <VStack>
          <Select
            onChange={({ target }) =>
              dispatch(addTaskDetails({ ...newTask, status: target.value }))
            }
          >
            <option value="">Select</option>
            <option value="todo">Todo</option>
            <option value="progress">In Progress</option>
            <option value="done">Done</option>
          </Select>
        </VStack>
        <CheckboxGroup colorScheme="green">
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox onChange={handleChange} value="official">
              Official
            </Checkbox>
            <Checkbox onChange={handleChange} value="personal">
              Personal
            </Checkbox>
            <Checkbox onChange={handleChange} value="other">
              Other
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </VStack>
      <AddSubTasks />
      <AddDateandOtherInfo />
    </Stack>
  )
}

export default AddTask
