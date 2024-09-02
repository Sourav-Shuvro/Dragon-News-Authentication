import React, { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import backImg from '../../assets/bg.png'
import { AuthContext } from '../../UserContext/UserContext';

const RightSideNav = () => {

    const {googleSignin} = useContext(AuthContext);

    const handleGoogleSignin = () =>{
        googleSignin()
        .then( result => console.log(result.user))
        .catch( error => console.error(error))
    }
    return (
        <div className='my-4 p-4'>
            <div className='space-y-2'>
                <h3 className="text-lg font-bold">Login With</h3>
                <button className="btn btn-outline btn-accent w-full" onClick={handleGoogleSignin}><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn btn-outline w-full"><FaGithub></FaGithub> Login with Github</button>
            </div>

            <div className='my-4'>
                <h3 className="text-lg font-semibold mb-2">Find Us On</h3>
                <a href='/' className='flex text-lg items-center border rounded-t-lg p-4'> <FaFacebook></FaFacebook><span className='ms-2'>Facebook</span></a>
                <a href='/' className='flex text-lg items-center border-x p-4'><FaTwitter></FaTwitter> <span className='ms-2'>Twitter</span></a>
                <a href='/' className='flex text-lg items-center border rounded-b-lg p-4'><FaInstagram></FaInstagram><span className='ms-2'>Instagram</span></a>
            </div>

            <div className='my-4'>
                <h3 className="text-lg font-semibold">Q ZONE</h3>
                <img src={qzone1} alt="Q-Zone" />
                <img src={qzone2} alt="Q-Zone" />
                <img src={qzone3} alt="Q-Zone" />
            </div>

            <div className='my-4 text-center p-5 space-y-2' style={{backgroundImage:`url(${backImg})`, color:'white'}}>
                <h1 className="text-xl font-bold">Create An Amazing Newspaper</h1>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='btn btn-error' style={{color: 'white'}}>Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;