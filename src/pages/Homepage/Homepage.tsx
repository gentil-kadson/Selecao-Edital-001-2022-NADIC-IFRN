import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import api from "../../api/api"

import RegisterCandidate from "../../components/RegisterCandidate/RegisterCandidate";
import RegisterElection from "../../components/RegisterElection/RegisterElection";
import CurrentElections from "../../components/CurrentElections/CurrentElections";

const Homepage = () => {
    // const [ allData, setAllData ] = useState<any[]>([])
    
    // useEffect(() => {
    //     async function getAllData() {
    //         await api.get("/elections").then(response => {
    //             setAllData(response.data)
    //         })
    //     }

    //     getAllData()
        
    // }, [])


    return(
        <>
            <Tabs variant="soft-rounded" colorScheme="green" marginTop="2rem" marginLeft="3rem">
                <TabList>
                    <Tab>Eleições do Momento</Tab>
                    <Tab>Cadastrar Eleição</Tab>
                    <Tab>Cadastrar Candidato</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Box width="95%" height={600} bg="#EDF2F7" borderRadius="20px">
                            <CurrentElections />
                        </Box>
                    </TabPanel>
                        
                    <TabPanel>
                        <Box width="95%" height={600} bg="#EDF2F7" borderRadius="20px">
                            <RegisterElection /> 
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box width="95%" height={600} bg="#EDF2F7" borderRadius="20px">
                            <RegisterCandidate />
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}

export default Homepage 