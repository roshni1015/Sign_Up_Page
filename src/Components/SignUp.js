import React, { useState } from "react";
import "./SignUp.css";
// import { Button } from "@mui/material";
const NameRegex = /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/;
const EmailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const PhoneRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/
const ConfirmPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/



function SignUp(props) {


    return (
        <>
            <div className="login">
                <input
                    type={props.type}
                    className={props.class}
                    placeholder={props.placeholder}
                    ref={props.ref}
                />
            </div>
        </>
    );
}

export default SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setCpassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)

        console.log(phone)

        console.log(password)

        console.log(confirmpassword)

        
    }

    return (<div>

        <div>
            <div className="container">
                <div className="container-left">
                    <div className="logo-content">
                        <img src="dip.png" style={{ width: '20%', height: '20%' }}></img>
                    </div>

                    <div className="head">
                        <h1 className="heading">Create a Your Account </h1>
                        <h3 className="heading1">Sign Up using social networks</h3>
                        <img className="social" src="fb.png" style={{ width: '11%', height: '20%', paddingLeft: '0%', paddingBottom: '9.5%' }}></img>
                        <img className="social" src="g.png" style={{ width: '6%', height: '20%', paddingLeft: '0%', paddingBottom: '12%' }}></img>
                        <img className="social" src="in.png" style={{ width: '11%', height: '20%', paddingLeft: '0%', paddingBottom: '11.5%' }}></img>
                    </div>
                    <h2><span>OR</span></h2>
                    <input type="text" className="email" placeholder="Name" onChange={(event) => setName(event.target.value)} ></input><br></br>
                    <input type="text" className="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}></input><br></br>
                    <input type="text" className="email" placeholder="Phone" onChange={(event) => setPhone(event.target.value)}></input><br></br>
                    <div className="password-container">
                        <input type="password" class="email" placeholder="Password" id="password" onChange={(event) => setPassword(event.target.value)}></input>
                        <i className="fa-solid fa-eye" id="eye"></i>
                    </div><br></br>
                    <div className="password-container">
                        <input type="password" class="email" placeholder="Confirm Password" id="password" onChange={setCpassword}></input>
                        <i className="fa-solid fa-eye" id="eye"></i>
                    </div><br></br>
                    <form>
                        <button onClick={submit} className="signup" type="button" value="Sign Up">Sign Up</button>
                    </form>
                </div>
                <div className="container-right">
                    <div className="centered">Welcome Back</div>
                    <div class="para">To keep connected with us please login with your personal info</div>
                    <div class="sign">
                        <button className="button">Sign In</button>
                    </div>
                </div>

            </div>


        </div>
    </div>



    )
}

