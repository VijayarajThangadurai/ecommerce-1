import React from "react";
import classes from './ContactUs.module.css';
const ContactUs = (props)=> {
    const submitHandler = async event => {
event.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const mobile = document.getElementById('mobile').value;

const details ={Name: name, Email: email, Mobile: mobile}

try{
    const response = await fetch('https://reactmy-ecom-default-rtdb.firebaseio.com/contactdetail.json',{
        method: 'Post',
        body: JSON.stringyfy(details),
        headers: {
            "content-type": "application/json",
        }
    })
    if(!response.ok){
        throw new Error('Error!')
    }
}catch (error){
    console.log(error.message)
}
    }
    return (
        <div className={classes.form}>
          
            <form onSubmit={submitHandler}>
            <h1>Contact Us</h1>
             <div className={classes.name}>
            <label>Name:</label>
            <input type = 'text' id= 'name'/>
             </div>
             <div className={classes.email}>
            <label>Email:</label>
            <input type = 'text' id= 'email'/>
            </div>
            <div className={classes.mobile}>
            <label>Mobile No:</label>
            <input type = 'number' id= 'mobile'/>
            </div>
            <button>Submit</button>
            </form>

        </div>
    );
};

export default ContactUs;