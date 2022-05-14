import { Flex, Box, Image, Heading, Text, Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import ElectionCard from "../ElectionCard/ElectionCard"

import api from "../../api/api"

const CurrentElections = () => {
    const [ currentElections, setCurrentElections ] = useState<any>([])

    useEffect(() => {
        async function getElectionsData() {
            await api.get("/elections").then(response => {
                setCurrentElections(response.data)
            }) 
        }

        getElectionsData()
    }, [])

    return(
        <Flex direction="row" justify="flex-start" align="flex-start">
            { currentElections.map((currentElection : any) => {
                return <ElectionCard key={currentElection.id} title={currentElection.title} date={currentElection.date} />
            }) }
        </Flex>
    )   
}

export default CurrentElections
