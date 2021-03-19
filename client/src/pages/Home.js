import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const home = () => {


    return (
        <div>
            <h1>Shalom, Friend!</h1>
            <Container>
                <h2>Are you hungry?</h2>
            </Container>
            <Container>
                <Container>Left Box</Container>
                <Container>Right Box</Container>
            </Container>
            <Container>
                <h2>BEST pizza in FASTEST way!</h2>
            </Container>
            <Container>
                <h2>Join our rewards program!</h2>
            </Container>
            
        </div>
    )
}

export default home
