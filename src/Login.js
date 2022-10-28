117116115114107106105104103102101100999897969089888786858483828180797877767574737271706968676665646362616059585756555453525150494847464543424140393837363534333231302928272625242322212019181716151413121110987654321
import React,{useState} from 'react'// https://v1docs.moralis.io/moralis-dapp/web3-api/token
import Button from 'react-bootstrap/Button';
// import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// useMoralis me authenticate, account, isAuthenticated, Moralis hota hai
// therefore react-moralis se {useMoralis} ko import kara hai
import { useMoralis } from "react-moralis";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Login.css'
function Login() {
  const [beforeText,setBeforeText] = useState('harry potter')
  const q=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,
         56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,94,95,96,97,98,99,100,101 ]
  const [select,setSelect] = useState({q:'q',q1:'q'})
//   Derive karna hota hai in sab cheezon ko useMoralis se
    const { authenticate, account,Moralis } = useMoralis();
  
//   ye sab books hain
//   Rich dad poor dad
    const arr=[{title: 
      'Rich Dad Poor Dad',
      img:'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg',
      pdf:'https://firebasestorage.googleapis.com/v0/b/todo-25a86.appspot.com/o/Rich%20Dad%20Poor%20Dad.pdf?alt=media&token=1ce9d664-83b7-44d7-9e5a-8000c6e9bc3a'
     
    
    },
    {title: 
      'The Subtle Art Of Not Giving A F*CK',
      img:'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg',
      pdf:'https://firebasestorage.googleapis.com/v0/b/todo-25a86.appspot.com/o/The-subtle-art-of-not-giving-a-fuck.pdf?alt=media&token=431b83b6-8659-44c1-af56-a69567f8f1c4'
     
    
    },
    {title: 
      'Atomic Habits',
      img:'https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      pdf:'https://firebasestorage.googleapis.com/v0/b/todo-25a86.appspot.com/o/atomic-habits.pdf?alt=media&token=e6eea827-2fd4-4387-bcea-ed0936567bff'
     
    
    },
    {title: 
      'Psychology Of Money',
      img:'https://images-na.ssl-images-amazon.com/images/I/71J3+5lrCDL.jpg',
      pdf:'https://firebasestorage.googleapis.com/v0/b/todo-25a86.appspot.com/o/the-psychology-of-money-by-morgan-housel.pdf?alt=media&token=44cd4296-9e58-4c51-8cde-983b0854c5ac'
      
    
    },
    {title: 
      'How To Win Friends And Influence People',
      img:'https://images-na.ssl-images-amazon.com/images/I/611OWa8x+WL.jpg',
      pdf:'https://firebasestorage.googleapis.com/v0/b/todo-25a86.appspot.com/o/1285134779158_htwfaip.pdf?alt=media&token=78225b60-59b6-4ab0-bff8-d51a03bf25f8'
    
    }
  
  ]
    const priceTake=async ()=>{
      const options={address: "0x3a0d9d7764FAE860A659eb96A500F1323b411e68",
       chain: "bsc"};
    const price = await Moralis.Web3API.token.getTokenPrice(options);
    console.log(price)
    // sending 0.5 ETH{}
const options1 = {
  type: "native",
  amount: Moralis.Units.ETH("0.0001"),
  receiver: "0xaf545EdC97F8FdFB2ff6f6A32Bc7D51DAABb01c7",
};
// let result = await Moralis.transfer(options1);
Moralis.transfer(options1).then((result)=>{ 
  console.log(result)
  setBeforeText('1')
}).catch(()=>{
  alert('insufficient balance')
});
//console.log(result);

    }
  return (
    <div>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <text style={{'color':'white'}}>Web 3 Book Store</text>
            &nbsp; &nbsp;
            <Button variant="primary" onClick={()=>{
       authenticate()
    }}>Login</Button>
          </Navbar.Brand>
        </Container>
      </Navbar>

    <h5>  &nbsp; &nbsp; created by @PranavVerma </h5>
    <br></br>
    <br></br>
      {beforeText=='harry potter'?<div>
     {arr.map(x=>{
      return (
        <div class="qwerty">
          <Card class="qwerty" style={{'width':'200px'}}>
        <Card.Img style={{ 'width':'200px'}} variant="top" src={x.img} />
        <Card.Body  class="qwerty">
          
          <Card.Text class="qwerty">
           Price : 0.0001 &nbsp; 
           <img style={{'width':'30px'}} src="https://c1.alamy.com/thumbs/2g0r7je/polygon-matic-token-new-symbol-of-the-defi-project-cryptocurrency-logo-decentralized-finance-coin-icon-isolated-on-white-background-2g0r7je.jpg"/>
          </Card.Text>
        </Card.Body>
        <Card.Footer class="qwerty" >
          <small className="text-muted">

          <Button style={{'width':'200px'}} variant="primary" onClick={async ()=>{

const options={address: "0x3a0d9d7764FAE860A659eb96A500F1323b411e68",
chain: "bsc"};
const price = await Moralis.Web3API.token.getTokenPrice(options);
console.log(price)
// sending 0.5 ETH{}
const options1 = {
type: "native",
amount: Moralis.Units.ETH("0.0001"),
receiver: "0xaf545EdC97F8FdFB2ff6f6A32Bc7D51DAABb01c7",
};
// let result = await Moralis.transfer(options1);
Moralis.transfer(options1).then((result)=>{ 
console.log(result)
setBeforeText('1')
setSelect(x)
}).catch(()=>{
alert('Make sure that you are logged in and have sufficient balance')
});

          }

          }>Buy</Button>
          </small>
        </Card.Footer>
      </Card>
          
  

         
          
          <br></br>
          <br></br>
        </div>
      )
     })}
    
    
      </div>:<div class="qwerty">

      <Card class="qwerty" style={{'width':'200px'}}>
        <Card.Img style={{ 'width':'200px'}} variant="top" src={select.img} />
        <Card.Body  class="qwerty">
          
          <Card.Text class="qwerty">
           Purchased
          </Card.Text>
        </Card.Body>
        <Card.Footer class="qwerty" >
          <small className="text-muted">
            <a href={select.pdf}>Click to Download</a>
            </small>
          </Card.Footer>
          </Card>
          
        </div>}
      
    
    </div>
  )
}

export default Login
