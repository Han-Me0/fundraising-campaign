import {Space, Text, Box, Button, Input, InputWrapper, PasswordInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../utils/helper'
import React, { Component }  from 'react';
import '../App.css';

const SignupPage = () => {
  const navigate = useNavigate()
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  })

  const createUser = async newUser => {
    try {
      const response = await signup(newUser)

      if (response.status === 'KO') {
        throw new Error(response.message)
      }

      navigate('/login')
    } catch (error) {
      form.setErrors({ username: error.message })
    }
  }

  const handleSubmit = values => {
    createUser(values)
  }

  return (
    
    <body className='bg-yellow'>
      <Box sx={{ maxWidth: 340 }} mx="auto">
      <Title>Sign up</Title>
      <Space h="md" />
      <Text size="xs"  >Launch a crowdfunding in 5 minutes or donate generously.</Text>
      <Space h="md" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper
          required
          label='Username'
          // description='Your unique username'
       
        >
          <Input {...form.getInputProps('username')} />
        </InputWrapper>
        <Space h="md" />
        
        <InputWrapper required label='Password' 
        // description='Your password'
        >
          <PasswordInput {...form.getInputProps('password')} />
        </InputWrapper>
        <Space h="md" />
        <Button type='submit'>Get Started</Button>
      </form>
    </Box>
    </body>
    
  )
}

export default SignupPage
