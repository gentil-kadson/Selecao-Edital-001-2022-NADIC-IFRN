import { VStack, Button, Heading, Box, Image, FormControl, FormLabel, Text, Checkbox, HStack } from "@chakra-ui/react"
import Input from "../Input/Input"
import { useEffect, useState, useRef } from "react"
import api from "../../api/api"

import laptop from "../../assets/laptop.png"


 

const RegisterElection = () => {
    const [ availableCandidates, setAvailableCandidates ] = useState<any>([])
    const [ electionsCandidates, setElectionsCandidates ] = useState<any>([])

    useEffect(() => {
        async function getCandidates() {
            await api.get("/candidates").then(response => {
                setAvailableCandidates(response.data)
            })
        }

        getCandidates()
    }, [])

    async function handleElectionRegistration() {
        
        const electionTitleRef = useRef()
        const durationDate = useRef()
        
    }

    return(
        <VStack align="center" direction="column" gap="0.7rem">
            <Box boxSize="7rem" marginTop="4rem">
                <Image src={laptop} alt="silver laptop" />
            </Box>

            <Heading>Coletando dados...</Heading>

            <FormControl width="fit-content">
                <FormLabel fontWeight="bold" htmlFor="electionTitle">Qual o nome do pleito?</FormLabel>
                <Input type="text" name="electionTitle"></Input>
            </FormControl>

            <FormControl width="fit-content">
                <FormLabel fontWeight="bold" htmlFor="date">Data inicial e final:</FormLabel>
                <Input type="text" name="date"></Input>
            </FormControl>

            <Text fontWeight="bold">Quais são os candidatos?</Text>
            <HStack>
                { availableCandidates !== [] ? availableCandidates.map((candidate : any) => {
                    return <Checkbox name="candidates" size="md" key={candidate.id} >{candidate.name}</Checkbox>
                }) : null }
            </HStack>

            <Button bg="green.200" color="#FFF" _hover={{ color: "white", background: "green.400" }}>Cadastrar</Button>
        </VStack>
    )
}

export default RegisterElection 