function Card(props){
    return (
      <div>
      <img src={`https://codingapple1.github.io/shop/shoes${props.value.id+1}.jpg`} 
      alt="props.value.title" width="80%"/>
      <h4>{props.value.title}</h4>
      <p>{props.value.content}</p>
      </div>
    );
  }

  export default Card;