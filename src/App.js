import {useRef, useState} from "react";
import * as math from "mathjs";
import "./App.css"

function App() {
    const [result, setResult] = useState(0);
    const [expression, setExpression] = useState("");
    const inputRef = useRef(0);

    function userInput(e) {
        setExpression((prevExpression) => prevExpression + e.target.value);
    }

    function handleEquals() {
        try {
            const evaluatedExpression = math.evaluate(expression);
            setResult(evaluatedExpression);
            setExpression("");
        } catch (error) {
            setResult("Error");
            setExpression("");
        }
    }

    function handleClear() {
        setExpression(expression.slice(0, -1));
    }

    function handleReset() {
        setExpression("");
        setResult("");
    }

    return (
        <div className="Calculator">
            <input className="screen" value={result} disabled></input>
            <input className="screen" ref={inputRef} placeholder="0" value={expression}></input>


            <div className="keypads">

                <button className="operator btn" onClick={userInput} value={'+'}>+</button>
                <button className="operator btn" onClick={userInput} value={'-'}>-</button>
                <button className="operator btn" onClick={userInput} value={'*'}>&times;</button>
                <button className="operator btn" onClick={userInput} value={'/'}>&divide;</button>


                <button className="digit btn" onClick={userInput} value={7}>7</button>
                <button className="digit btn" onClick={userInput} value={8}>8</button>
                <button className="digit btn" onClick={userInput} value={9}>9</button>


                <button className="digit btn" onClick={userInput} value={4}>4</button>
                <button className="digit btn" onClick={userInput} value={5}>5</button>
                <button className="digit btn" onClick={userInput} value={6}>6</button>


                <button className="digit btn" onClick={userInput} value={1}>1</button>
                <button className="digit btn" onClick={userInput} value={2}>2</button>
                <button className="digit btn" onClick={userInput} value={3}>3</button>



                <button className="digit btn" onClick={userInput} value={0}>0</button>
                <button className="decimal btn" onClick={userInput} value={"."}>.</button>
                <button className="all-clear btn" onClick={handleReset}>AC</button>
                <button className="clear btn" onClick={handleClear}>CLEAR</button>

                <button className="equal-sign btn" onClick={handleEquals} value={'='}>=</button>

            </div>
        </div>
    )
}

export default App;
