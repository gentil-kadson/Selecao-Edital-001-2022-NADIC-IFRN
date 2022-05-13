import { VStack, Button, Heading, Box, Image, FormControl, FormLabel, Text, Checkbox, HStack, Alert, AlertIcon } from "@chakra-ui/react"
import Input from "../Input/Input"
import { useEffect, useState } from "react"
import api from "../../api/api"

import laptop from "../../assets/laptop.png"
import { stringify } from "querystring"


 

const RegisterElection = () => {
    const [ availableCandidates, setAvailableCandidates ] = useState<any>([])
    const [ electionsCandidates, setElectionsCandidates ] = useState<any>([])
    const [ showAlert, setShowAlert ] = useState<boolean>(false)
    const [ date, setDate ] = useState<string>("")
    const [ electionTitle, setElectionTitle ] = useState<string>("")

    useEffect(() => {
        async function getCandidates() {
            await api.get("/candidates").then(response => {
                setAvailableCandidates(response.data)
            })
        }

        getCandidates()
    }, [])

    function handleInputData(field : string, event : any, ) {
        event.preventDefault() 

        if(field === "electionTitle") setElectionTitle(event.target.value)
        if(field === "date") setDate(event.target.value)
    }

    function getCheckboxValue(event : any) {  
        event.preventDefault()

        
        let candidateJSON = {
            "name": event.target.value,
            "id": event.target.id
        }

        if(event.target.checked) {
            event.target.isChecked = true 
            setElectionsCandidates([...electionsCandidates, candidateJSON])
        } else {
            const candidateToBeRemoved = electionsCandidates.filter((candidate : any) => {
                if(candidate.id === event.target.id) {
                   return electionsCandidates.indexOf(candidate)  
                }
            })

            electionsCandidates.splice(candidateToBeRemoved, 1)
        }
    }

    async function handleElectionRegistrationForm(event : any) {
        event.preventDefault()

        await api.post("/elections", {
            title: electionTitle,
            date: date,
            amountOfCandidates: electionsCandidates.length,
            candidates: electionsCandidates
        }).then(response => {
            if(response) {
                setShowAlert(true)

                setTimeout(() => {
                    setShowAlert(false)
                }, 3000)
            }
        })
    }

    if(showAlert) {
        return(
            <VStack align="center" direction="column" gap="0.7rem">
                <Alert status="success" variant="top-accent" >
                    <AlertIcon />
                    Eleição registrada!
                </Alert>

                <Box boxSize="7rem" marginTop="4rem">
                    <Image src={laptop} alt="silver laptop" />
                </Box>
    
                <Heading>Coletando dados...</Heading>
    
                <FormControl width="fit-content">
                    <FormLabel fontWeight="bold" htmlFor="electionTitle">Qual o nome do pleito?</FormLabel>
                    <Input handleInputData={handleInputData} type="text" name="electionTitle" />
                </FormControl>
    
                <FormControl width="fit-content">
                    <FormLabel fontWeight="bold" htmlFor="date">Data inicial e final:</FormLabel>
                    <Input handleInputData={handleInputData} type="text" name="date" />
                </FormControl>
    
                <Text fontWeight="bold">Quais são os candidatos?</Text>
                <HStack>
                    { availableCandidates !== [] ? availableCandidates.map((candidate : any) => {
                        return <Checkbox name="candidate" size="md" key={candidate.id} value={candidate.name} onChange={event => getCheckboxValue(event)} id={candidate.id}>{candidate.name}</Checkbox>
                    }) : null }
                </HStack>
    
                <Button bg="green.200" color="#FFF" _hover={{ color: "white", background: "green.400" }} onClick={event => handleElectionRegistrationForm(event)}>Cadastrar</Button>
            </VStack>
        )

    } else {
        return(
            <VStack align="center" direction="column" gap="0.7rem">
                <Box boxSize="7rem" marginTop="4rem">
                    <Image src={laptop} alt="silver laptop" />
                </Box>
    
                <Heading>Coletando dados...</Heading>
    
                <FormControl width="fit-content">
                    <FormLabel fontWeight="bold" htmlFor="electionTitle">Qual o nome do pleito?</FormLabel>
                    <Input handleInputData={handleInputData} type="text" name="electionTitle" />
                </FormControl>
    
                <FormControl width="fit-content">
                    <FormLabel fontWeight="bold" htmlFor="date">Data inicial e final:</FormLabel>
                    <Input handleInputData={handleInputData} type="text" name="date" />
                </FormControl>
    
                <Text fontWeight="bold">Quais são os candidatos?</Text>
                <HStack>
                    { availableCandidates !== [] ? availableCandidates.map((candidate : any) => {
                        return <Checkbox name="candidate" size="md" key={candidate.id} value={candidate.name} onChange={event => getCheckboxValue(event)} id={candidate.id}>{candidate.name}</Checkbox>
                    }) : null }
                </HStack>
    
                <Button bg="green.200" color="#FFF" _hover={{ color: "white", background: "green.400" }} onClick={event => handleElectionRegistrationForm(event)}>Cadastrar</Button>
            </VStack>
        )
    }
}

export default RegisterElection 