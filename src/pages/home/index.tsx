import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
import { BsCartPlus } from 'react-icons/bs';
import { api } from '../../services/api';
import { CartContext } from '../../contexts/CartContext';

export interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home() {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const { addItemCart } = useContext(CartContext);

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products');
            setProducts(response.data);
        }

        getProducts();
    }, [])

    function handleAddCartItem(product: ProductProps) {
        addItemCart(product);
    }

    return (
        <main className="w-full max-w-7xl px-5 mx-auto py-10">
            <h1 className="text-2xl font-medium text-center mb-10">Nossos produtos!</h1>

            <section className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-5">
                {products.map((product) => (
                    <div key={product.id} className="w-full p-5 shadow-md rounded-md flex flex-col items-center gap-2">

                        <Link to={`/detail/${product.id}`}>

                            <img
                            className="w-full rounded-lg max-h-70 mb-2"
                            src= {product.cover}   // IMAGEM DO PRODUTO
                            alt= {product.title}
                            />

                            <h2 className="font-medium mt-1 mb-2">{product.title}</h2>  {/* TÍTULO DO PRODUTO */}

                        </Link>

                        <div className="w-full flex items-center justify-between">

                            <strong className="text-lg text-blue-400">
                                {product.price.toLocaleString('pt-BR', {
                                    style: 'currency',                       // PREÇO DO PRODUTO
                                    currency: 'BRL'
                                })}
                            </strong>
                            
                            <button onClick={ () => handleAddCartItem(product) }className="w-10 h-8 rounded-md bg-gray-800 flex items-center justify-center cursor-pointer">
                                <BsCartPlus size={20} color="#FFF"/>                   {/* BOTÃO CARRINHO */}
                            </button>

                        </div> {/* FECHAMENTO DA AREA DE PREÇOS / CARRINHO */}

                    </div> // FECHAMENTO DO CARD
                ))}
            </section> {/* FECHAMENTO SEÇÃO DE PRODUTOS */}
        </main>
    )
}