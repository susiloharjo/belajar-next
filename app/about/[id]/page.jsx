async function getData(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id,)

    return res.json()

}

export default async function UserDetail({ params }) {
    const ticket = await getData(params.id)

    return (
        <div>
            <h1>  User data</h1>
            <h1>{ ticket.name }</h1>
        </div>
    )
}
