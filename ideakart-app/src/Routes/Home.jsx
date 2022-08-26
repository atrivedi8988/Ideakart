import {  Heading, SimpleGrid } from '@chakra-ui/react'
import { Cart } from '../Components/Cart'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Footer } from '../Components/Footer';

const getBooksData = ()=>{
    return axios.get(`https://dry-savannah-48520.herokuapp.com/books`)
}

export function Home(){
    const [booksData,setBooksData] = useState([]);
    useEffect(()=>{
        getBooksData().then((res)=>{
            setBooksData(res.data)
        })
    },[])
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
        <Footer/>

        

        </>
    )
}