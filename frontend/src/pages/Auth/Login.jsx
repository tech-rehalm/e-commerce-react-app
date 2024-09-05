import { useState, useEffect } from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useLoginMutation } from "../../redux/api/usersSlice"
import { setCredentials } from "../../redux/features/auth/authSlice"
import { toast } from "react-toastify"
import Loader from "../../components/Loader"

export default function Login() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, {isLoading}] = useLoginMutation()
    const {userInfo} = useSelector(state => state.auth)
    const {search} = useLocation()
    const sp = new URLSearchParams(search)
    const redirect = sp.get("redirect") || "/"
    useEffect(()=>{
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, redirect, userInfo])

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const res = await login({ email, password }).unwrap();
          console.log(res);
          dispatch(setCredentials({ ...res }));
          navigate(redirect);
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      };

  return (
    <div>
        <section className="pl-[10rem] flex flex-wrap">
            <div className="mr-[10rem] mt-[5rem]">
                <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
                <form onSubmit={submitHandler} className="container w-[40rem]">
                    <div className="my-[2rem]">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
                        <input type="email" id="email"  className="mt-1 p-2 rounded w-full" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="my-[2rem]">
                        <label htmlFor="password" className="block text-sm font-medium text-white">password</label>
                        <input type="password" id="password"  className="mt-1 p-2 rounded w-full" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" disabled={isLoading} className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]">
                        {isLoading ? "Signing In ..." : "Sign In"}
                    </button>
                    {isLoading && <Loader/>}
                </form>

                <div className="mt-4">
                    <p className="text-white">
                        New Customer? {" "}
                        <Link className="text-pink-500 hover:underline" to={redirect? `/register?redirect=${redirect}` : "/redirect"} >Register</Link>
                    </p>
                </div>
            </div>

        </section>
    </div>
  )
}