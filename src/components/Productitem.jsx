import { useContext } from 'react';
import {
    Card,
    CardBody,
    ButtonGroup,
    Button
  } from "@material-tailwind/react";

  import { FaTrashAlt } from "react-icons/fa";

  import { CartContext } from '../context/cartCntext'
 
function ProductItem({ product }) {
    const cart = useContext(CartContext) 

    const productQuantity = cart.getProductQuantity(product.id) 

    return (
        <Card className="mt-8 mb-4 p-4 card-bg rounded-lg">
            <CardBody>
                <img
                    src={product.image}
                    height='200px'
                    alt="" 
                    style={{objectFit: 'cover', borderRadius: '8px'}}
                />
                <h2 className="text-white pt-4 text-right">{product.title}</h2>
                <p className="text-white pt-4 text-right" dir='rtl'>{product.price} تومان</p>
                {productQuantity > 0 ? (
                    <>
                        <div className="flex justify-around items-center mt-4">
                            <div className=''>
                                تعداد : {productQuantity}
                            </div>
                            <ButtonGroup className='gap-4'>
                                <button 
                                    className="outline size-8 flex items-center justify-center rounded-md hover:bg-gray-600 text-white transition-all"
                                    onClick={() => cart.addItemToCart(product.id)}
                                    >
                                    +
                                </button>
                                <button 
                                    className="outline size-8 flex items-center justify-center rounded-md hover:bg-gray-600 text-white transition-all"
                                    onClick={() => cart.removeItemFromCart(product.id)}
                                    >
                                    -
                                </button>
                            </ButtonGroup>
                        </div>
                        <button 
                            className="outline p-2 mt-4 rounded-md hover:bg-white hover:text-black text-white transition-all"
                            onClick={() => cart.deleteFromCart(product.id)}
                            >
                            حذف از سبد خرید
                        </button>
                    </>
                ) : (
                <Button 
                    className="outline p-2 mt-4 rounded-md hover:bg-gray-600 text-white"
                    onClick={() =>cart.addItemToCart(product.id)}
                >
                    افزودن به سبد خرید
                </Button>  
                )}
            </CardBody>
        </Card>
    )
}

export default ProductItem