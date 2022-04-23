import React, { useEffect, useState } from 'react'
import '../header_home.css'
import {Link,useHistory} from 'react-router-dom'
import logo from '../images/logo_smm1.png'
// import logo from '../images/chirtmas_logo.png'
import {TextField,Button, Tooltip, IconButton} from '@mui/material'
function Header_home(props) {
    const[cnt,setCnt]=useState(1000)
    const history=useHistory();
    const[init,setInit]=useState(false)
   useEffect(() => {
        setInit(props.val)
   }, [])
   
    function login()
    {
        history.push("/login")
    }
    function signup()
    {
        history.push("/signup")
    }
   
    function Help()
    {
        history.push('/v1.1/application-help')
    }
    return (
        <div className={`position-${props.position} w-100`}>
            
                {/* <p className="bg-danger text-white p-1 m-0 text-center">High Price drop upto 33% on all service. Hurry up!</p> */}
          
            <div className="header ">
              
                <ul className="d-flex justify-content-between container-fluid">
                    <div>
                        <li><Link to="/"><img className="logo logo_png" src={logo} alt="logo" height="50px" width="50px" className=""/></Link></li>
                    </div>
                    {/* <div id="value">
                        {cnt    }
                    </div> */}
                    <div className="d-flex links my-auto">
                        <li className='mt-auto mb-auto'><Tooltip title="Help"><IconButton><i class="far text-dark fa-question-circle" onClick={Help}></i></IconButton></Tooltip></li>
                        {/* <li className='mt-auto mb-auto'><Button size='small' onClick={login} color="warning" variant="contained" to="/login">Login</Button></li> */}
                        {init ? <li className='mt-auto mb-auto'><Link to="/">Login</Link></li> : <li className='mt-auto text-dark mb-auto'><Link to="/v1.1/services/list">services</Link></li>}
                        <li className='mt-auto mb-auto'><Button size='small' onClick={signup} className="text-dark"   variant="outlined" to="/signup">SignUp</Button></li>
                        {/* <li><a href="">What we offer!</a></li> */}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Header_home