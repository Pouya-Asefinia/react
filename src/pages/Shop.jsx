import ProductItem from "../components/Productitem"
import { productList } from "../data/items"


function Shop() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productList.map((item) => (
                <div className="flex text-center" key={item.id}>
                    <ProductItem product={item}></ProductItem>
                </div>
            ))}
        </div>
    )
}

export default Shop