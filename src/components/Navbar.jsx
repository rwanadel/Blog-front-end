import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div  className="navbar">
      <div className="flex-1 text-2xl">
        <Link style={{color:'#be7c68'}} to="/home" className='px-5 py-1  hover:transition-all font-mono font-bold text-4xl '>R/Blog</Link>
      </div>
      <div className="flex-none md:hidden">
        {/* Hamburger Icon */}
        <button 
          className="btn btn-square btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:items-center`}>
        <ul className="menu menu-horizontal px-1 text-xl gap-3">
          <li>
            <Link to="/login" className='px-5 py-1  hover:transition-all text-black text-lg'>Login</Link>
          </li>
          <li>
            <Link to="/sign-up" className='px-5 py-1  hover:transition-all text-black text-lg'>Register</Link>
          </li>
          {isLoggedIn && (
            <li>
              <button onClick={handleLogout} className='px-5 py-1 hover:transition-all text-black text-lg'>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
