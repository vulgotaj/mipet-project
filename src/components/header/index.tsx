import { Link } from 'react-router';
import { FiShoppingCart } from 'react-icons/fi';
import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

export function Header() {
    const { cartAmount } = useContext(CartContext);

    return (
        <header className="w-full px-2 bg-black">
            <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
                <Link to="/" className="text-2xl">
                    <span className="text-white font-medium">Mi</span><span className="text-blue-400 font-bold">
                        Pet
                    </span>
                </Link>

                <Link to="/cart">
                    <h2 className="relative cursor-pointer">
                        <FiShoppingCart size={24} color="#FFF"/>
                        {cartAmount > 0 && (
                            <span className="absolute -top-3 -right-3 px-2.5 bg-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                                {cartAmount}
                            </span>
                        )}
                    </h2>
                </Link>
            </nav>
        </header>
    )
}