import { useEffect, useState } from "react";
import { Nav} from "react-bootstrap";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import {addStock} from "../store.js";


function Detail(props){
  let dispatch=useDispatch();
  let {id}=useParams();
  if(id==null) id=0;
  let product=props.shoes.find((x)=>{return x.id==id});
  let [alert,setalert]=useState(true);
  let [input,inputvalue]=useState('');
  let [check,setcheck]=useState(false);
  let [tab,settab]=useState(0);

  let [fade,setFade]=useState('');
  useEffect(()=>{
    setTimeout(() => {
      setFade('end');
    }, 100);
    return ()=>{
      setFade('');
    }
  },[])

  useEffect(()=>{
    setTimeout(() => {
      setalert(false);
    }, 2000);
  });

  {/**숫자만 입력하는지 체크 */}
  useEffect(()=>{
    if(isNaN(input))
      setcheck(true);
    else setcheck(false);
  },[input]);
  
  return (
    <div className={'start '+fade}>
        <div className="container">
          {alert==true?<div className="alert"> 2초 후 사라짐</div>:null}
  <div className="row">
    <div className="col-md-6">
      <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`} alt="" width="100%" />
    </div>
    <div className="col-md-6">

      {check==true?<div>숫자만 입력해주세요</div>:null}
      <input onChange={(e)=>{
        inputvalue(e.target.value);
      }}/>

      <h4 className="pt-5">{product.title}</h4>
      <p>{product.content}</p>
      <p>{product.price}</p>
      <button className="btn btn-danger" onClick={()=>{
        dispatch(addStock({id : product.id, name : product.title, count : 1}))
        }}>주문하기</button> 
    </div>
  </div>

  <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={ ()=>{settab(0)} } eventKey="link-0">Option 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={ ()=>{settab(1)} } eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={ ()=>{settab(2)} }  eventKey="link-2" >Option 3</Nav.Link>
      </Nav.Item>
    </Nav>
    
    <TabContent tab={tab}/>
    </div>
</div> 
    );
}

function TabContent( {tab} ){
  let [fade,setFade]=useState('');

  useEffect(()=>{
    setTimeout(() => {
      setFade('end');
    }, 100);
    return ()=>{
      setFade('');
    }
  },[tab])

  return <div className={"start "+fade}>
   { [<div>내용 1</div>,<div>내용 2</div>,<div>내용 3</div>][tab] }
  </div>
}
export default Detail;