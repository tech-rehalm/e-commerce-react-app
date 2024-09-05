import { useGetTopProductsQuery } from "../../redux/api/productApiSlice"
import Message from "../../components/Message"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import moment from "moment"
import {
    FaBox,
    FaClock,
    FaShoppingCart,
    FaStar,
    FaStore
} from "react-icons/fa"

export default function ProductCarousel() {
    const {data: products, isLoading, error} = useGetTopProductsQuery()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoPlay: true,
        autoPlaySpeed: 3000
    }
  return (
    <div className="mb-4 xl:block lg:block md:block">
        {isLoading? null : error? (
            (<Message variant="danger">
                {error?.data?.message || error.message}
            </Message>)
        ) : <Slider {...settings} className="xl:w-[50rem] lg:w-[50rem] md:w-[56rem] sm:w-[40rem] sm:block">
                {products.map(({image, _id, name, description, price, brand, createdAt, numReviews, rating, quantity, countInStock})=>(
                    <div key={_id}>
                        <img src={image} alt={name} className="w-full rounded-lg object-cover h-[30rem]" />

                        <div className="flex justify-between w-[20rem]">
                            <div className="one">
                                <h2>{name}</h2>
                                <p>$ {price}</p><br /> <br />
                                <p className="w-[25rem]">{description.substring(0, 180)}...</p>
                            </div>

                            <div className="flex justify-between w-[20rem]">
                                <div className="one">
                                    <h1 className="flex items-center mb-6">
                                        <FaStore className="mr-2 text-xl text-white"/> Brand: {brand}
                                    </h1>
                                    <h1 className="flex items-center mb-6">
                                        <FaClock className="mr-2 text-xl text-white"/> Added: {" "}{moment(createdAt).fromNow()}
                                    </h1>
                                    <h1 className="flex items-center mb-6">
                                        <FaStar className="mr-2 text-xl text-white"/> Reviews: {numReviews}
                                    </h1>
                                </div>

                                <div className="two">
                                    <h1 className="flex items-center mb-6">
                                        <FaStar className="mr-2 text-center w-[5rem]"/> Ratings: {" "} {Math.round(rating)}
                                    </h1>
                                    <h1 className="flex items-center mb-6">
                                        <FaShoppingCart className="mr-2 text-center w-[5rem]"/> Quantity: {" "} {quantity}
                                    </h1>
                                    <h1 className="flex items-center mb-6">
                                        <FaBox className="mr-2 text-center w-[9rem]"/> In stock: {" "} {countInStock}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>}
    </div>
  )
}