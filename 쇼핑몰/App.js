import logo from './logo.svg';
import {Navbar,Container,Nav,Row,Col} from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { useState } from 'react';
import Card from './Card.js';

function App() {

let [shoes]= useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">다있다몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">의류</Nav.Link>
            <Nav.Link href="#features">먹거리</Nav.Link>
            <Nav.Link href="#pricing">전자제품</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <Container>
      <Row>
        {
          shoes.map((v,i)=>{
            return (
            <Col key={i}>
            <Card value={v} key={i}/>
            </Col>
            );
          })
        }
      </Row>
    </Container>
    </div>
  );
}
export default App;
