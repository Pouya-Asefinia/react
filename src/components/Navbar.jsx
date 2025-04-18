import { IoCartOutline } from "react-icons/io5";

function Navbar() {
    return (
        <div className="border-b border-gray-300 py-2.5">
            <div className="flex justify-end">
                <button type="button" className=" py-2 px-4 border border-gray-300 hover:bg-gray-600 transition-all rounded-md cursor-pointer text-white flex gap-1">
                    <IoCartOutline className="size-5" />
                    سبد خرید
                </button>
            </div>
        </div>
    )
}

export default Navbar

