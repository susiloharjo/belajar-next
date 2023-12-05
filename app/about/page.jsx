import Link from "next/link"
import { Suspense } from "react"
import Loading from "../loading"

async function getData() {
    // test delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    return res.json()

}

export default async function About() {

    const users = await getData()
    return (
        <Suspense fallback={<Loading/>}>
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>{user.name} {user.email}
                    {/* <a href={`/about/${user.id}`}>Click Here</a> */}
              
                    <Link className="text-blue-600 hover:text-blue-200" href={`about/${user.id}`}> Click Here</Link>
                    </h1>
                </div>

            ))}
            </>
            </Suspense>
    )

}


