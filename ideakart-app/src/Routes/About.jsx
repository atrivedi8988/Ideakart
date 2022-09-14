import { Text, VStack } from "@chakra-ui/react";
import { Footer } from "../Components/Footer";

export function About() {
  return (
    <>
      <VStack  alignItems={"flex-start"} width={"70%"} margin="auto" mb="9rem" mt="2rem">
    
        <Text fontSize={"lg"} >
          Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories.
        </Text>
        <Text fontSize={"lg"}>
          We have a user friendly search engine and a quick delivery system. With this weeven provide best discounts on our books. You can write to us for anyidea or any help you need.
        </Text>
        <Text fontSize={"lg"}>
          Ideakart is a site that gives u an idea and aplatform for the book you want. We offer a huge collection of books in diverse categories.
        </Text>
        <Text fontSize={"lg"}>
          We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need.
        </Text>
      </VStack>
      <Footer />
    </>
  );
}
