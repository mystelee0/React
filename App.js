import logo from './logo.svg';
import {Navbar,Container,Nav,Row,Col} from 'react-bootstrap';
import './App.css';

function App() {
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
        <Col>
        <div>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        </Col>
        <Col>
        <div>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        </Col>
        <Col>
        <div>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
