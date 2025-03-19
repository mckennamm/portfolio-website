import { Link } from 'react-router-dom'

const Header = () => {
    console.log('Header component rendered')    

    return (
    <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-6">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
    </nav>
    )
}

export default Header