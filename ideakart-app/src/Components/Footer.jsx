import { Box, Button, Container, Heading, HStack, Image, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};



export function Footer(){
  return (
    <>
    <Box bg="gray.50" color="gray.700">
    <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'https://ideakart.com/about'}>About Us</Link>
            <Link href={'https://www.quickbuyer.in/'}>Quick Buyer</Link>
            <Link href={'https://ideakart.com/make-money'}>Earn Money Online</Link>
            <Link href={'https://ideakart.com/contact'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'https://ideakart.com/search'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'https://ideakart.com/refund-policy'}>Refund Policy</Link>
            <Link href={'https://ideakart.com/privacy'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>


      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor="gray.200">
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© https://ideakart.com/. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
           <Button p="0px" w={"5px"} h={"5px"}><Image src="https://img.icons8.com/windows/32/000000/instagram-new.png"  /></Button>
           <Button p="0px" w={"10px"} h={"10px"}><Image src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/></Button>
           <Button p="0px" w={"10px"} h={"10px"}><Image src="https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png"/></Button>
          </Stack>
        </Container>
      </Box>
    </Box>




    </>
  )
}