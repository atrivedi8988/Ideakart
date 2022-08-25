import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";

export function Cart({data}) {
    // console.log(data)
  return (
    <>
    <Box width={"80%"} m="auto" >
    <Box
        mt="20px"
        p="20px"
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
        width={"18rem"}
        height="30rem"
      >
        <VStack width={"100%"} h="70%" >
          <Image
            src={data.avatar}
            width={"100%"} h={"100%"}
          />
          <VStack w={"100%"} alignItems={"flex-start"} borderBottom={"1px solid rgb(216, 212, 212)"} >
            <Text fontSize={"12px"} mb={"-10px"}>{data.title}</Text>
            <Text fontSize={"12px"} color="blue.400">{data.price} Rs.</Text>
          </VStack>
          <HStack>
            <Button>🛒 View Now</Button>
            <Button>
              <img src="https://img.icons8.com/color/48/FFFFFF/details-pane.png" />{" "}
              &nbsp; More details
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Box>
     
    </>
  );
}
