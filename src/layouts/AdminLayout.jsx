
import SideBar from "../components/SideBar"
import { Outlet } from "react-router"
export const AdminLayout = () => {
  return (
    <div className=" d-flex">
    <SideBar/>
    <main style={{ flexGrow: 1 }}>
    <Outlet />
  </main>
    </div>
  )
}
export default AdminLayout;