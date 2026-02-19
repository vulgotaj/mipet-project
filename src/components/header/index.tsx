import { Link } from 'react-router';
import { FiShoppingCart } from 'react-icons/fi';

export function Header() {
    return (
        <header className="w-full px-2 bg-black">
            <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
                <Link to="/" className="text-2xl">
                    <span className="text-white font-medium">Mi</span><span className="text-blue-400 font-bold">
                        Pet
                    </span>
                </Link>

                <h2 className="relative cursor-pointer">
                    <FiShoppingCart size={24} color="#FFF"/>
                    <span className="absolute -top-3 -right-3 px-2.5 bg-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                        2
                    </span>
                </h2>
            </nav>
        </header>
    )
}