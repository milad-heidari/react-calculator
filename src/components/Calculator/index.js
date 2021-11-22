import React,{useState} from 'react'
import {Container,Screen,Previous,Current,Button} from './Styled'
function Calculator() {

    const [current, setCurrent] = useState('')
    const [previous, setPrevious] = useState('')
    const [operation, setOperation] = useState('')

    const appendValueHandler = (e)=>{
        const value = e.target.innerHTML;

        if (value === '.' && current.includes('.')) {
            return;
            // console.log(true)
            // console.log( typeof value)
        }

        return setCurrent(current + value)
    }

    const deleteHandler = (currentValue)=>{
        setCurrent(String(current).slice(0,-1))
    }

    const acHandler = ()=>{
        setCurrent('')
        setPrevious('')
        setOperation('')
    }

    const compute=()=>{

        let result
        let previousNumber= parseFloat(previous)
        let currentNumber = parseFloat(current)

        if(isNaN(previousNumber)||isNaN(currentNumber)) return;

        switch (operation) {
            case '+':
                    result = previousNumber + currentNumber;
                break;
            case '-':
                    result = previousNumber - currentNumber;
                break;
            case '×':
                    result = previousNumber * currentNumber;
                break;
            case '÷':
                    result = previousNumber / currentNumber;
                break;
        
            default:
                break;
        }

        return result

    }

    const chooseOperationHandler = (e)=>{
        if (current) {    
        }
        if (previous) {
            let value = compute();
            setPrevious(value)

        }else {setPrevious(current)}
        setCurrent('')
        setOperation(e.target.innerHTML)
    }

    const equalsHandler = ()=>{
        let value = compute()
        if(value === undefined || value === null) return

        setCurrent(value)
        setPrevious('')
        setOperation('')
    }

    return (
        <Container>
            <Screen>
                <Previous>{previous} {operation}</Previous>
                <Current>{current}</Current>
            </Screen>
            <Button onClick={acHandler} control gridSpan={2}>AC</Button>
            <Button onClick={deleteHandler} control>DEL</Button>
            <Button onClick={(e)=>{chooseOperationHandler(e)}} operation>÷</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>1</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>2</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>3</Button>
            <Button onClick={(e)=>{chooseOperationHandler(e)}} operation>×</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>4</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>5</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>6</Button>
            <Button onClick={(e)=>{chooseOperationHandler(e)}} operation>+</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>7</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>8</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>9</Button>
            <Button onClick={(e)=>{chooseOperationHandler(e)}} operation>-</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}} control borderBLR >.</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>0</Button>
            <Button onClick={equalsHandler} gridSpan={2} operation borderBRR>=</Button>

        </Container>
    )
}

export default Calculator
