import Link from "next/link"
export default function ServicePage(){
    return(
       <nav>
       <div className="p-8 text-center ">
         <h1 className="text-4xl font-bold mb-4">This is Service Page</h1>
         <br/>
         <ul className="space-y-2">
         <Link href="/Service/App-Development" className="text-white hover:underline bg-rounded-5 bg-blue-800 p-4 rounded-lg max-w-lg text-center shadow-lg font-bold">Go To App Development Page</Link>
         <hr></hr>
         <br></br>
         <hr></hr>
         <Link href="/Service/Web-Development" className="text-white hover:underline bg-blue-800 p-4 rounded-lg max-w-lg text-center shadow-lg font-bold">Go To Web Development Page</Link>
         </ul>

         </div>
         </nav>
    )
}