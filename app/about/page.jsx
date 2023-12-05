import Link from "next/link"
import { Suspense } from "react"
import Loading from "../loading"
import Card from "../components/Card";


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
        
            <main className="grid grid-cols-4">
                        
                    {users.map((user) => (
                        // <div key={user.id}>
                        //     <h1>{user.name} {user.email}
                        //     {/* <a href={`/about/${user.id}`}>Click Here</a> */}
                    
                        //     <Link className="text-blue-600 hover:text-blue-200" href={`about/${user.id}`}> Click Here</Link>
                        //     </h1>
                        // </div>
                        <Card key={user.id} title={`${user.name}`} onHover={() => console.log("Card hovered")}>
                            <h1>{ user.name}</h1>
                            <h1>{user.email}</h1>
                            <br />
                            <Link href={`about/${user.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Here</Link>
                           
                        </Card>

                    ))}
            </main> 
            
                
            </Suspense>
    )

}


