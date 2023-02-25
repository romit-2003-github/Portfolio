import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='Profile'>
                <nav className="nav">
                    <ul className="navigation">
                        <li className="navItems"><a href="/">Home</a></li>
                        <li className="navItems"><a href="/">About</a></li>
                        <li className="navItems"><a href="/">Skills</a></li>
                        <li className="navItems"><a href="/">Education</a></li>
                        <li className="navItems"><a href="/">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="bg">
                <img src={require('./bg.jpg')} alt="background" height={'250px'} />
            </div>

            <div className="profilePic">
                <img src={require('./profilePhoto.jpg')} alt="" />
            </div>

        </>
    )
}
export default Navbar;
