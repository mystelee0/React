import logo from './logo.svg';
import {Navbar,Container,Nav,Row,Col, Button} from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { useState } from 'react';
import Card from './Card.js';
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js';
function App() {

let [shoes,setshoes]= useState(data);
let navigate=useNavigate();

  return (
    <div className="App">
      {/** 네비게이션 */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={ ()=>{ navigate('/')} }>다있다몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">의류</Nav.Link>
            <Nav.Link href="#features">먹거리</Nav.Link>
            <Nav.Link href="#pricing">전자제품</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate('/detail')} }>상세페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <>
          {/**신발 이미지 배경 */}
          <div className='main-bg'>
            <Button variant="dark" className='sortbutton'
            onClick={()=>{
              let copy=[...shoes];
              copy.sort((a,b)=>{
                if(a.title>b.title) return 1;
                else return -1;
              })
              setshoes(copy);
            }}
            >가나다순 정렬</Button>
            </div>

            {/** 상품 카드 나열 */}
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
          </>
        } />
        
        <Route path="/detail/:id" element={ <Detail shoes={data}/> } />
        
        {/*nested routes -여러 유사한 페이지 필요할 때*/}
        <Route path="/event" element={ <Event/> } >
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> }/>
          <Route path="two" element={ <div>생일기념 쿠폰받기</div> }/>
        </Route>

        <Route path="*" element={ <div>404 없는페이지</div> } />
      </Routes>
      
    </div>
  );
}
function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>

      {/* nested route안에 보여줄 자리를 지정 */}
      <Outlet></Outlet>
    </div>
  )
}
export default App;
