import React, { useState } from 'react'
import Input from '../components/input';
import Button from '../components/button';

const Login = () => {
      const [data, setData] = useState({
     email:"",
     password:""
      })
const inputHandler=(value,type)=>{
setData((prev)=>({
...prev, [type]:value
    
}))
}
const loginHandler=()=>{
console.log("user ne login kr liya==>",data);

}

      return (
<>
        <div class="box-2">
            <div className="w-[396px] h-[300px] bg-white shadow-amber-50 rounded-[8px] p-4">
             <Input placeholder="Enter address or phone number" type="email" handler={inputHandler}/>   
             <Input placeholder="Enter Password" type="password" handler={inputHandler}/>   

             <Button text="Login" handler={loginHandler}/>
            <p className='text-center font-medium text-[14px] text-[#0866ff] mb-5 cursor-pointer hover:underline '>
                Forgotten password?
            </p>
            <hr className='text-[#d3d4da]'/>
            </div>
        </div>
</>
  )
}

export default Login