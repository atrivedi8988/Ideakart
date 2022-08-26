import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  VStack,
  Container,
  Stack,
  Text,
  Textarea,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { Footer } from "../Components/Footer";


export function Contact() {
  return (
    <>
    <div style={{backgroundImage:"url('https://ideakart.com/assets/youridea-23d18c0fab7feb4d66e4c1dbc419428c71b2014ff742fc52b4006f6b65af6b67.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"50rem",paddingTop:"80px"}} >
    <Text textAlign={"center"}>You can Contact our team by filling this form - </Text>
      <Stack w={{lg:"70rem",md:"30rem",sm:"20rem",base:"20rem"}} m="auto" justify={"center"} align="center" mt={"40px"}  >
        
          <SimpleGrid w={"100%"} columns={[1,1,2]}>
            <FormControl w={"95%"}>
              <FormLabel w={"100%"}>First Name</FormLabel>
              <Input type="text" placehoder="Please enter your first name*" bg={"whiteAlpha.900"} />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" placehoder="Please enter your last name*" bg={"whiteAlpha.900"} />
            </FormControl>
          </SimpleGrid>

          <SimpleGrid w={"100%"} columns={[1,1,2]}>
            <FormControl w={"95%"}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placehoder="Please enter your email*" bg={"whiteAlpha.900"} />
            </FormControl>
            <FormControl>
              <FormLabel>Phone No.</FormLabel>
              <Input type="text" placehoder="Please enter your phone no.*" bg={"whiteAlpha.900"} />
            </FormControl>
          </SimpleGrid>

        <FormControl>
          <FormLabel>Messege</FormLabel>
          <Textarea placeholder="Messege for me*" size={"md"} h="10rem" bg={"whiteAlpha.900"} />
        </FormControl>

        <Button colorScheme={"green"}>Send messege</Button>
      </Stack>
    </div>
    <Footer/>
    </>
  );
}
