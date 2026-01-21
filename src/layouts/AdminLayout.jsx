
import SideBar from "../components/SideBar"
// import AdminPage from "../pages/AdminPage"
import { Outlet } from "react-router"
export const AdminLayout = () => {
  return (
    <div className=" d-flex">
    <SideBar/>
    <main className="flex-grow-1 ">
    <Outlet />
  </main>
    </div>
  )
}
export default AdminLayout;