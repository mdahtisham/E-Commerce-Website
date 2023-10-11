import './contact.css'

import { useForm } from 'react-hook-form'


export const Form = () => {
    const {register, handleSubmit} = useForm();
 
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='contact-container'>
            <div  className='getintouch'> <h2>Get in Touch</h2></div>
        <form onSubmit={handleSubmit(onSubmit)}> 
            <label className='contact-details' htmlFor="">Name : &nbsp; </label> 
            <input className='contact-placeholder' type="text" placeholder='Name' />  <br />
            <label className='contact-details' htmlFor="">Email : &nbsp; </label> 
            <input className='contact-placeholder' type="email" placeholder='abc@gmail.com' /> <br />
            <label className='contact-details' htmlFor="">Phone : &nbsp; </label> 
            <input className='contact-placeholder' type="tel" placeholder='Mobile Number' /> <br />
            <label className='contact-details' htmlFor="">City  &nbsp; : &nbsp; &nbsp;</label>
            <input className='contact-placeholder' type="country" placeholder='City' /> <br />
            <label className='contact-details' htmlFor="">Message:</label>
            <textarea className='contact-placeholder' name="" id="" placeholder='Message' cols="15" rows="5"></textarea> <br />
            <button className='contact-submit-button'>Submit</button>
        </form>
        </div>
    )
}