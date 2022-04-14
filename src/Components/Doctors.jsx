import React, { useState } from "react"
import "./doctor.scss"
import data from "../db.js"
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import  Navbars  from '../Components/Navbar/Navbar';

const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [name,setName]=useState("")
    const [Number,setNumber]=useState("")
    const [Specialist,setspecialist]=useState("")
    const [Address,setaddress]=useState("")
    return (
      <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="Number"
            placeholder="Number"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicSpecialist">
          <Form.Label>Specialist</Form.Label>
          <Form.Control
            type="text"
            placeholder="Specialist"
            value={Specialist}
            onChange={(e) => setspecialist(e.target.value)}
            required
           
          />
        </Form.Group>
  
        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group> */}


        <Form.Group controlId="formBasicAddress">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            value={Address}
            onChange={(e) => setaddress(e.target.value)}
            required
          />
        </Form.Group>


        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me!" />
        </Form.Group> */}
        <Button variant="primary" type="submit" block>
          Book
        </Button>
      </Form>
    );
  };
  





export const Doctor=()=>{
    const [count,setcount]=useState(1)
    const [show, setShow] = useState(false);
    const length=data.length
    var bool=true
    // console.log(length)

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };
  
    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        alert("you have successfully appointed")
        handleClose();
      };



 
    const handleclick=()=>{
        
       if(count<=length){
           setcount(count+1)
           
           
       }else{
        //    alert('No More appointments can be done')
           bool=false
       }
    }
 
   
    return(
     
      
       <div>
          
          <div>
       <div className='navset'>
           <nav className='navbar'>
               <ul>
                  
                   <li> <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwouBlJIBejXAn5xMw3WxPnBJYtbAlPyTx7A9SQJIBU0VUA7Nu" alt="" height={"50px"} width={"60px"} /></li>
                  
                  
                
                  <li> <a href="">CONSULT</a></li>
                   <li> <a href="#">MONITOR</a></li>
                   <li> <a href="#">ORDER</a></li>
                   
                   <li> <a href="#">SHOP</a></li>
                   <li> <a href="#">SUBSCRIBE</a></li>
                   <li> <a href="#">DOCTOR</a></li>
               
                
               </ul>
           </nav>
      
       </div>
    </div>



          {/* data */}
           {data.map(e=>{
               return(

                   <div className="name">
                        <div className="img">
                            <img src={e.img}></img>
                            </div>
                        <div className="datamain">
                            <div className="data">
                              <div>
                              {`Name : ${ e.name}`}
                              </div>
                            <div>
                            {`Speciality : ${e.Speciality}`}
                            </div>
                            <div>
                                <span>Slots Available : </span><button>{` ${e.Slot}`}</button>
                            </div>
                        
                            <div>
                                {`Cost : र${e.Cost}`}
                            </div>
                            <button onClick={handleShow } style={{color:bool?"blue":"red"}}  >Book appointment</button>
                            </div>
                        </div>
                   </div>

               )
           })}


           <div className="footer">
      <div>Appolo Hospital Assignment</div>
      <div>©2022, hospital, Inc. or its affiliates. Created by Aakash Upadhyay</div>
    </div>

    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Booking Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <LoginForm onSubmit={onLoginFormSubmit} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close 
            </Button>
            </Modal.Footer>
        </Modal>

           {/*  */}


      

       </div>


           



    )
}