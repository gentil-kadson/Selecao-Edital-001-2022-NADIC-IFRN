import { Box, Heading, Text, Image, Button, Flex } from "@chakra-ui/react"

import icon from "../../assets/votify-icon.png"
import downArrow from "../../assets/down-arrow-green.svg"
import peopleVoting from "../../assets/people-voting.jpg"
import peopleVotingBrazil from "../../assets/people-voting-brazil-round.svg"

const LandingPage = () => {
    return(
        <Flex bg="gray.300" flexDirection="column" justifyContent="space-between" maxW="full" maxH="full" alignItems="center">
            <Box boxSize={86}>
                <Image src={icon} />
            </Box>

            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Heading>Seu voto <Text color="#9AE6B4">PODE</Text> fazer a diferença! Se junta aí!</Heading>
                <Box boxSize={86}>
                    <Image src={downArrow} />
                </Box>
            </Flex>

            <Flex flexDirection="row" justifyContent="space-between" gap="5px">
                <Box boxSize="500px">
                    <Image src={peopleVoting} />
                </Box>

                <Button>
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