import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function AdminMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState()
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div>
        <button className={`${isMenuOpen? "top-2 right-2" : "top-5 right-7"} bg-[#151515] p-2 fixed rounded-lg`} onClick={toggleMenu}>
            {isMenuOpen ?(
                <FaTimes color="white" />
            ) : (
                <div>
                    <div className="w-6 h-0.5 bg-white my-1"></div>
                    <div className="w-6 h-0.5 bg-white my-1"></div>
                    <div className="w-6 h-0.5 bg-white my-1"></div>
                </div>
            )}
        </button>

        {isMenuOpen &&(
            <section className="fixed right-7 top-5 bg-[#151515] ">
                <ul className="list-none mt-2">
                    <li>
                        <NavLink className=" py-2 px-3 block rounded-sm hover:bg-[#2E2D2D]" to="/admin/dashboard" style={({isActive}) => ({
                            color: isActive ?"greenyellow" : "white",
                        })}>Admin Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink className=" py-2 px-3 block rounded-sm hover:bg-[#2E2D2D]" to="/admin/categorylist" style={({isActive}) => ({
                            color: isActive ?"greenyellow" : "white",
                        })}>Create Category</NavLink>
                    </li>
                    <li>
                        <NavLink className=" py-2 px-3 block rounded-sm hover:bg-[#2E2D2D]" to="/admin/productlist" style={({isActive}) => ({
                            color: isActive ?"greenyellow" : "white",
                        })}>Create Product</NavLink>
                    </li>
                    <li>
                        <NavLink className=" py-2 px-3 block rounded-sm hover:bg-[#2E2D2D]" to="/admin/allproductslist" style={({isActive}) => ({
                            color: isActive ?"greenyellow" : "white",
                        })}>All Products</NavLink>
                    </li>
                    <li>
                        <NavLink className=" py-2 px-3 block rounded-sm hover:bg-[#2E2D2D]" to="/admin/userslist" style={({isActive}) => ({
                            color: isActive ?"greenyellow" : "white",
                        })}>Manage Users</NavLink>
                    </li>
                    <li>
                        <NavLink className=" py-2 px-3 block rounded-sm hover:bg-[#2E2D2D]" to="/admin/orderlist" style={({isActive}) => ({
                            color: isActive ?"greenyellow" : "white",
                        })}>Manage Orders</NavLink>
                    </li>
                </ul>
            </section>
        )}
    </div>
  )
}