import Navbar from '@/app/components/Navbar/Navbar';
import React from 'react';

type indexProps = {};

const index:React.FC<indexProps> = () => {
    
    return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
        </div>

    </div>
}
export default index;