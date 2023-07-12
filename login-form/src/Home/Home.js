import React from 'react'
import './home.css';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate();
  return (
    <section className='home-section'>
        <div className='home-container'>
            <Link onClick={()=>navigate('/gotoFunctionComponent')}>Function Component</Link>
            <Link onClick={()=>navigate('/gotoClassComponent')}>Class Component</Link>
            <Link onClick={()=>navigate('gotoMetirialUI')}>Metirial UI</Link>
        </div>
    </section>
  )
}

export default Home