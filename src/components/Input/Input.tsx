import styles from "./Input.module.css"

type InputData = {
    type: string, 
    name: string,
    handleCandidateData?: (name : string, event : any) => void
    handleInputData?: (field: string, event: any) => void
}

const Input = ({ type, name, handleCandidateData, handleInputData } : InputData) => {
    return(
        // <input type={type} name={name} className={styles.input} onChange={handleCandidateData !== undefined ? (event) => handleCandidateData(name, event) : (event) => event.preventDefault()} />

        <input type={type} name={name} className={styles.input} onChange={handleCandidateData !== undefined ? (event) => handleCandidateData(name, event) : (handleInputData !== undefined ? (event) => handleInputData(name, event) : (event) => event.preventDefault())} />
    )
}

export default Input 