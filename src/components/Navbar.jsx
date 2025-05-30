import { useState, useContext } from "react";

import { IoCartOutline } from "react-icons/io5";

import { CartContext } from '../context/cartCntext'

import CartProduct from "./CartProduct";

import {
    Dialog,
    DialogHeader,
    DialogBody,
    Button, 
} from "@material-tailwind/react";

function Navbar() {
    const cart = useContext(CartContext)

    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);


    return (
        <>
            <Dialog open={open} handler={handleOpen} dir="rtl" size="lg" className="w-80 mx-auto mt-2 card-bg border rounded-md">
                <div className="p-4">
                    <DialogBody>
                        { productCount > 0 ? (
                            <>
                               <h3 className="mb-4">سبد خرید</h3> 
                               {cart.items.map((item) => (
                                <CartProduct key={item.id} id={item.id} quantity={item.quantity}></CartProduct>
                               )) }
                               <h3>مجموع قیمت: {cart.getTotalAmount()}</h3>
                            </>
                        ) : (
                            <h3>سبد خرید خالی است</h3>
                        ) }
                        <Button onClick={handleOpen} type="button" className=" mx-auto mt-6 py-2 px-4 border border-gray-300 hover:bg-gray-600 transition-all rounded-md cursor-pointer text-white flex items-center gap-1">
                            بستن
                        </Button>
                    </DialogBody>
                </div>
            </Dialog>
            <div className="border-b border-gray-300 py-2.5 mb-2">
                <div className="flex justify-end">
                    <Button onClick={handleOpen} type="button" className=" py-2 px-4 border border-gray-300 hover:bg-gray-600 transition-all rounded-md cursor-pointer text-white flex items-center gap-1">
                        <span className="text-sm">({productCount})</span> 
                        سبد خرید 
                        <IoCartOutline className="size-5" />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Navbar

