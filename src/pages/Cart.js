import {Table} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { changeName, stockCount } from "../store";
function Cart(){

    let state=useSelector((state)=>{ return state })
    let dispatch=useDispatch()
    return (
        <div>
            {state.user.name}의 장바구니
            {state.user.age}
            <button onClick={()=>{
                dispatch(changeName())
            }}>나이+</button>
            <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
    {
        state.data.map((v,i)=>{
            return(
            <tr key={i}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.count}</td>
                <td>
                    <button onClick={()=>{
                        dispatch(stockCount(v.id))
                    }}>+</button>
                </td>
            </tr>
            )
        })
    }
  </tbody>
</Table> 
        </div>
    )
}

export default Cart;