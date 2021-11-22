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
        setCurrent(String(currentValue).slice(0,-1))
    }

    const acHandler = ()=>{
        setCurrent('')
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
            <Button onClick={()=>{deleteHandler(current)}} control>DEL</Button>
            <Button operation>÷</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>1</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>2</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>3</Button>
            <Button operation>×</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>4</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>5</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>6</Button>
            <Button operation>+</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>7</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>8</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>9</Button>
            <Button operation>-</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}} control borderBLR >.</Button>
            <Button onClick={(e)=>{appendValueHandler(e)}}>0</Button>
            <Button gridSpan={2} operation borderBRR>=</Button>

        </Container>
    )
}

export default Calculator
