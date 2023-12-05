import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return users.map((user) => ({
        params: { id: user.id.toString() }
    }));
}


async function getData(id) {
    await new Promise(resolve => setTimeout(resolve, 1000))

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        headers: {
            'next': {
                revalidate: 30 // 30 seconds
            }
        }
    });


    if (!res.ok) {
    notFound();
    }

    return res.json();
}

export default async function UserDetail({ params }) {
    const users = await getData(params.id)

    return (
        <div>
            <h1>  User data</h1>
            <h1>{ users.name }</h1>
        </div>
    )
}

