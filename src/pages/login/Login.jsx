import React, { useState } from 'react'
import { Box, Button, FormControl, Input, Text, VStack } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth/auth.actions'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: '', password: '' })
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(login(user));
    navigate('/');
  }

  return (
    <Box mt="100px">
      <Box
        w={{ base: '98%', lg: '48%' }}
        h="400px"
        boxShadow="2xl"
        backgroundColor="gray"
        m="auto"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        rounded="10px"
      >
        <VStack w="full">
          <Text color="white" fontSize="19px">
            Sign In
          </Text>
          <FormControl w={{ base: '100%', lg: '50%' }}>
            <Input
              value={user.email}
              onChange={({ target }) =>
                setUser({ ...user, email: target.value })
              }
              backgroundColor="whatsapp.100"
              outline="1px solid black"
              w="100%"
              placeholder="Email"
            />
          </FormControl>
          <FormControl w={{ base: '100%', lg: '50%' }}>
            <Input
              value={user.password}
              onChange={({ target }) =>
                setUser({ ...user, password: target.value })
              }
              backgroundColor="whatsapp.100"
              outline="1px solid black"
              w="100%"
              placeholder="Password"
              type="password"
            />
          </FormControl>
          <Button
            onClick={handleSubmit}
            variant="solid"
            colorScheme="facebook"
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}

export default Login
