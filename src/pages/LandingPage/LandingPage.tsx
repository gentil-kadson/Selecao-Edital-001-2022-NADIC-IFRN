import { Box, Heading, Text, Image, Button, Flex, VStack, Grid, GridItem } from "@chakra-ui/react"

import { Link } from "react-router-dom"

//Images import 
import icon from "../../assets/votify-icon.png"
import downArrow from "../../assets/down-arrow-green.svg"
import peopleVoting from "../../assets/people-voting.jpg"
import peopleVotingBrazil from "../../assets/people-voting-brazil-round.svg"

const LandingPage = () => {
    return(
        <>
            <VStack gap="1.5rem">
                <Box boxSize="6rem" marginTop="7rem">
                    <Image src={icon} />
                </Box>

                <Heading color="green.200">
                    Votify - Democracia Para Todos
                </Heading>

                <Text fontWeight="bold" fontSize="20px" >Seu voto <Text fontWeight="bold" fontSize="20px"  display="inline-block" color="green.200">PODE</Text> fazer a diferença! Se junta aí!</Text>

                <Box boxSize="3rem">
                    <Image src={downArrow} />
                </Box>
            </VStack>  

            <Grid templateColumns="3fr 1fr 3fr">
                <GridItem w="fit-content" h="fit-content">
                    <Box boxSize="40rem">
                        <Image src={peopleVoting} />
                    </Box>
                </GridItem>

                <GridItem w="fit-content" h="fit-content" marginTop="6rem">
                    <Link to="/homepage"><Button alignSelf="center" bg="green.200" color="white" _hover={{ color: "white", background: "green.400" }} padding="1.5rem 3rem" borderRadius="8px">
                        QUERO VOTAR!
                    </Button></Link>
                </GridItem>

                <GridItem w="fit-content" h="fit-content" marginLeft="11rem">
                    <Box height="35rem" width="30rem">
                        <Image src={peopleVotingBrazil} />
                    </Box>
                </GridItem>
            </Grid>
        </>
              
    
    );
}

export default LandingPage