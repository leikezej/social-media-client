// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import "./register.css";
import "./register.scss";

import { AiOutlineMail } from "react-icons/ai";
import { FiEye, FiEyeOff, FiKey, FiPhone, FiUser, FiFacebook, FiGithub, FiLinkedin  } from "react-icons/fi";

function Register() {
   const navigate = useNavigate('');
   const [ username, setUsername ] = useState('');
   const [ name, setName ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ phone, setPhone ] = useState('');
   const [ address, setAddress ] = useState('');
   const [ coverImage, setCoverImage ] = useState('');
   const [ profileImage, setProfileImage ] = useState('');
   const [ website, setWebsite ] = useState('');
   const [ password, setPassword ] = useState('');
   
   const [ showPassword, setShowPassword ] = useState(false);
   const changeIcon = showPassword === true ? false : true;
      
   const togglePassword = () => {
    setShowPassword(!showPassword);
   };
//       useEffect(() => {
//          if(!localStorage.getItem('accessToken')) {
//         navigate('/')
//     }
//   }, [])
   
   const handleRegister = () => {
      console.log({ username, name, email, phone, address, coverImage, profileImage, website, password })
      axios.post('http://localhost:8800/api/auth/signup', 
      {
         username: username,
         name: name,
         email: email,
         phone: phone,
         address: address,
         website: website,
         coverImage: coverImage,
         profileImage: profileImage,
         password: password
      })
         .then(res => {
         // if (!name || !email || !phone || !image ||  !password) {
         //        return res.sendStatus(400);
         //     }
            console.log(res.data)
            console.log(res.status)
               alert('Registration Successfull!')
            navigate("/", { replace: true });
         })
         .catch(error => {
            console.log(error)
            alert('Register Error')
         })
   }
   
   return (<>
         <h1 className="center" style={{ fontFamily: 'Kaushan Script', marginTop: '50px'}}> REGISTER </h1>
               <Link to={'/'} style={{  textAlign: 'center', color: '#000', display: 'block' }}> Login Here</Link>
         <br />
                     
         <div className="outcard">
           Full Name: <br /> 
          <FiUser /> {" "}
               <input
               onChange={(e) => {
                  setName(e.target.value)
               }}
               required={true}
               placeholder="Johnny Pusong"
               value={name}
               className="password-inputs"
               type="name" /> <br /> <br />
            
        Username: <br /> 
            <FiUser /> {" "}
               <input
               onChange={(e) => {
                  setUsername(e.target.value)
               }}
               required={true}
               placeholder="john420!@"
               value={username}
               className="password-inputs"
               type="name" /> <br /> <br />
            
            Email: <br />
             <AiOutlineMail />  {" "}
             <input
               required={true}
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               placeholder="johndoe@gmail.com"
               value={email}
               className="password-inputs"
               type="email" /> <br /> <br />
            
            Phone: <br />
          <FiPhone />{" "}
             <input
               required={true}
               onChange={(e) => {
                  setPhone(e.target.value)
               }}
               value={phone}
               className="password-inputs"
               type="number"
                placeholder="(xxx) xxx-xxxx"
               /> <br /> <br />
               
            Address: <br />
             <AiOutlineMail />  {" "}
             <input
               required={true}
               onChange={(e) => {
                  setAddress(e.target.value)
               }}
               placeholder="Brgy.51-A, Arellano St."
               value={address}
               className="password-inputs"
               type="address" /> <br /> <br />
               
            Website: <br />
             <AiOutlineMail />  {" "}
             <input
               required={true}
               onChange={(e) => {
                  setWebsite(e.target.value)
               }}
               placeholder="https://docampaign.online/portfolio/jezekielisip"
               value={website}
               className="password-inputs"
               type="website" /> <br /> <br />
               
        Profile Image: <br />
          <FiPhone />{" "}
             <input
               required={true}
               onChange={(e) => {
                  profileImage(e.target.value)
               }}
               value={profileImage}
               className="password-inputs"
               type="file"
               /> <br /> <br />
               
        Cover Image: <br />
          <FiPhone />{" "}
             <input
               required={true}
               onChange={(e) => {
                  coverImage(e.target.value)
               }}
               value={coverImage}
               className="password-inputs"
               type="file"
               /> <br /> <br />
               
            
            Password: <br />
             <FiKey />{" "}
               <input 
                  onChange={(e) => {
                     setPassword(e.target.value)
                  }}
                  placeholder={'************'}
                  value={password}
               required={true}
                  type={showPassword ? "text" : "password"}
                  className="password-inputs" /> {' '}
               <span
                    onClick={() => {
                       togglePassword(changeIcon);
                    }}
                 >
                    {changeIcon ? <FiEye /> : <FiEyeOff />}
                 </span>
                  <br /> <br />
               <button onClick={handleRegister} className="btns"> Register </button>
            <>
            <br />
               <center style={{ textAlign: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>Or Register With</center> <br />
               <center>
                     <a href="https://www.linkedin.com/in/jezekiel-isip-1ab872215/" >
                        {" "}<FiLinkedin size="30px" color="#000" />{" "}
                    </a>
                    
                    <a href="https://github.com/leikezej">
                        {" "}<FiGithub size="30px" color="#000" 
                        />{" "}
                    </a>
                    
                    <a href="https://www.facebook.com/thebullier">
                       {" "} <FiFacebook  size="30px" color="#000"
                        />{" "}
                    </a>
               </center>
            </>
         </div>
      </>
   )
}


export default Register;