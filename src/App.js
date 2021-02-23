import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Alamgir', 'Salman', 'Ferdus', 'Shakib', 'Shovo']
  const products =[
    {name:'Photoshop', price:'$60'},
    {name:'CricketBat', price:'$50'},
    {name:'Football', price:'$40'},
    {name:'CricketBall', price:'$40'},
    {name:'Ball', price:'$40'},
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li> )
          }
          {
            products.map(product =><li>{product.name,product.price}</li> )
          }
        </ul>
        {
          products.map(pd =><Product product={pd}></Product> )
        }
       
       <Person name='Perves' play='Badminton'></Person>
       <Person name='Arif' play='Cricket'></Person>
       <Person name='Mahabub' play='Football'></Person>
       <Person name='Harun' play='Cricket'></Person>
      
      </header>
    </div>
  );
}
function Counter() {
  const [count , setCount] = useState(0)
  const handleIncrease =()=> setCount(count + 1);
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=> setCount(count + 1)} >Increase</button>
      <button onClick={()=> setCount(count - 1)} >Decrease</button>
    </div>
  )
 }
 function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  }, [])
   return(
     <div>
       <h2>Dynamic Users:{users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )
        }
      </ul>
    </div>
   )
 }

function Product(props) {
  const ProductStyle={
    border: 'solid 2px gray',
    borderRadius : '5px',
    backgroundColor: 'lightblue',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name , price} = props.product;
  return(
    <div style={ProductStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const friendStyle={
    border:'solid 2px green',
    width:'400px',
    margin:'10px'
   
  }
  return(
    <div style={friendStyle}>
      <h2>My friend name: {props.name}</h2>
      <p>Favorite sport : {props.play}</p>
    </div>
  )
}

export default App;
