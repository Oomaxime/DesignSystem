import { Outlet } from "react-router-dom"
import img from "../assets/images/illustre_auth_form.png";

export default function FormLayout() {
  return (
    <div>
      <aside >
        <Outlet/>
      </aside>
      <aside>
        <img src={img}/>
      </aside>
    </div>
  )
}

// {
//   <div className="flex flex-col-reverse">
//       <aside className="flex items-center justify-center h-screen">
//         <Outlet/>
//       </aside>
//       <aside className="p-5">
//         <img src={img} className="rounded-lg"/>
//       </aside>
//     </div>
// }


// {/* <div className="block inline-flex w-full h-screen">
//       <aside className="flex w-1/2 items-center justify-center">
//         <Outlet/>
//       </aside>
//       <aside className="w-1/2 p-2">
//         <img src={img} className="rounded-lg h-full object-none h-screen w-fit"/>
//       </aside>
//     </div> */}