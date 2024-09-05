import { Link } from "react-router-dom";
import HeartIcon from "../../pages/Products/HeartIcon" 

export default function SmallProduct({product}) {
  return (
    <div className="w-[20rem] ml-[2rem] p-3">
        <div className="relative">
            <img src={product.image} alt={product.name} className="h-auto rounded" />
            <HeartIcon product={product}/>

            <div className="p-54">
                <Link to={`/product/${product._id}`}>
                    <h2 className="flex justify-between items-center">
                        <div>{product.name}</div>
                        <span className="bg-pink-100 text-pink-700 text-sm font-medium mr-2 px-3 py-1 rounded-full">
                            $ {product.price}
                        </span>
                    </h2>
                </Link>
            </div>
        </div>
    </div>
  )
}