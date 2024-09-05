import { useEffect, useId, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import Loader from "../../components/Loader"
import { setCredentials } from "../../redux/features/auth/authSlice"
import { Link } from "react-router-dom"
import { useProfileMutation } from "../../redux/api/usersSlice"

export default function Profile() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const userInfo = useSelector((state => state.auth))
    const [updateProfile, {isLoading: loadingUpdateProfile}] = useProfileMutation()

    const dispatch = useDispatch()

    useEffect(()=>{
        setUsername(userInfo.username)
        setEmail(userInfo.email)
    }, [userInfo.username, userInfo.email])

    const submitHandler = async(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error("Passwords do not match")
        }else{
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    username,
                    email,
                    password
                }).unwrap()
                dispatch(setCredentials({...res}))
                toast.success("Profile updated sucessfully")
            } catch (error) {
                toast.error(error?.data?.message || error.message)
            }
        }
    }
    
  return (
    <div className="container mx-auto p-4 mt-[10rem]">
        <div className="flex justify-center align-center md:flex md:space-x-4">
           <div className="md:w-1/3">
           <h2 className="text-2xl text-white font-semibold mb-">Update Profile</h2>
           
            <form onSubmit={submitHandler} >
                <div className="mb-4">
                    <label  className="block text-white mb-2">Name</label>
                    <input type="text" placeholder="Enter name" className="form-input p-4 rounded-sm w-full" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label  className="block text-white mb-2">Email</label>
                    <input type="email" placeholder="Enter email" className="form-input p-4 rounded-sm w-full" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label  className="block text-white mb-2">Password</label>
                    <input type="password" placeholder="Enter pasword" className="form-input p-4 rounded-sm w-full" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label  className="block text-white mb-2">Confirm Password</label>
                    <input type="text" placeholder="Confirm password" className="form-input p-4 rounded-sm w-full" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
                </div>

                <button type="submit" className="bbg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">Update</button>

                <Link to="/user-orders" className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">My Orders</Link>

            </form></div>
        </div>
    </div>
  )
}