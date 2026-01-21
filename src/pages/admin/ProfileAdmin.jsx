import { useSelector } from "react-redux"
export const ProfileAdmin = () => {
    const{color}=useSelector((state)=>state.color)
  return (
       <div className="h-screen flex flex-col items-center justify-center  text-2xl text-yellow-200 font-bold"
       style={{backgroundColor:color}}
       >
Profile Admin</div>
  
  )
}
export default ProfileAdmin