import { Flex, Heading, Box, Image, Text, Button } from "@chakra-ui/react"

import brazil from "../../assets/brazil.png"

type ElectionCardData = {
    title: string, 
    date: string, 
}

const ElectionCard = ({ title, date } : ElectionCardData) => {
    return(
        <Flex width="14rem" height="16rem" padding="0.5rem 0.5rem 1rem 0.5rem" bg="white" margin="3rem" borderRadius="10px" direction="column" justify="space-around" align="center">
            <Heading fontSize="16px" marginTop="1rem">{title}</Heading>
            <Box boxSize="6rem">
                <Image src={brazil} alt="brazil's flag" /> 
            </Box>

            <Text fontWeight="bold">Votos <Text display="inline-block" color="green.200">até</Text> {date}</Text>

            <Button bg="green.200" color="#FFF" _hover={{ color: "white", background: "green.400" }}>Votar</Button>
        </Flex>
    )
}

export default ElectionCard