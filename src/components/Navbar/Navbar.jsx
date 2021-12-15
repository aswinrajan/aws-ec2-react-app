import './Navbar.scss'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a className="logo" href='#hero'>About Me</a>
                    <a href='#projects'>Projects</a>
                </div>
                <div className='right'>
                  <a href='#contact'>Contact Me</a>
                </div>
            </div>
        </div>

    )
}
