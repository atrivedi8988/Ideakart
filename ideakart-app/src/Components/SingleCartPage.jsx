import {
  Box,
  Button,
  HStack,
  Image,
  Table,
  TableContainer,
  Text,
  Thead,
  VStack,
  Tr,
  Tbody,
  Td,
  Th,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBooksDataById } from "../api";
import { Footer } from "./Footer";



const BookDetailsList = ({data}) => {
  // console.log(data)

  return (
    <>
      <Text textAlign="left" fontSize="2xl">
        Book Specification
      </Text>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Th>Binding</Th>
              <Td> {data.binding}</Td>
            </Tr>
            <Tr>
              <Th>Language</Th>
              <Td>{data.language}</Td>
            </Tr>
            <Tr>
              <Th>Number Of Pages</Th>
              <Td>{data.number_Of_Pages}</Td>
            </Tr>
            <Tr>
              <Th>Author</Th>
              <Td>
                <Link>{data.author}</Link>
              </Td>
            </Tr>
            <Tr>
              <Th>Publisher</Th>
              <Td>
                <Link>{data.publisher}</Link>
              </Td>
            </Tr>
            <Tr>
              <Th>Isbn-10</Th>
              <Td> {data.isbn-10}</Td>
            </Tr>
          </Tbody>
          <Tr>
            <Th>Isbn-13</Th>
            <Td> {data.isbn-13}</Td>
          </Tr>
          <Tr>
            <Th>Dimension</Th>
            <Td>{data.dimension}</Td>
          </Tr>
        </Table>
      </TableContainer>
    </>
  );
};

const BooksDetailsSecondTable = ({data}) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Store</Th>
              <Th>Price</Th>
              <Th>Buy Now</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Amazon, Paperback</Td>
              <Td> Rs. {data.price}</Td>
              <Td>
                <Button colorScheme="blue">Buy Now</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export function SingleCartPage() {
  const params = useParams()

  const [data,setData] = useState({})

  useEffect(()=>{
    getBooksDataById(params.id).then((res)=>{
      setData(res.data)
    })
  },[params.id])
  return (
    <>
      <Box
          //  border="1px solid red"
        w={{lg:"75rem"}}
        m="auto"
        mt="30px"
      >
        {/* ----------------above first part-------- */}

        <Stack
        // border="1px solid red" 
        justifyContent={{sm:"center",md:"space-between",lg:"space-between"}}
        alignItems={{base:"center",sm:"center",md:"flex-start",lg:"flex-start"}}
        direction={{base:"column",sm:"column",md:"row",lg:"row"}}
         w="100%"
         >
          {/* -------------above start first right part--------- */}

          <VStack
        //    border="1px solid black"
            w={{md:"80%",lg:"32%"}}
            >
            <Box 
            border="1px solid rgb(227, 227, 227)" 
            p="15px"
             w="100%"
             >
              <Image
                src={data.avatar}
                w="100%"
              />
            </Box>
            <Box  w="100%">
              <Text textAlign="left">
                Buy it at <b>best price</b> from here
              </Text>
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl">Rs. {data.price}</Text>
                <Button fontSize="xl" p="25px" colorScheme="orange">
                  Buy Now
                </Button>
              </HStack>
            </Box>
            <Box bg="yellowgreen" textAlign="center">
              <Text>
                Get Instant Cashback when you pay using Amazon Pay... Click Here
              </Text>
            </Box>
            <Box w="100%">
              <BookDetailsList data={data}/>
            </Box>
          </VStack>

          {/* -------------above end first right part--------- */}

          {/* -------------above start first left part--------- */}

          <VStack
        //    border="1px solid black" 
           w={{lg:"65%"}}
           >
            <VStack alignItems="flex-end" w="100%" mt="20px" mr="20px">
              <Button colorScheme="green">
                Refresh Page &nbsp;{" "}
                <img
                  width="30px"
                  src="https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/64/000000/external-Refresh-user-interface-febrian-hidayat-flat-febrian-hidayat.png"
                  alt="refresh-icon"
                />
              </Button>
            </VStack>
            <Box w="100%">
              <Text fontSize="4xl" textAlign="left">
               {data.title}
              </Text>
            </Box>
            <Box bg="whiteAlpha.100" border="1px solid rgb(227, 227, 227)" p="20px">
              <Text textAlign="left" fontSize="3xl" mb="20px">
                {data.author} {data.title}
              </Text>
              <Text textAlign="left">
               {data.description}
              </Text>
            </Box>
            <Box w="100%">
              <BooksDetailsSecondTable data={data}/>
            </Box>
          </VStack>
          {/* -------------above end first left part--------- */}
        </Stack>

        {/* -------------------Quetion And Answer Box-------- */}

        <Box>
          <Text fontSize="4xl" textAlign="left" mt="30px">
            Why you should read Chemistry for Beginners (Classic Reprint) 
          </Text>
          <Box bg="whiteAlpha.100" p="20px" border="1px solid rgb(227, 227, 227)">
            <Text>
              <b>This book</b> has been written by <b>{data.author},</b>{" "}
              who has written books like Chemistry for Beginners (Classic
              Reprint).
              <b>This book</b> are written in Chemistry category. This book is
              read by people who are interested in reading books in category :
              Chemistry. So, if you want to explore books similar to This book,
              you must <b> read</b> and <b> buy </b> this book.
            </Text>
          </Box>
        </Box>

        {/* -------------Third Table --------- */}

        <Box bg="cornflowerblue" color="white" mt="30px">
          <Text textAlign="left">
            Searches in World for {data.title}
          </Text>
          <TableContainer border="white">
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>City</Td>
                  <Td>Country</Td>
                  <Td>Count</Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td></Td>
                  <Td>{data.count}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/* ---------------------Top Reads----------------- */}

        {/* <Box mt="30px">
          <Text fontSize="2xl" textAlign="left">
            Top Reads
          </Text>
        </Box> */}
      </Box>
      <Footer/>
    </>
  );
}
