import React from 'react';
import moment from 'moment';
import logo from '../../assets/logo.png'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='text-center space-y-1 my-2 font-poppins'>
                <Link to='/'><img className='mx-auto' src={logo} alt="logo" /></Link>
                <p style={{color:'#706F6F'}}>Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd,')}<span style={{color:'#706F6F'}}>{moment().format(' MMMM D, YYYY ')}</span></p>
            </div>
            <div className='font-poppins flex py-2 px-4' style={{backgroundColor:'#F3F3F3'}}>
                <button className="btn btn-error" style={{color: 'white'}}>Latest</button>
                <Marquee speed={100}>
                    <p className='font-semibold'>
                        EPL Match Day-2 Results: Liverpool vs Bentford(2-0), Man City vs Ipswich(4-1), Wolves vs Chelsea(2-6), Brighton vs Man United(2-1), Aston Vila vs Arsenal(0-2), Tottenham vs Everton(4-0)....... 
                    </p> 
                </Marquee>
            </div>
        </>
    );
};

export default Header;