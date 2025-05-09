import { useContext } from 'react';
import {
    Card,
    CardBody,
    Button
  } from "@material-tailwind/react";

  import { CartContext } from '../context/cartCntext'
 
function ProductItem({ product }) {
    const cart = useContext(CartContext) 

    return (
        <Card className="mt-5 p-4 card-bg">
            <CardBody>
                <img
                    src={product.image}
                    height='200px'
                    alt="" 
                    style={{objectFit: 'cover'}}
                />
                <h2 className="text-white pt-4 text-right">{product.title}</h2>
                <p className="text-white text-right">{product.price}</p>
                <Button onClick={() =>cart.addItemToCart(product.id)} className="outline p-2 rounded-md hover:bg-gray-600 text-white">افزودن به سبد خرید</Button>
            </CardBody>
        </Card>
    )
}

export default ProductItem