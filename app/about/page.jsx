import Link from "next/link"

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    return res.json()

}

export default async function About() {

    const users = await getData()
    return (
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>{user.name} {user.email}
                    {/* <a href={`/about/${user.id}`}>Click Here</a> */}
              
                    <Link className="text-blue-600 hover:text-blue-200" href={`about/${user.id}`} passHref> Click Here</Link>
                    </h1>
                </div>

            ))}
        </>
    )

}


