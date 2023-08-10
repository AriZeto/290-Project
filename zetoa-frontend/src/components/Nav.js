import React from 'react';
import { Link } from 'react-router-dom';

// Creating function 'Nav()' that returns a nav block with link to for each page.
function Nav() {
    return <nav className="Page Nav">
    <Link to="/">Homepage</Link>
    <Link to="/log">Logging Recipes</Link>
    <Link to="../topic">Topics</Link>
    {/* <Link to="../contact">Contact</Link> */}
    <Link to="../gallery">Gallery</Link>
    <Link to="../order">Order</Link>
    <Link to="../staff">Staff</Link>
    </nav>
}
export default Nav;