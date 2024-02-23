import React from 'react';
import {useState} from 'react';

var api=("https://v2.jokeapi.dev/joke/Any");

const JokeApp = () => {
    
    const[Joke,setJoke] = useState("Please Click Button to");
    const[Joke2,setJoke2] = useState("Get JOKE !");
    const[Count , setCount] = useState(0);

  async function getJoke ()
    {
        const res = await fetch (api);
        const data = await res.json();
        setJoke(data.setup);
        setJoke2(data.delivery);
        console.log(data,res);
        setCount((c)=> c+1);
    }
    function Jokes(){
        alert("Go to click the Get Joke Button!");
    }

  return (
    <div className='bg-[#71717a] flex max-w-[1366px] h-[900px] justify-center text-center items-center p-7 md:[800px] border-spacing-0 backdrop-blur-2xl'>
        <div className='bg-[#f1f5f9] p-8 w-[1000px]  rounded-[20px] '>

            <h1 className=' text-5xl pb-6 cursor-pointer text-black font-bold' onClick={Jokes}>JOKE APP<b className='hover:text-[#ff9c9c]'>!</b></h1>

            <div className='flex w-full justify-center  items-center '>
                <div className='bg-[#bebebe]  rounded-[20px] p-7 font-medium my-2 text-1xl me-3 hover:bg-[#ffcfcf]'>
                <h2>{Joke}</h2>    
            </div>

            <div className='bg-[#ffcfcf]  rounded-[20px] p-7 font-medium my-2 text-1xl hover:bg-[#bebebe]'>
                <h2>{Joke2}</h2>  
            </div>

        </div>
        <div>
            <button className='bg-black text-white font-semibold p-3 w-40 my-7  rounded-full hover:bg-[#fcf8f8] hover:border-[1px,solid,black] hover:text-black hover:border-black' onClick={getJoke}>GET JOKE</button>
            <p className='font-medium mt-2'>You have read<b className='bg-black text-white px-3 py-1 rounded-full mx-2 hover:bg-[#ffcfcf] hover:text-[black]'>{Count}</b>Pieces of Joke!</p>
        </div> 
    </div>
</div>
  )
}

export default JokeApp
