import React, { useState } from "react";

import { IoCartOutline } from "react-icons/io5";

import {
    Dialog,
    DialogHeader,
    DialogBody,
    Button, 
  } from "@material-tailwind/react";

function Navbar() {
    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);


    return (
        <>
            <div className="border-b border-gray-300 py-2.5 mb-2">
                <div className="flex justify-end">
                    <Button onClick={handleOpen} type="button" className=" py-2 px-4 border border-gray-300 hover:bg-gray-600 transition-all rounded-md cursor-pointer text-white flex items-center gap-1">
                        <IoCartOutline className="size-5" />
                        سبد خرید
                    </Button>
                </div>
            </div>
            <Dialog open={open} handler={handleOpen} dir="rtl" size="lg" className="max-w-2xl mx-auto mt-2 card-bg border rounded-md">
                <div className="p-4">
                    <DialogHeader className="flex justify-end">
                        <h2>سبد خرید</h2>
                        <Button onClick={handleOpen} type="button" className=" py-2 px-4 border border-gray-300 hover:bg-gray-600 transition-all rounded-md cursor-pointer text-white flex items-center gap-1">
                            بستن
                        </Button>
                    </DialogHeader>
                    <DialogBody>محصول</DialogBody>
                </div>
            </Dialog>
        </>
    )
}

export default Navbar

