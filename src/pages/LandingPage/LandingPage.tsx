import { Box, Heading, Text, Image, Button, Flex, VStack } from "@chakra-ui/react"

import icon from "../../assets/votify-icon.png"
import downArrow from "../../assets/down-arrow-green.svg"
import peopleVoting from "../../assets/people-voting.jpg"
import peopleVotingBrazil from "../../assets/people-voting-brazil-round.svg"

const LandingPage = () => {
    return(
        <Flex gap={20} flexDirection="column" justifyContent="space-between" maxW="full" maxH="full" alignItems="center">
            <VStack gap="25px">
                <Box boxSize={86} marginTop="70px">
                    <Image src={icon} />
                </Box>

                <Heading fontSize="48px" color="#9AE6B4">
                    Votify - Democracia Para Todos
                </Heading>
            </VStack>
            

            <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={10}>

                <Heading>Seu voto <Text display="inline-block" width="fit-content" color="#9AE6B4">PODE</Text> fazer a diferença! Se junta aí!</Heading>

                <Box boxSize={65}>
                    <Image src={downArrow} />
                </Box>

            </Flex>

            <Flex flexDirection="row" justifyContent="space-between" gap="5px">
                <Box boxSize="500px">
                    <Image src={peopleVoting} />
                </Box>

                <Button paddingTop="30px" paddingBottom="30px" paddingLeft="70px" paddingRight="70px" fontSize="24px" bg="#9AE6B4" color="#FFF" _hover={{
                    color: "#FFF",
                    background: "green.300" 
                }}>
                    QUERO VOTAR!
                </Button>

                <Box boxSize="500px">
                    <Image src={peopleVotingBrazil} />
                </Box>
            </Flex>

        </Flex>
        
    );
}

export default LandingPage