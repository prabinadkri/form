import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import FormInput from "./components/FormInput";
const App=()=> {
    const [values,setValues] =useState({
           username:"",
           email:"",
           phnumber:"",
           password:"",
    })
 const onChange =(e)=>
 {
     setValues({...values,[e.target.name]:e.target.value});
 }
 const inputs=[
     {
         id:1,
         name:"username",
         type:"text",
         placeholder:"Username",
         label:"Username"
     },
     {
         id:2,
         name:"email",
         type:"text",
         placeholder:"Email",
         label:"Email"
     },
     {
         id:3,
         name:"phnumber",
         type:"number",
         placeholder:"Phone number",
         label:"Phone number"
     },
     {
         id:4,
         name:"password",
         type:"password",
         placeholder:"Password",
         label:"Password"
     }
 ]
const handleSubmit=(e)=>{
    e.preventDefault();
    //Code the task to do when submit is pressed
   //onst data =new FormData(e.target);
  //console.log(Object.fromEntries(data.entries()));
};
console.log(values);
    return (
    <div className="App">
     <form onSubmit={handleSubmit}>
     {
         inputs.map(input=>(
             <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
         ))
     }
     <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
