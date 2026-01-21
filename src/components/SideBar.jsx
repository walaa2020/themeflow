
import { useDispatch } from "react-redux";
import { changeColor } from "../store/themSlice"
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";


const menuItems = [
  {
    icons: <IoHomeOutline size={30} />,
    label: 'Home',
    link: '/'
  },
  {
    icons: <FaUserCircle size={30} />,
    label: 'Profile',
    link: '/profile'
  },

  {
    icons: <CiSettings size={30} />,
    label: 'Setting',
    link: '/setting'
  },

]
const colors = ["red", "green", "blue", "black"];
export default function Sidebar() {

  const [open, setOpen] = useState(true)
  const dispatch = useDispatch();
  return (
    <nav className={`shadow-md h-screen pr-4 flex flex-col duration-500 bg-blue-600 text-white ${open ? 'w-60' : 'w-20'}`}>

      <div className=' pl-8 py-2 h-20 flex justify-between items-center'>
        {open ? (<h2 className=' rounded-md'  > Admin</h2>) : (<h2></h2>)}
        <div><MdMenuOpen size={34} className={` duration-500 cursor-pointer  ${!open && ' rotate-180'}`} onClick={() => setOpen(!open)} /></div>
      </div>


      <ul className='flex-1 '>
        {
          menuItems.map((item, index) => {
            return (
              <li key={index}
                onClick={() => {

                }}
                className={`${open && 'translate-x-0'}  py-3 my-2  hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group`}>
                <Nav.Link as={Link} to={item.link} >{item.icons}</Nav.Link>
                <Nav.Link as={Link} to={item.link} className={`${!open && 'w-0 translate-x-24'} translate-y-0.5 duration-500 overflow-hidden`}>{item.label}</Nav.Link>
                <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
                 w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                `}>{item.label}</p>

              </li>
            )
          })
        }
      </ul>
      <div className='flex  items-center gap-3  pr-15 pl-9 pb-6'>
        <Nav className="ms-auto d-flex gap-2">
          {colors.map((color) => (
            <Button
              key={color}
              onClick={() => dispatch(changeColor(color))}
              style={{
                backgroundColor: color,
                border: "none",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
              }}
            />


          ))}




        </Nav>
      </div>


    </nav>
  )
}