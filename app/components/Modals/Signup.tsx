import { authModalState } from '@/app/atoms/authModalAtom';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type SignupProps = {};

const Signup:React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
        const handleClick = () => {
            setAuthModalState((prev) => ({  ...prev, type: "login" }));
        }
    
    return (
         <form className='space-y-6 px-6 pb-4'>
        <h3 className='text-xl font-medium text-white'>Register to LeetCode</h3>
    <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
            Email
        </label>
        <input type='email' name='email' id='email' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder:bg-gray-400 text-white' placeholder='shahzodohunjon@gmail.com'/>
    </div>
     <div>
        <label htmlFor='displayname' className='text-sm font-medium block mb-2 text-gray-300'>
            Display Name
        </label>
        <input type='displayname' name='displayname' id='displayname' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder:bg-gray-400 text-white' placeholder='shaxzod'/>
    </div>
    <div></div>
    <div>
        <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
             password
        </label>
        <input type='password' name='password' id='password' className='
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder:bg-gray-400 text-white' placeholder='********'/>
    </div>

    <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
          text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
        Register
    </button>
    
    <div className='text-sm font-medium text-gray-300'>
        Already have an account?{" "}
        <a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick()}>
        Log In
        </a>
    </div>
    </form>
    )
}
export default Signup;