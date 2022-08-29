import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { signinData } from '../api';
import { Footer } from '../Components/Footer';
import { AppContext } from '../Context/AppContext';
import {Navigate, useNavigate} from "react-router-dom"
  
  export function SignIn() {

    const {isAuth,setIsAuth} = useContext(AppContext)
    const navigate = useNavigate()

   

    const [formState,setFormState] = useState({
      email:"",
      password :""
    })

    const handleChange = (e)=>{
      const {name,value} = e.target;
      setFormState({
        ...formState,
        [name]:value
      })
    }

    const handleSubmit = ()=>{
      signinData().then((res)=>{
        if(res.data.payload.email==formState.email && res.data.payload.password==formState.password ){
          alert("you are logged in")
          setIsAuth(true)
          navigate("/")
        }
        else{
          alert("Wrong credentials")
        }
      })
    }

   
    
    return (
        <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={handleChange} name="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={handleChange} name="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer/>
      </>
    );
  }