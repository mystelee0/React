import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props){

  let {id}=useParams();
  if(id==null) id=0;
  let [alert,setalert]=useState(true);
  let [input,inputvalue]=useState('');
  let [check,setcheck]=useState(false);
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

      <h4 className="pt-5">{props.shoes[id].title}</h4>
      <p>{props.shoes[id].content}</p>
      <p>{props.shoes[id].price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
    );
}

export default Detail;