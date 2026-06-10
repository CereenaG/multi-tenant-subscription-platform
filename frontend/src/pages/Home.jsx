import Login from './Login.jsx'
import SignUp from './SignUp.jsx';
import { Link } from 'react-router-dom';
import './Login.css'
function Home(){

    return(
        <>
        <header>
            <nav className='flex justify-evenly mt-3 tracking-wider uppercase'>
                <a className='border-[#839958] border-2 p-1 rounded-sm'>features</a>
                <a className='border-[#839958] border-2 p-1 rounded-sm'>pricing</a>
                <a className='me-40 border-[#839958] border-2 p-1 rounded-sm'>about</a>
                
                <Link to="/login" className='border-[#839958] border-2 p-1 rounded-sm'>sign in</Link>
                
                <Link to="/signup" className='bg-[#839958] uppercase
    tracking-wider text-[#f7f4d5] p-1 rounded-sm'>sign up</Link>
            </nav>
        </header>
        </>
    );
}
export default Home;