import React, { useState } from 'react'
import Input from '../components/input';
import Button from '../components/button';

const Signup = () => {
      const [data, setData] = useState({
     username:"",   
     email:"",
     password:""
      })
const inputHandler=(value,type)=>{
setData((prev)=>({
...prev, [type]:value
    
}))
}
const SignupHandler=()=>{
console.log("user ne login kr liya==>",data);

}

      return (
<>
        <div class="box-2">
            <div className="w-[396px] h-[300px] bg-white shadow-amber-50 rounded-[8px] p-4">
             <Input placeholder="Enter Your Name" type="username" handler={inputHandler}/>      
             <Input placeholder="Enter address or phone number" type="email" handler={inputHandler}/>   
             <Input placeholder="Enter Password" type="password" handler={inputHandler}/>   
             <Button text="Login" handler={SignupHandler}/>
            </div>
        </div>
</>
  )
}

export default Signup