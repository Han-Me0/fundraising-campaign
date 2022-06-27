import { Box, Button, Group, Input, InputWrapper, PasswordInput, Title } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import { login } from '../utils/helper'
import React, { Component }  from 'react';



const LoginPage = () => {
  const navigate = useNavigate()
  const { authenticateUser } = useContext(SessionContext)
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  })

  const logUser = async credentials => {
    try {
      const response = await login(credentials)
      console.log(response)
      if (response.status === 'KO') {
        throw new Error(response.message)
      } else {
        authenticateUser(response.token)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = values => {
    logUser(values)
  }

  return (
    <body className='bg-yellow'>
      <Box sx={{ maxWidth: 340 }} mx="auto" >
      <Title>Login</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper
          required
          label='Username'
          description='Your unique username'
      
        >
          <Input {...form.getInputProps('username')} />
        </InputWrapper>
        <InputWrapper required label='Password' description='Your password'>
          <PasswordInput {...form.getInputProps('password')} />
        </InputWrapper>

        <Group position="right" mt="md">
        <Button type='submit'>Login</Button>
        </Group>
       
      </form>
    </Box>
    </body>
    
  )
}

export default LoginPage
