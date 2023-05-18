import './Navbar.css';


function NavBar () {
    return ( 
        <header className="header">
            <div className="header__logo">
                <h2 className="logo__text">Logo</h2>
            </div>

            <nav className="nav">
               <ul>
               <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
               </ul>
                <a href="#">Login</a>
            </nav>
            
        </header>
     );
} 
  
export default NavBar;