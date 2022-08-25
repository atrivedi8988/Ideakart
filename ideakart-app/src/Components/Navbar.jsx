import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const links = [
  {
    link: "About",
    path: "/about",
  },
  {
    link: "Contact",
    path: "/contact",
  },
];
export function Navbar() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <HStack w={"100%"} display={{ base: "inline-flex", md: "none" }}>
        <Input bg={"gray.100"} placeholder="Search" borderRadius="none" />
        <Button>Submit</Button>
      </HStack>
      {/* ------------------above code is for mobile serch input and button-------------- */}
      <Box w="100%" h={"50px"} bg={"#2874F0"}>
        <Flex
          // border={"1px solid red"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={{ xl: "10rem", lg: "5rem", md: "0.5rem", sm:"0.5rem",base:"0.5rem" }}
          h={"100%"}
          w={"100%"}
        >
          <HStack gap={"20px"}>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <Heading size={"md"} color="yellow.300">
                IDEAKART
              </Heading>
            </Link>
            <HStack display={{ base: "none", md: "inline-flex" }}>
              <Input bg={"white"} placeholder="Search" width={"20rem"} />
              <Button>Submit</Button>
            </HStack>
          </HStack>
          {/* -----------------breaking  nav---------------------- */}

          <HStack gap={"20px"}>
            {links.map((el) => (
              <Link
                key={el.link}
                href={el.link}
                display={{ base: "none", md: "none", lg: "inline-flex" }}
              >
                {el.link}
              </Link>
            ))}
            <Link href={"sign_in"} display={{ md: "none", lg: "inline-flex" }}>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                color={"black"}
              >
                Sign In
              </Button>
            </Link>
            <Link
              href="sign_up"
              style={{ textDecoration: "none" }}
              display={{ md: "none", lg: "inline-flex" }}
            >
              {" "}
              <Button
                // display={{ base: "none", md: "inline-flex" }}

                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Sign Up
              </Button>
            </Link>

            {/* -------------for mobile and tablet---------------------- */}

            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              display={{ sm: "inline-block", md: "inline-block", lg: "none" }}
            />
          </HStack>
        </Flex>
        <DrawerExample isdrawerOpen={isOpen} drawerClosed={onClose} />
      </Box>
    </>
  );
}

function DrawerExample({ isdrawerOpen, drawerClosed }) {
  const btnRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={isdrawerOpen}
        placement="right"
        onClose={drawerClosed}
        finalFocusRef={btnRef}
      >
        {/* <Button onClick={onOpen}>open</Button> */}
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Visit Pages</DrawerHeader>
          <VStack gap={"20px"}>
            {links.map((el) => (
              <Link
                key={el.link}
                href={el.path}
                display={{
                  base: "inline-block",
                  md: "inline-block",
                  lg: "none",
                }}
              >
                {el.link}
              </Link>
            ))}
            <Link href={"sign_in"} display={{ md: "inline-block", lg: "none" }}>
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"#"}
                color={"black"}
              >
                Sign In
              </Button>
            </Link>
            <Link
              href={"sign_up"}
              style={{ textDecoration: "none" }}
              display={{ md: "inline-block", lg: "none" }}
            >
              {" "}
              <Button
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                href={"#"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Sign Up
              </Button>
            </Link>
          </VStack>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
