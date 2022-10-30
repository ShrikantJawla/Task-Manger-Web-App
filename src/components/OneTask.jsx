import { Button, Divider, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { updateStatus } from '../redux/taskDetail/task.actions'

function OneTask({
  title,
  description,
  handleStatusChange,
  tags,
  subTasks,
  date,
  status,
  id,
}) {
  const dispatch = useDispatch()

  const handleClick = (status) => {
    dispatch(updateStatus(id, { status }))
    handleStatusChange()
  }

  return (
    <VStack
      backgroundColor="#42a3c485"
      rounded={10}
      w="80%"
      boxShadow="xl"
      h="fit-content"
      py="30px"
      px="10px"
    >
      <Text color="#320850" fontSize={20} fontWeight="bold">
        {title}
      </Text>
      <Divider />
      <HStack w="full" px="10px">
        {tags &&
          tags.map((tag) => (
            <Text
              w="fit-content"
              backgroundColor="#8c5aafd4"
              rounded="10px"
              px="10px"
              py="5px"
              color="#ffffff"
              fontSize="14px"
            >
              {tag}
            </Text>
          ))}
        <Spacer />
        <HStack align="center">
          <Text>Date: </Text>
          <Text fontSize="10px" color="#a92929" fontWeight="bold">
            {date}
          </Text>
        </HStack>
      </HStack>
      <HStack h="fit-content" p="5px" w="full">
        <Text fontWeight={700} w="full" textAlign="center">
          {description}
        </Text>
      </HStack>
      <VStack w="full" h="fit-content">
        <ol
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            width: 'fit-content',
          }}
        >
          {subTasks &&
            subTasks.map((task) => (
              <li
                style={{ width: 'fit-content' }}
                key={`${v4()}+${Math.random()}+${Math.random()}`}
              >
                {task.text},
              </li>
            ))}
        </ol>
      </VStack>
      <HStack style={{ marginTop: '10px' }} w="full" justify="center">
        {status !== 'todo' && (
          <Button
            backgroundColor="#c43939"
            color="white"
            onClick={() => handleClick('todo')}
            h="35px"
          >
            Hold
          </Button>
        )}
        {status !== 'done' && (
          <Button
            colorScheme="facebook"
            onClick={() => handleClick('done')}
            h="35px"
          >
            Done
          </Button>
        )}
        {status !== 'progress' && (
          <Button
            backgroundColor="#539046"
            color="white"
            onClick={() => handleClick('progress')}
            h="35px"
          >
            Start
          </Button>
        )}
      </HStack>
    </VStack>
  )
}

export default OneTask
