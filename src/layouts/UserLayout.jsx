import NavBar  from "../components/NavBar";
import { Outlet } from "react-router";
export const UserLayout = () => {
  return (
    <div >
        <NavBar/>
        
   <Outlet />
      
 

    </div>
  )
}
export default UserLayout;