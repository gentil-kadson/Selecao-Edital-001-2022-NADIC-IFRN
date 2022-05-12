import { Flex, VStack, Box, Image, Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react"

import candidate from "../../assets/candidate.png"

const RegisterCandidate = () => {
    return(
        <VStack gap="0.7rem">
            <Box boxSize="7rem" marginTop="3rem">
                <Image src={candidate} alt="candidate icon" />
            </Box>

            <Heading fontSize="30px">Sobre o Candidato:</Heading>

            <Flex flexDirection="row" justifyContent="flex-start">
                <FormControl>
                    <FormLabel htmlFor="cpf">CPF:</FormLabel>
                    <input type="text" name="cpf" />
                </FormControl>

            </Flex>
        </VStack>
    )
}

export default RegisterCandidate