import { useSelector } from "react-redux"
export const Home = () => {
    const{color}=useSelector((state)=>state.color)
  return (
       <div className="h-screen flex flex-col items-center justify-center  text-2xl text-yellow-200 font-bold"
       style={{backgroundColor:color}}
       >
Home</div>
  
  )
}
export default Home