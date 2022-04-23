import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { Link,useHistory } from 'react-router-dom'
import '../landingPage.css'
import Footer from './Footer'
import Header_landingPage from './Header_landingPage'
import Myorders from './Myorders'
import Neworder from './Neworder'
import Service from './Service'
import Support from './Support'
import UserDashboard from './UserDashboard'


function LandingPage() {
    const history=useHistory()
     
  useEffect(() => {
    const authState=async()=>{
        let resp=await fetch('/authUser',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:'include'
        })
        
        if(resp.status==400)
        {
          history.push('/login')
        }
       
    }
    authState();
}, [])


    const[nav,setNav]=useState('dashboard')
    const decideNav = () =>{
        switch (nav) {
            case "dashboard":
                return <UserDashboard/>
            case "neworder":
                return <Neworder/>
            case "service":
                return <Service/>
            case "myorder":
                return <Myorders/>
            case "support":
                return <Support/>
            default:
                <h1>404 Error. page not found</h1>
        }
    }
    return (
        <div className='dashboard-header11'>
             <Helmet>
                <title>Dashboard</title>
                <meta name="description" content="smmdigg.in - Social Media Marketing - Get Your Social Account's Likes, Followers, Subscribers & More in cheap price at One Place,Instatntly"></meta>
                <meta name="keywords" content="smm,social media marketing, likes, followers, subscribers, view, increase followers, increase likes, increase subscribers, increase youtube subscribers, cheap instagram followers, trusted cheap best price facebook ads, youtube ads, youtube watchtime hours, cheap youtube watchtime hours, cheapest in market, facebook likes, facebook followers, twitter likes, comments, india's cheapest smm service at best price in market, 
                इन्सग्राम फॉलोअर्स बढ़ाएं, insagraam pholoars badhaen, 
                इन्सग्राम लाइक बढ़ाएं, insagraam laik badhaen  "/>
            </Helmet>
            <Header_landingPage postion="relative"/>
            <div className="container land ">
                
                <UserDashboard/>
            </div>
            {/* <div className="container land">
                <div className="navigation d-flex justify-content-center shadow-lg">
                    <li className=' d-flex active' id="dash">
                        <a className="navigationLinks mx-auto" onClick={()=>{
                            document.getElementById('dash').classList.add('active')
                            document.getElementById('neword').classList.remove('active')
                            document.getElementById('serv').classList.remove('active')
                            document.getElementById('myord').classList.remove('active')
                            document.getElementById('supp').classList.remove('active')
                            setNav('dashboard')}}>Dashboard</a>
                    </li>
                    <li className=' d-flex' id="neword">
                        <a className="navigationLinks mx-auto" onClick={()=>{setNav('neworder')
                         document.getElementById('neword').classList.add('active')
                         document.getElementById('dash').classList.remove('active')
                            document.getElementById('serv').classList.remove('active')
                            document.getElementById('myord').classList.remove('active')
                            document.getElementById('supp').classList.remove('active')
                         }}>New Order</a>
                    </li>
                    <li className=' d-flex ' id="serv">
                        <a className="navigationLinks mx-auto" onClick={()=>{
                            document.getElementById('serv').classList.add('active')
                            document.getElementById('dash').classList.remove('active')
                            document.getElementById('neword').classList.remove('active')
                      
                            document.getElementById('myord').classList.remove('active')
                            document.getElementById('supp').classList.remove('active')
                            setNav('service')}}>Services</a>
                    </li>
                   
                    <li className=' d-flex' id="myord">
                        <a className="navigationLinks mx-auto" onClick={()=>{
                            document.getElementById('myord').classList.add('active')
                            document.getElementById('dash').classList.remove('active')
                            document.getElementById('neword').classList.remove('active')
                            document.getElementById('serv').classList.remove('active')
                          
                            document.getElementById('supp').classList.remove('active')
                            setNav('myorder')}}>My orders</a>
                    </li>
                    <li className=' d-flex' id="supp">
                        <a className="navigationLinks mx-auto" onClick={()=>{
                            document.getElementById('supp').classList.add('active')
                            document.getElementById('myord').classList.remove('active')
                            document.getElementById('dash').classList.remove('active')
                            document.getElementById('neword').classList.remove('active')
                            document.getElementById('serv').classList.remove('active')
                          
                            setNav('support')}}>Support </a>
                    </li>   
                </div>
                {decideNav()}
            </div> */}
            <Footer/>
        </div>
    )
}

export default LandingPage
