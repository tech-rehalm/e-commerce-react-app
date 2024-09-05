import { useState } from "react"
import { Link } from "react-router-dom"
import Ratings from "./Ratings"
import { useGetTopProductsQuery } from "../../redux/api/productApiSlice"
import SmallProduct from "./SmallProduct"
import Loader from "../../components/Loader"

export default function ProductTabs({loadingProductReview, userInfo, submitHandler, rating, setRating, comment,setComment, product}) {

    const {data, isLoading} = useGetTopProductsQuery()
    const [activeTab, setActiveTab] = useState(1)

    const handleTabClick = (tabnumber)=>{
        setActiveTab(tabnumber)
    }
    if(isLoading){
        return <Loader/>
    }
  return (
    <div className="flex flex-col md:flex-row">
        <section className="mr-[5rem]">
            <div className={`flex p-4 cursor-pointer text-lg ${activeTab === 1? "font-bold" : ""}`} onClick={()=> handleTabClick(1)}>
                Write your review
            </div>

            <div className={`flex p-4 cursor-pointer text-lg ${activeTab === 2? "font-bold" : ""}`} onClick={()=> handleTabClick(2)}>
                All reviews
            </div>

            <div className={`flex p-4 cursor-pointer text-lg ${activeTab === 3? "font-bold" : ""}`} onClick={()=> handleTabClick(3)}>
                Related Products
            </div>
        </section>

        <section>
            {activeTab === 1&& (
                <div className="mt-4">
                    {userInfo ? (
                        <form onSubmit={submitHandler}>
                            <div className="my-2">
                                <label className="block text-xl mb-2">Rating</label>

                                <select id="rating" required value={rating}  onChange={(e)=> setRating(e.target.value)} className="p-2 border rounded-lg xl:w-[40rem] text-black">
                                    <option value="">Select</option>
                                    <option value="1">Inferior</option>
                                    <option value="2">Decent</option>
                                    <option value="3">Great</option>
                                    <option value="4">Excellent</option>
                                    <option value="5">Exceptional</option>
                                </select>
                            </div>

                            <div className="my-2">
                                <label htmlFor="comment" className="block text-xl mb-2">
                                    Comment
                                </label>
                                <textarea 
                                    name="comment"
                                    id="comment"
                                    rows={3}
                                    required
                                    value={comment}
                                    onChange={(e)=> setComment(e.target.value)}
                                    className="p-2 rounded-lg xl:w-[40rem] text-black"
                                    ></textarea>
                            </div>

                            <button type="submit" disabled={loadingProductReview  } className="bg-pink-600 text-white py-2 px-4 rounded-lg">Submit</button>
                        </form>
                    ): (
                        <p><Link to="/login">Sign  in</Link> to write a review</p>
                    )}
                </div>
            )}
        </section>

        <section>
            {activeTab === 2 &&(
                <div>
                    <div>{product.reviews.length === 0 && <p>No reviews</p>}</div>

                    <div>
                        {product.reviews.map((review)=>(
                            <div className="rounded-lg p-4 bg-[#1A1A1A] xl:ml-[2rem] sm:ml-[0rem] xl:w-[50rem] sm:w-[24rem] mb-5">
                                <div className="flex  justify-between">
                                    <strong className="text-[#B0B0B0]">{review.name}</strong>
                                    <p className="text-[#B0B0B0]">{review.createdAt.substring(0, 10)}</p>
                                </div>

                                <p className="my-4">{review.comment}</p>
                                <Ratings value={review.rating}/>
                            </div>
                        ))}
                    </div>
                </div>
                
            )}
        </section>

        <section>
            {activeTab === 3 &&(
                <section className="flex flex-wrap ml-[4rem]">
                    {!data? (
                        <Loader/>
                    ): (
                        data.map((product)=>(
                            <div key={product._id}>
                                <SmallProduct product={product}/>
                            </div>
                        ))
                    )}
                </section>
            )}
        </section>
    </div>
  )
}