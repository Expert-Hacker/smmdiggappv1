import React, { useState } from 'react'
import { Link ,useHistory} from 'react-router-dom'
import Header_home from './Header_home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../signup.css'
import {TextField,Button, Tooltip, Checkbox, ClickAwayListener, Paper } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';
import  { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Helmet from 'react-helmet';
import signup from '../../src/images/sign-up.png'

import email from '../../src/images/email.png'
import  name11 from '../../src/images/user1.png'
import  whatspp from '../../src/images/whatsapp.png'
import  passwd from '../../src/images/key.png'

var validator = require("email-validator");


function Signup() {
    const[show,setShow]=useState(false)
    const[disable,setDisable]=useState(false)
    const[loading,setLoading]=useState(false);
 const[nameerr,setnameerr]=useState(false)
const[emailerr,setemailerr]=useState(false)
const[numerr,setnumerr]=useState(false)
const[passerr,setpasserr]=useState(false)
const[cpasserr,setcpasserr]=useState(false)
  const[passMatch,setpassMatch]=useState(false)
  const[sighnupvalid,setsignupValid]=useState(false)
  const[invaliEmailerror,setinvaliEmailerror]=useState(false)
  const[MinmaxPass,setminmaxpass]=useState(false)

  const[invalidName,setinvalidName]=useState(false)

  const[strongPasswd,setstrongPasswd]=useState(false)
  const[tOpen,settOpen]=useState(false)
  const[tOpen1,settOpen1]=useState(false)
  let history=useHistory();
    const [input,setInput]=useState({
        name:"",
        email:"",
        number:"",
        password:"",
        cpassword:""
    })
    let name,value;
    const handleChange = (e) =>{
      
        name=e.target.name;
        value=e.target.value;
        setInput({...input,[name]:value})
    }

    const register1 =async(e)=>
    {
        e.preventDefault();
        setDisable(true)
        const {name,email,password,cpassword}=input;
        let phone=input.number;
   

        if(password!==cpassword)
        {
            setpassMatch(true)
            setDisable(false)
        }
        //Password validation
       let lowerCaseLetters = /[a-z]/g
       let upperCaseLetters = /[A-Z]/g
       let numbers = /[0-9]/g
       let special_car = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    



        if(validator.validate(email))
        {
              
        }
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        if(!validateEmail)
        {
            setemailerr(true)
        }
       
             if(!name || !email || !password || !cpassword || !phone)
                {
                   
                    if(!name)
                    {
                        setnameerr(true)
                        setDisable(false)
                    }
                    if(name.trim().length==0)
                    {
                        setnameerr(true)
                        setDisable(false)
                    }
                 
                    if(email.length==0)
                    {
                        setemailerr(true)
                        setDisable(false)
                    }
                   
                    if(!phone)
                    {
                        setnumerr(true)
                        setDisable(false)
                    }
                    if(phone.length<10 || phone.length>10)
                    {
                        setnumerr(true)
                        setDisable(false)
                    }
                    if(!password || !cpassword)
                    {
                        setpasserr(true)
                        setDisable(false)
                    }
                    if(!cpassword)
                    {
                        setcpasserr(true)
                        setDisable(false)
                    }
                    
                }
              
               else 
            {
        
       
        if(validator.validate(email))
        {
            setLoading(true)
            let trimmed_name=name.trim();
            let res=await fetch('/register',{
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
                 name:trimmed_name,email,phone,password,cpassword
             })  
         })
         let resp=await res.json();
 
         if(res.status==201)
         {
             setLoading(false)
            toast.success('Registration Successfull!', {
                position: "bottom-center",
                autoClose: 3500,
                draggable: false,
                }); 
                // setsignupValid(true)
                setTimeout(function()
                {
                    history.push("/login")
                },3500)
                
          
         }
         else if(res.status==400)
         {
            setLoading(false)
            toast.error(`${resp.resp}`, {
                position: "bottom-center",
                autoClose: 3700,
                draggable: false,
                
                }); 
                setsignupValid(false)
                setDisable(false)
               
         }
        }
        else
        {
            setLoading(false)
            setinvaliEmailerror(true)
            setDisable(false)
        }
        
    }
    }
 
    function passwordHelp()
    {
        document.getElementById('passHelp').classList.toggle('TogglepasswodHelpDiv')

    }
    function handleTiiltipOpen()
    {
       settOpen(true)
    }
    function handleTiiltipClose()
    {
        settOpen(false)
    }

    function handleTiiltipOpen1()
    {
       settOpen1(true)
    }
    function handleTiiltipClose1()
    {
        settOpen1(false)
    }
    function showHidePassed()
    {
        let val=document.getElementById('passwdd');
        let val2=document.getElementById('passwdd1');
        
        if(val.type=="password" && val2.type=="password")
        {
            val.type="text"
            val2.type="text"
        }
        else
        {
            val.type="password"
            val2.type="password"
        }
    }
    return (
        <div>
            <Header_home/>
            <ToastContainer/>
            <Helmet>
                <title>Create an Account</title>
                <meta name="description" content="smmdigg.in - Social Media Marketing - Get Your Social Account's Likes, Followers, Subscribers & More in cheap price at One Place,Instatntly"></meta>
                <meta name="keywords" content="smm,social media marketing, likes, followers, subscribers, view, increase followers, increase likes, increase subscribers, increase youtube subscribers, cheap instagram followers, trusted cheap best price facebook ads, youtube ads, youtube watchtime hours, cheap youtube watchtime hours, cheapest in market, facebook likes, facebook followers, twitter likes, comments, india's cheapest smm service at best price in market, 
                इन्सग्राम फॉलोअर्स बढ़ाएं, insagraam pholoars badhaen, 
                इन्सग्राम लाइक बढ़ाएं, insagraam laik badhaen  "/>
            </Helmet>
            
            {/* <div className="m-auto container"> */}
            <Paper elevation={6} className='widthforlogin m-auto'>
            {loading ? <LinearProgress/> : ""}
            <div className='signup_div1 m-auto'>
            <div className='d-flex'>
                <img className='mr-2' src={signup} className='m-auto' alt="signUp_logo" height="100px" />
            </div>
                <div className="title">
                    <h3 className='text-center pt-1'>Create an account</h3>
                </div>
                
                <div className="controls">
                    <form method="POST" autoComplete='off'>
                        <div className="my-3 d-flex flex-row ">
                            {/* <i className="fas icons fa-user-circle mt-auto mb-auto  mr-2"></i> */}
                            <img className='mr-2' src={name11} height="30px" width="30px" alt="user_icon" />
                            <TextField autoComplete='off' disabled={disable} helperText={nameerr ? "Name is Required" : ""}  id="standard-basic" type="text" label="Your Name" name="name" variant="outlined" size='small' value={input.name} onChange={handleChange} fullWidth/>
                        </div>
                        <div className="my-3 d-flex flex-row">
                            {/* <i className="fa icons fa-envelope mr-2"></i> */}
                            <img className='mr-2' src={email} height="30px" width="30px" alt="email_icon" />
                            <TextField autoComplete='none' disabled={disable} helperText={emailerr ? "Email is Required" : emailerr==false&&invaliEmailerror ? <span className="text-danger">Invalid Email</span> : ""} error={emailerr} id="standard-basic" type="email" label="Email" name="email" variant="outlined" size='small' value={input.email} onChange={handleChange} fullWidth/>
                        </div>
                        <div className="my-3 d-flex flex-row">
                            {/* <i className="fab icons fa-whatsapp-square mr-2"></i> */}
                            <img className='mr-2' src={whatspp} height="30px" width="30px" alt="whatsapp_icon" />
                            <TextField autoComplete='none' disabled={disable}  helperText={numerr ? "Number is Required" : ""} error={numerr} id="standard-basic " type="number" label="Whatsapp" name="number" variant="outlined" size='small' value={input.number} onChange={handleChange} fullWidth/>
                            <ClickAwayListener onClickAway={handleTiiltipClose}>
                                <Tooltip arrow open={tOpen} title="We wil notify you for any Discount sale or Bigsale 🎉" disableFocusListener  disableHoverListener disableTouchListener>
                                    <button className='trans_btn1' type='button'><i class="far fa-question-circle passwodHelp" onClick={handleTiiltipOpen}></i></button>
                                </Tooltip>
                            </ClickAwayListener>
                        </div>
                        <div className="my-3 d-flex flex-row">
                        {/* <i className="fas icons mr-2 fa-key"></i> */}
                        <img className='mr-2' src={passwd} height="30px" width="30px" alt="password_icon" />
                            <TextField disabled={disable} autoComplete='none'  helperText={passerr ? "Password is Required" : passMatch ? <span className="text-danger">Password should be match</span> : ""} error={passerr} id="passwdd" type="password" label="Password" name="password" variant="outlined" size='small' value={input.password} onChange={handleChange} fullWidth/>
                            <div className='d-flex'>
                            <ClickAwayListener className="mb-auto mt-auto" onClickAway={handleTiiltipClose1}>
                                <Tooltip arrow open={tOpen1} title=" ⚠️ password must be minimum 8 characters long.
                                
                                  ⚠️ At least one character must be alpabetical AND at least one character must be digit OR special character.!^$@ 
                                  ⚠️ Password cannot contain any string that is also container in username" disableFocusListener  disableHoverListener disableTouchListener> 
                                    <button className='trans_btn1 passbtn_1 mb-auto mt-auto ' type='button'><i class="far mt-auto mb-auto fa-question-circle passwodHelp" onClick={handleTiiltipOpen1}></i></button>
                                </Tooltip>
                            </ClickAwayListener>
                            </div>
                        </div>
                        <div className="my-3 d-flex flex-row">
                            {/* <i className="fas icons mr-2 fa-key"></i> */}
                            <img className='mr-2' src={passwd} height="30px" width="30px" alt="password_icon" />
                            <TextField autoComplete='none' disabled={disable}  helperText={cpasserr ? "Password is Required" : passMatch ? <span className="text-danger">Password should be match</span> : ""} error={cpasserr} id="passwdd1" type="password" label="Confirm Password" name="cpassword" variant="outlined" size='small' value={input.cpassword} onChange={handleChange} fullWidth/>
                        </div>
                        
                            {passMatch ? <span className="p-0 m-0 text-danger">Both Passwords should be match</span> : ""}
                        
                        <div>
                            <div className="d-flex justify-content-between" >
                                <div className='d-flex flex-row'>
                                    <Checkbox checked/>
                                    <p className="mt-auto mb-auto">I agree the <Link to="/v1.1/terms-and-conditions" className="termsncond text-dark">Terms</Link> & <Link to="/v1.1/privacy-policy" className="termsncond text-dark">Policy</Link></p>
                                </div>
                                <div>
                                    <div className='d-flex flex-row'>
                                        <Checkbox onClick={showHidePassed}/><p className='mt-auto mb-auto' >Show Password</p>
                                    </div>
                                </div>
                            </div>
                            <Button disabled={disable}  variant="contained" size='small' fullWidth  onClick={register1} className="mt-2">Register</Button>
                        </div>
                    </form> 
                    <div className="mt-3">
                        <p>Already have an account?<Link className="text-primary h6" to="/login"> Login</Link></p>
                    </div>
                </div>
            </div>
            </Paper>
        </div>
    )
}

export default Signup
