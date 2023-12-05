import Link from "next/link";

export default function NotFound() {
  return (
      <div className="">
          <h1>404 Not Found</h1>
          <p className="text-2xl text-blue-700 hover:text-blue-400">Go back to <Link href='/'>Home</Link> </p>
      </div>
  )
}
