import { RouterProvider ,createHashRouter} from 'react-router';
import AdminLayout from"../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import { Home,Profile,Setting } from '../pages/user';
import { HomeAdmin,ProfileAdmin,SettingAdmin } from '../pages/admin';
const router=createHashRouter(
  [
    {
    path:"/admin",
    element:<AdminLayout/>,
    children:[{
    index:true,
    element:<HomeAdmin/>
  },
    {
    path:"profile",
    element:<ProfileAdmin/>
  },
   {
    path:"setting",
    element:<SettingAdmin/>
  },
   ]},
    {
    path:"/",
    element:<UserLayout/>,
    children:[{
    index:true,
    element:<Home/>
  },
    {
    path:"profile",
    element:<Profile/>
  },
   {
    path:"setting",
    element:<Setting/>
  },
   ]},
  ]
);
export const AppRouterProvider = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default AppRouterProvider