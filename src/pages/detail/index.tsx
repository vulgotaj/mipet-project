import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { type ProductProps } from '../home';
import { BsCartPlus } from 'react-icons/bs';

import { api } from '../../services/api';
import { CartContext } from '../../contexts/CartContext';
import toast from 'react-hot-toast';

export function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductProps>()
    const { addItemCart } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function getProduct() {
            const response = await api.get(`/products/${id}`)
            setProduct(response.data);
        }

        getProduct();
    }, [id])

    function handleAddCartItem() {
        toast.success('Produto adicionado ao carrinho!');
        addItemCart(product as ProductProps);
        navigate('/cart');
    }

    return (
        <div>
            {product && (
                <div className="w-full max-w-lg  mx-auto mt-50 flex flex-col items-center justify-center gap-10 border-gray-100 border-2 rounded-md">
                    
                    <img
                     className="rounded-lg max-h-70 mb-2 mt-10"
                     src= {product?.cover}
                     alt= {product?.title}
                    />

                    <p className="font-medium mt-1 mb-2 text-xl">{product?.title}</p>

                    <div className="flex gap-20 items-center mb-10">

                        <strong className="text-blue-400 text-2xl">
                            {product?.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </strong>

                        <button onClick={handleAddCartItem} className="bg-gray-800 p-2 px-5 rounded cursor-pointer">
                            <BsCartPlus color="#fff" size={24}/>
                        </button>

                    </div>
                </div>
            )}
        </div>
    )
}