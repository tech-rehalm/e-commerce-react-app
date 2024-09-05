import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
    saveShippingAddress,
    savePaymentMethod
} from "../../redux/features/cart/cartSlice"

export default function Shipping() {

    const cart = useSelector((state)=> state.cart)
    const {shippingAddress} = cart
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [paymentMethod, setPaymentMethod] = useState("PayPal")
    const [address, setAddress] =useState(shippingAddress.address || "")
    const [city, setCity] = useState(shippingAddress.city || "")
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "")
    const [country, setCountry] = useState(shippingAddress.country || "")


    //payment
    useEffect(()=>{
        if(!shippingAddress.address){
            navigate("/shipping")
        }
    }, [navigate, shippingAddress])
  return (
    <div>Shipping</div>
  )
}