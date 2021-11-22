import React from 'react'
import {Container,Screen,Previous,Current,Button} from './Styled'
function index() {
    return (
        <Container>
            <Screen>
                <Previous>7 +</Previous>
                <Current>5</Current>
            </Screen>
            <Button control gridSpan={2}>AC</Button>
            <Button control>DEL</Button>
            <Button operation>÷</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button operation>×</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button operation>+</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button operation>-</Button>
            <Button control borderBLR >.</Button>
            <Button>0</Button>
            <Button gridSpan={2} operation borderBRR>=</Button>

        </Container>
    )
}

export default index
