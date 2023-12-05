import Link from "next/link"


export default function Navbar() {
  return (
    <nav>
        {/* <h1>Welcome Susiloharjo's Blog</h1>
        <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        </ul> */}
          
    <div className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="text-white"><Link href="/">Home</Link></span>
        <span className="text-white"><Link href="/about">About</Link></span>
      </div>
      <button className="bg-green-500 text-white p-2 rounded">Login</button>
          </div>
          
    </nav>
  )
}
