"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Form() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const user = {
            name, email
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })

        if (response.status === 201) {
            router.refresh()
            router.push('/about')
        }

        console.log(response)

    }

    return (
      <div className="w-1/2 items-center bg-white p-10 rounded-lg m-5">
        <form onSubmit={handleSubmit} className="w-full md:w-1/2">
          <div className="flex flex-col py-5 space-y-2">
            <h1 className="font-bold text-lg">Form Login</h1>
            <label className="flex items-center">
              <span className="w-20 mr-2">Name:</span>
              <input
                className="border border-gray-300 rounded-md p-2 flex-grow"
                required
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>

            <label className="flex items-center">
              <span className="w-20 mr-2">Email:</span>
              <input
                className="border border-gray-300 rounded-md p-2 flex-grow"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
            disabled={isLoading}
          >
            {isLoading && <span>Adding...</span>}
            {!isLoading && <span>Submit</span>}
          </button>
        </form>
      </div>
    );
}
