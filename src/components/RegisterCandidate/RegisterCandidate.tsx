import { Grid, GridItem ,VStack, Box, Image, Heading, FormControl, FormLabel, Button, Alert, AlertIcon } from "@chakra-ui/react"
import Input from "../Input/Input"
import { useState, useEffect } from "react"
import api from "../../api/api"

import candidate from "../../assets/candidate.png"

const RegisterCandidate = () => {

    const [ cpf, setCPF ] = useState<string>('')
    const [ birthdate, setBirthdate ] = useState<string>('')
    const [ fullName, setFullName ] = useState<string>('')
    const [ address, setAddress ] = useState<string>('')
    const [ isCandidatePosted, setIsCandidatePosted ] = useState<boolean>(false)

    async function handleCandidateData(field : any, event : any) {
        event.preventDefault()

        if(field === "cpf") setCPF(event.target.value)
        if(field === "birthdate") setBirthdate(event.target.value)
        if(field === "fullName") setFullName(event.target.value)
        if(field === "address") setAddress(event.target.value)
         
    }

    async function handleCandidateForm() {
        await api.post("/candidates", {
            name: fullName, 
            cpf: cpf, 
            birthdate: birthdate, 
            address: address
        }).then(response => {
            if(response) {
                setIsCandidatePosted(true)
            }

            setTimeout(() => {
                setIsCandidatePosted(false)
            }, 3000)
        })
    }

    if(isCandidatePosted) {
        return(
            <VStack gap="2.5rem">
                <Alert status="success" variant="top-accent" >
                    <AlertIcon />
                    Candidato registrado!
                </Alert>

                <Box boxSize="7rem" marginTop="3rem">
                    <Image src={candidate} alt="candidate icon" />
                </Box>
    
                <Heading fontSize="30px">Sobre o Candidato:</Heading>
    
                <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr" gridGap={6}>
                    <GridItem>
                        <FormControl>
                            <FormLabel htmlFor="cpf" fontWeight="bold">CPF:</FormLabel>
                            <Input handleCandidateData={handleCandidateData} type="text" name="cpf"/>
                        </FormControl>
                    </GridItem>
    
                    <GridItem>
                        <FormControl>
                            <FormLabel htmlFor="fullName" fontWeight="bold">Nome completo:</FormLabel>
                            <Input handleCandidateData={handleCandidateData} type="text" name="fullName"/>
                        </FormControl>
                    </GridItem>
    
                    <GridItem>
                        <FormControl>
                                <FormLabel htmlFor="birthdate" fontWeight="bold">Data de nascimento:</FormLabel>
                                <Input handleCandidateData={handleCandidateData} type="text" name="birthdate"/>
                        </FormControl>
                    </GridItem>
                    
                    <GridItem>
                        <FormControl>
                            <FormLabel htmlFor="address" fontWeight="bold">Endereço:</FormLabel>
                            <Input handleCandidateData={handleCandidateData} type="text" name="address"/>
                        </FormControl>
                    </GridItem>
                </Grid>
    
                <Button onClick={handleCandidateForm} alignSelf="center" bg="green.200" color="white" _hover={{ color: "white", background: "green.400" }} padding="1rem 6rem" borderRadius="8px">Cadastrar</Button>
            </VStack>
        )
    } else {
        return(
            <VStack gap="2.5rem">
                <Box boxSize="7rem" marginTop="3rem">
                    <Image src={candidate} alt="candidate icon" />
                </Box>
    
                <Heading fontSize="30px">Sobre o Candidato:</Heading>
    
                <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr" gridGap={6}>
                    <GridItem>
                        <FormControl>
                            <FormLabel htmlFor="cpf" fontWeight="bold">CPF:</FormLabel>
                            <Input handleCandidateData={handleCandidateData} type="text" name="cpf"/>
                        </FormControl>
                    </GridItem>
    
                    <GridItem>
                        <FormControl>
                            <FormLabel htmlFor="fullName" fontWeight="bold">Nome completo:</FormLabel>
                            <Input handleCandidateData={handleCandidateData} type="text" name="fullName"/>
                        </FormControl>
                    </GridItem>
    
                    <GridItem>
                        <FormControl>
                                <FormLabel htmlFor="birthdate" fontWeight="bold">Data de nascimento:</FormLabel>
                                <Input handleCandidateData={handleCandidateData} type="text" name="birthdate"/>
                        </FormControl>
                    </GridItem>
                    
                    <GridItem>
                        <FormControl>
                            <FormLabel htmlFor="address" fontWeight="bold">Endereço:</FormLabel>
                            <Input handleCandidateData={handleCandidateData} type="text" name="address"/>
                        </FormControl>
                    </GridItem>
                </Grid>
    
                <Button onClick={handleCandidateForm} alignSelf="center" bg="green.200" color="white" _hover={{ color: "white", background: "green.400" }} padding="1rem 6rem" borderRadius="8px">Cadastrar</Button>
            </VStack>
        )
    }
}



export default RegisterCandidate