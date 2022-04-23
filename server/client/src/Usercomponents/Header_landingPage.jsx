import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo_smm1.png'
// import logo from '../images/chirtmas_logo.png'
import '../header_landingpage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TextField,Button,Tooltip,IconButton, Badge} from '@mui/material'
import Notifications from './Notifications';
import { Dropdown, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

import dash from '../images/dashboard.png'
import neworer from '../images/checkout.png'
import serv from '../images/services.png'
import myord from '../images/order.png'
import supprt from '../images/support.png'
import user from '../images/user.png'
import whatsappLogo from '../../src/images/whatsappBtn.png'
function Header_landingPage(props) {
    const[show,setShow]=useState(false)
    const[balance,setBalance]=useState(0)  
    const[username,setname]=useState("Hii, user") 

    const [Canshow, CansetShow] = useState(false);

    const handleCanClose = () => CansetShow(false);
    const handleCanShow = () => CansetShow(true);

let log_status
useEffect(() => {
    
    authState();
}, [balance])
  
const authState=async()=>{
    let resp=await fetch('/authUser',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:'include'
    })
    let data=await resp.json()
    setBalance(data[0].balance)
    setname(data[0].name)
     
    
}
   
    const ToggleMenu = () =>{
        document.getElementById('dropMenu').classList.toggle('toggleclass')
    }
    const logout =async ()=>{
        localStorage.setItem('login_status',false);
        let resp= await fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:'include'
        })
      
    }
    function refresh()
    {
        authState()
    }
    function handleClose()
    {
        setShow(false);
        
    }
    function display()
    {
        setShow(true)
    }
   
    return (
        <div className={`position-${props.position} w-100`}>
            
        <div className="header ">
            <ToastContainer/>
            <ul className="d-flex justify-content-between container">
                <div>
                    <li className=''><Link to="/v1.1/dashboard"><img className="logo" src={logo} alt="logo" height="60px" width="60px" className="bg-"/></Link></li>
                </div>
                <div className="d-flex links my-auto">
                   {/* <div>
                   {localStorage.getItem('login_status')=="true" ? <h2>loged in</h2> :<p>some</p>}
                   </div> */}
                   
                <li className="d-flex m-auto">
                    {/* <div>
                        <p className="p-0 m-0 balance">Available Funds:</p>
                        <p className="p-0  balanceNo d-flex mx-auto m-0 pl-1">{(balance.toFixed(2))}</p>
                    </div> */}
                    {/* <p className="p-0 m-0"><Tooltip title="Refresh" placement="top"><IconButton size="small"><i class="fas  fa-sync text-white ml-2 mt-2" onClick={refresh}></i></IconButton></Tooltip></p> */}
                    {/* <li className='mt-auto mb-auto'><i class="fas  fa-sync text-white ml-2 mt-2 fa-2x" onClick={refresh}></i></li> */}
                </li>
                {/* <Tooltip title="Refresh" placement="top"><IconButton size="small"></IconButton></IconButton></Tooltip> */}
                    <li><i class="fas fa-bell" onClick={display}></i></li>
                    {/* <li><i class="fas fa-user" id="user" onClick={ToggleMenu}></i></li> */}
                    <div className="dropMenu " id="dropMenu">
                        <p ><i class="fas text-white fa-address-card mr-2"></i><Link className="drpLink" to="/view-profile">View Profile</Link></p>
                        <p ><i class="far text-white fa-edit mr-2"></i><Link to="/edit-profile" className="drpLink">Edit Profile</Link></p>
                        <p ><i class="fas fa-history text-white mr-2"></i><Link to="/transaction-logs" className="drpLink">Transaction log <span className='badge text-white bg-success'>New</span> </Link></p>
                        <p ><i class="fas text-white fa-wallet mr-2"></i><Link className="drpLink" to="/v1.1/addfund">Add fund</Link></p>
                        <hr className="text-white"/>
                        <p ><Link to="#" onClick={logout} className="drpLink" to="/">Logout<i class="fas text-white fa-sign-out-alt ml-2"></i></Link></p>
                    </div>
                    
                    <li className='mt-auto mb-auto'><i class="fas text-dark hamburgerMwnu fa-bars fa-2x" onClick={handleCanShow}></i></li>
                </div>
            </ul>
        </div>
        <Notifications show={show} handleClose={handleClose}/>
        <Offcanvas show={Canshow} onHide={handleCanClose} className="canvasmy text-white">
            <Offcanvas.Header closeButton className='pb-0 bg-info text-white'>
                <div className=''>
                <h4>{username}</h4>
                <p>₹ {balance.toFixed(2)}</p>
                </div>
                
            </Offcanvas.Header>
        <Offcanvas.Body className='p-0 m-0'>
            
            
          <div>
              <li  className='my-2 navlinkHover font-weight-bold'><img className='mr-2' src={dash} alt="dashboard" height="20px" width="20px" /><Link  id='dash1'className='text-white ' to="/v1.1/dashboard" onClick={handleCanClose}>Dashboard</Link></li>
              <li id='dash2' className='my-2 navlinkHover font-weight-bold'><img className='mr-2' src={neworer} alt="dashboard" height="20px" width="20px" /><Link className='text-white' to="/v1.1/new-order" onClick={handleCanClose} onClick={()=>{document.getElementById('dash1').classList.add('navlinkkClicked')}}>New Order</Link></li>
              <li id='dash3' className='my-2 navlinkHover font-weight-bold'><img className='mr-2' src={serv} alt="dashboard" height="20px" width="20px" /><Link className='text-white' to="/v1.1/services" onClick={handleCanClose} onClick={()=>{document.getElementById('dash1').classList.add('navlinkkClicked')}}>Services</Link></li>
              <li id='dash4' className='my-2 navlinkHover font-weight-bold'><img className='mr-2' src={myord} alt="dashboard" height="20px" width="20px" /><Link className='text-white' to="/v1.1/myorders" onClick={handleCanClose} onClick={()=>{document.getElementById('dash1').classList.add('navlinkkClicked')}}>Order History</Link></li>
              <li id='dash5' className='my-2 navlinkHover font-weight-bold'><img className='mr-2' src={supprt} alt="dashboard" height="20px" width="20px" /><Link className='text-white' to="/v1.1/support" onClick={handleCanClose} onClick={()=>{document.getElementById('dash1').classList.add('navlinkkClicked')}}>Support</Link></li>   
              <li id='dash6' className='my-2 navlinkHover font-weight-bold'><img className='mr-2' src={myord} alt="dashboard" height="20px" width="20px" /><Link className='text-white' to="/transaction-logs" onClick={handleCanClose} onClick={()=>{document.getElementById('dash1').classList.add('navlinkkClicked')}}>Transactions</Link></li>
              <li id='dash7' className='my-2 navlinkHover font-weight-bold'><img className='mr-2 ' src={supprt} alt="dashboard" height="20px" width="20px" /><Link className='text-white' to="/v1.1/addfund" onClick={handleCanClose} onClick={()=>{document.getElementById('dash1').classList.add('navlinkkClicked')}}>Add Fund</Link></li>
              <li class="font-weight-bold navlinkHover text-white"><a href="https://wa.me/916361027573" className='text-white' target="_blank"><i class="fab fa-whatsapp mr-2 text-white"></i>Whatsapp</a></li>
            <li><Dropdown size='small'>
            <Dropdown.Toggle variant="white" id="dropdown-basic" className='font-weight-bold text-white'>
               <img src={user} alt="user" height="25px" width="25px"/> Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item ><Link className='text-dark' to="/view-profile">View Profile</Link></Dropdown.Item>
                <Dropdown.Item ><Link className='text-dark' to="/edit-profile">Edit Profile</Link></Dropdown.Item>
                <Dropdown.Item ><Link className='text-dark' onClick={logout}  to="/">Logout</Link></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown></li>
            
          </div>
        
        </Offcanvas.Body>
            </Offcanvas>
    </div>
    )
}

export default Header_landingPage
