import styles from "./Input.module.css"

type InputData = {
    type: string, 
    name: string,
    handleCandidateData: (name : string, event : any) => void
}

const Input = ({ type, name, handleCandidateData } : InputData) => {
    return(
        <input type={type} name={name} className={styles.input} onChange={(event) => handleCandidateData(name, event)} />
    )
}

export default Input 