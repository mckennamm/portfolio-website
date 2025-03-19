import { Link } from 'react-router-dom'

const Header = () => {
    console.log('Header component rendered')    

    return (
    <nav className="bg-sky-100 text-black mt-0 p-4 no-underlin w-screen font-alice ">
        <ul className="flex space-x-6">
        <li><Link to="/" className="text-black no-underline">Home</Link></li>
                <li><Link to="/" className="text-black no-underline font-Alice">About</Link></li>
                <li><Link to="/projects" className="text-black no-underline">Projects</Link></li>
                <li><Link to="/contact" className="text-black no-underline">Contact</Link></li>
        </ul>
    </nav>
    )
}

export default Header