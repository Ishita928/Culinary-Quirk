import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Recipe from './Recipe';
import BookTable from './BookTable';
import TechniquesDetails from './TechniquesDetails';
import "./Navbar.css";
import Logo from "../assets/logo.png";
import cookingTechniques from '../data';
import Techniques from './Techniques';
import Mealinfo from './Mealinfo';
import Phone from './Phone'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='flex text-white p-4 '>
        <div>
          <NavLink to="/">
            <img className='logo' src={Logo} width="99px" alt="Logo" />
          </NavLink>
        </div>
        <div className='hidden lg:flex gap-12'>
          <NavLink to="/">
            <button className="button-30" role="button">Home</button>
          </NavLink>
          <NavLink to="/About">
            <button className="button-30" role="button">About</button>
          </NavLink>
          <NavLink to="/Menu">
            <button className="button-30" role="button">Menu</button>
          </NavLink>
          <NavLink to="/Phone">
            <button className="button-30" role="button">Contact Us</button>
          </NavLink>
        </div>
        <div className='hidden lg:flex gap-6'>
          <NavLink to="/Recipe">
            <button className='bn30 ml-6'>Recipe Explorer</button>
          </NavLink>
          <NavLink to="/Techniques">
            <button className='bn30'>Cooking Techniques Guide</button>
          </NavLink>
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleDropdown} className='button-30'>Menu</button>
          {isOpen && (
            <div className="absolute right-4 top-16 bg-gray-800 text-white rounded-lg shadow-lg">
              <NavLink to="/" className="block px-4 py-2" onClick={toggleDropdown}>Home</NavLink>
              <NavLink to="/About" className="block px-4 py-2" onClick={toggleDropdown}>About</NavLink>
              <NavLink to="/Menu" className="block px-4 py-2" onClick={toggleDropdown}>Menu</NavLink>
              <NavLink to="/Contact" className="block px-4 py-2" onClick={toggleDropdown}>Contact Us</NavLink>
              <NavLink to="/Recipe" className="block px-4 py-2" onClick={toggleDropdown}>Recipe Explorer</NavLink>
              <NavLink to="/Techniques" className="block px-4 py-2" onClick={toggleDropdown}>Cooking Techniques Guide</NavLink>
            </div>
          )}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Phone" element={<Phone />} />
        <Route path="/book" element={<BookTable />} />
        <Route path="/Techniques" element={<Techniques />} />
        <Route 
          path="/technique/:title" 
          element={<TechniquesDetails cookingTechniques={cookingTechniques} />} 
        />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Recipe/:mealid" element={<Mealinfo />} />
        <Route path="/Contact" element={<Phone />} />
      </Routes>
    </div>
  );
};

export default Navbar;
