import * as React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"
import Homepage from "./pages/Homepage/Homepage"


ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
