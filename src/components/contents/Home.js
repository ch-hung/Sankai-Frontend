import React, { useEffect, useState } from 'react'
import Homeimg from './Homeimg';

export default function Home() {
    const [currentimg, setCurrentimg] = useState(0);
    const imgnames = ["home1.jpg", "home2.jpg", "home3.jpg"];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentimg(prev => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className='contents'>
            <Homeimg imgname={imgnames[currentimg]}></Homeimg>
        </div>
    )
}
