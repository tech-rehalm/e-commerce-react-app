import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"

export default function Ratings({value, text , color}) {
  const fullstars = Math.floor(value)
  const halfStars = value - fullstars > 0.5 ? 1 : 0
  const emptyStar = 5 - fullstars - halfStars
  return (
    <div className="flex items-center">

      {[...Array(fullstars)].map((_, index)=>(
        <FaStar key={index} className={`text-${color} ml-1`}/>
      ))}

      {halfStars === 1 && <FaStarHalfAlt className={`text-${color} ml-1`}/>}

      {[...Array(emptyStar)].map((_, index)=>(
        <FaRegStar  key={index} className={`text-${color} ml-1`}/>
      ))}

      <span className={`rating-text ml-[2rem] text-${color}`}>{text && text}</span>
      
    </div>
  )
}

Ratings.defaultProps = {
  color : "yellow-500"
}