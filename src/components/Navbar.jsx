import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center">
                    <img
                        src="/assets/icon.png"
                        alt="Logo"
                        width="50"
                        height="50"
                        className="d-inline-block align-text-top m-2"
                    />
                    <h3 className='m-2 text-light'>Anime Finder</h3>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;