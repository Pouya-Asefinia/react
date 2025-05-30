import { useContext } from "react"

import { Button } from "@material-tailwind/react"

import {getProductData} from '../data/items'
import { CartContext } from '../context/cartCntext'

function CartProduct({ id, quantity }) {
    const cart = useContext(CartContext)

    const productData = getProductData( id )

    return (
        <>
            <div className="my-4">
                <p>{productData.title}</p>
                <p>تعداد: {quantity}</p>
                <p>قیمت: {quantity * productData.price}</p>
                <Button 
                className=" mt-2 py-2 px-4 border border-gray-300 hover:bg-gray-600 rounded-md" 
                onClick={() => cart.deleteFromCart(id)}
                >
                    حذف
                </Button>
            </div>
        </>
    )
}

export default CartProduct