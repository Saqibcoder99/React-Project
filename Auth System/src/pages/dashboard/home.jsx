import React, { useEffect, useState } from 'react'

const Home = () => {
  

const [users, setUsers] = useState([])
const getData = async () => {
     let data = await fetch("https://dummyjson.com/users")
     let result=await data.json()
    
    
    setUsers(result.users);
    console.log(result.users);
    
}
useEffect(() => {
    console.log("use effect chalaaa -->");
    
     getData()
    
    }, [])


      return (
<container className="w-full h-[100vh]">
 <nav className='h-[80px] flex justify-between items-center text-[#181818] px-5 border-b-2 border-[#d9dadd]'>
      <div className="left-side">
        <img src="https://tse3.mm.bing.net/th/id/OIP.e8XajFkLVSZ3Ze_SS_ZQjwHaCD?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="upwork" className='h-7' />
      </div>
      <div className="flex items-center gap-10 text-[14px]">
        <p>Log in</p>
        <button className='h-10 px-7 bg-[#108A00] font-semibold text-white rounded-[20px] cursor-pointer hover:bg-[#14a101]'>Sign up</button>
      </div>
    </nav>
        <div className="text-[#1A1A1A] h-auto py-14 flex flex-col items-center gap-2.5">
      <h2 className='text-4xl font-bold'>Hire the Best Front-End Developers</h2>
      <h3 className='text-[18px] mt-5 font-semibold'>Clients rate our Front-End Developers <span><i class="fa-solid fa-star text-[#ff5900]"></i><i class="fa-solid fa-star text-[#ff5900]"></i><i class="fa-solid fa-star text-[#ff5900]"></i><i class="fa-solid fa-star text-[#ff5900]"></i><i class="fa-solid fa-star-half-stroke text-[#ff5900]"></i></span>      4.8/5</h3>
      <p className='text-[16px] text-[#242e42cc]'>Based on 2,132 client reviews</p>
      <button className='h-10 w-[140px] mt-7 rounded-[20px] bg-[#14a101] text-white font-semibold cursor-pointer'>Hire Freelancers</button>
    </div>

    <div className="flex py-10  flex-wrap justify-around gap-8 ">

        {users.map((user) => (  <div class="w-[420px] bg-white border border-[#ddd] rounded-2xl p-6 shadow-2xl">
          <div class="flex items-center gap-3.5">
            <img src={user.image} alt="arham" className='w-[70px] h-[70px] rounded-[50%] object-cover'/>
            <div>
              <h2 className='text-[30px] mb-1'>{user.firstName}</h2>
              <p className='text-[18px] text-[#666]'>Karachi, Pakistan</p>
            </div>
          </div>
    
          <div className="flex gap-5 my-6 items-center text-[18px]">
            <span><strong>$18/hr</strong></span>
    
            <span className="text-[#ff7a00]">
              <i class="fa-solid fa-star"></i> 5.0
            </span>
    
            <span className="text-[#555]">
              <i class="fa-solid fa-briefcase text-[#ff7a00]"></i> 8 jobs
            </span>
          </div>
    
          <p className="text-[#555] leading-7 text-[17px]" >
            I'm currently Upwork's top web/mobile developer.
            I build responsive and modern websites using
            React and Next.js.
          </p>
    
          <div className="my-5">
            <span className='inline-block bg-[#eef2f4] p-3 rounded-[8px] mr-2.5 mb-2.5 text-[15px]'>Front-End Development</span>
            <span className='inline-block bg-[#eef2f4] p-3 rounded-[8px] mr-2.5 mb-2.5 text-[15px]'>React</span>
            <span className='inline-block bg-[#eef2f4] p-3 rounded-[8px] mr-2.5 mb-2.5 text-[15px]'>HTML</span>
            <span className='inline-block bg-[#eef2f4] p-3 rounded-[8px] mr-2.5 mb-2.5 text-[15px]'>CSS</span>
            <span className='inline-block bg-[#eef2f4] p-3 rounded-[8px] mr-2.5 mb-2.5 text-[15px]'>Javascript</span>
    
          </div>
    
          <button className='w-full bg-[#14a800] text-white p-4 rounded-4xl text-[18px] font-bold cursor-pointer hover:bg-[#108c00]'>See profile</button>
    
        </div>))}
  
          
        </div>
</container>
  )
}

export default Home