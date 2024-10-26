
import Link from "next/link"

export default function Home() {
  return(
    <header>
    <nav className="flex justify-center space-x-4">
    <div>
      <h1 className="text-5xl text-center mb-4">
        This is Home Page
      </h1>
      <br/>
      <br/>
      <Link href="/About" className="text-3xl font-bold hover:underline bg-blue-400 p-8 rounded-lg max-w-lg text-center shadow-lg ">
      Go to About Page
      </Link>
      <br/>
      <br/>
      <br/>
      <br/>
      <Link href="/ContactUs" className=" text-3xl font-bold hover:underline bg-blue-400 p-8 rounded-lg max-w-lg text-center shadow-lg">
      Go to Contact Us Page
      </Link>
      <br/>
      <br/>
      <br/>
      <br/>
      <Link href="/Service" className="text-3xl font-bold hover:underline bg-blue-400 p-8 rounded-lg max-w-lg text-center shadow-lg">
      Go to Service Page
      </Link>
      
    </div>
    </nav>
    </header>
  )
}