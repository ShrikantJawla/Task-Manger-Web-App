import { HStack, IconButton, Spacer } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { deleteSubTask } from '../redux/taskDetail/task.actions'

function OneSubTask({ subTask, id }) {
  const dispatch = useDispatch()
  return (
    <HStack
      w="100%"
      justify="center"
      backgroundColor="teal.200"
      p="5px"
      pl="27px"
      rounded={10}
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
    >
      <ul>
        <li key={`${v4()}+${Math.random() * Math.random()}`}>{subTask}</li>
      </ul>
      <Spacer />
      <IconButton
        onClick={() => dispatch(deleteSubTask(id))}
        backgroundColor="inherit"
        icon={<RiDeleteBin5Line color="red" />}
      />
    </HStack>
  )
}

export default OneSubTask
