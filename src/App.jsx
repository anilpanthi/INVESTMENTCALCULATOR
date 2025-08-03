
import { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prev => {
            return {
                ...prev,
                [inputIdentifier]: +newValue
            }
        });
    }
    
    const inputsValid = 
        userInput.initialInvestment > 0 &&
        userInput.annualInvestment >= 0 &&
        userInput.expectedReturn > 0 &&
        userInput.duration >= 1;

    return (
        <>
            <Header />
            <UserInput onChange= {handleChange} userInput={userInput}/>
            {!inputsValid && <p className="center">Please Enter Valid Data</p>}
            {inputsValid && <Results results={userInput} />}
        </>

    )
}

export default App
