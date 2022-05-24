import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='container w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/16e93481-2d1b-4e0f-81a9-1adefbd0de94" className='flex flex-col max-w-[600px] w-full'>
            <div className='col-75 pb-8'>
                <h3 className='text text-4xl font-bold inline border-b-4 border-lime-600 text-gray-300'>Contact</h3>
                <p className='text text-gray-300 py-4'>Submit the form below or contact me via email!</p>
            </div>
            <input className='input bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='input my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='button text-white border-2 hover:bg-lime-600 hover:border-lime-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Go!</button>
        </form>
    </div>
  )
}

export default Contact