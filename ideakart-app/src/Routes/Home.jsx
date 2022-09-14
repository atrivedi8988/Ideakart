import {  Box, Button, Heading, SimpleGrid,Text, HStack } from '@chakra-ui/react'
import { Cart } from '../Components/Cart'
import { useState } from 'react';
import { useEffect } from 'react';
import { Footer } from '../Components/Footer';
import { getBooksData } from '../api';
import { useSearchParams } from 'react-router-dom';

export function Home(){
    const [booksData,setBooksData] = useState([]);
    const [searchParam,setSearchParam] = useSearchParams("page")
    const initPage = Number(searchParam.get("page")) || 1
    const [page,setPage] = useState(initPage)
    
    useEffect(()=>{
        getBooksData(page).then((res)=>{
            setBooksData(res.data)
        })
       setSearchParam({page})
    },[page,setSearchParam])
    // console.log(booksData)

    return (
        <>

        <Heading ml={"50px"} mt="20px" size={"md"}>Top Reads</Heading>
        <SimpleGrid columns={[1,2,3,4]} mb={"50px"}>
            {
                booksData?.map((item)=>{
                    return <Cart key={item.id} data={{...item}} />
                })
            }
        </SimpleGrid>
        <Box>
        <HStack  w="14%" m="auto"gap={"20px"}>
            <Button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</Button>
            <Text fontSize={"lg"} fontWeight="bold">{page}</Text>
            <Button disabled={page===4} onClick={()=>setPage(page+1)}>Next</Button>
        </HStack>
        </Box>
        
        
        <Footer/>

        

        </>
    )
}