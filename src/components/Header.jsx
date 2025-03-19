import { Link } from 'react-router-dom'

const Header = () => {
    console.log('Header component rendered')    

    return (
    <nav className="bg-gray-900 text-white p-4 no-underlin w-200">
        <ul className="flex space-x-6">
        <li><Link to="/" className="text-white no-underline">Home</Link></li>
                <li><Link to="/" className="text-white no-underline">About</Link></li>
                <li><Link to="/" className="text-white no-underline">Projects</Link></li>
                <li><Link to="/" className="text-white no-underline">Contact</Link></li>
        </ul>
    </nav>
    )
}

export default Header