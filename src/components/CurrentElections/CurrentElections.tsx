import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"

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
            <Flex width="14rem" height="16rem" bg="white" margin="3rem" borderRadius="10px" direction="column" justify="flex-start" align="center" >
                <Heading fontSize="16px">Presidência do Brasil</Heading>
            </Flex>
        </Flex>
    )   
}

export default CurrentElections
