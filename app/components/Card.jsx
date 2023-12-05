export default function Card({ title, children }) {
    return (
    <div className="m-3">
    <div className="bg-blue-600 p-4 rounded-tl-lg rounded-tr-lg shadow-sm ">
      {/* <header className="flex justify-between items-center border-b bg-white text-slate-700  h-full"> */}
        <h2 className="text-xl font-medium text-white">{title}</h2>
          {/* </header> */}
      </div>
      <div className="p-4 bg-white rounded-bl-lg rounded-br-lg">
          {children}
              
  </div>
     </div>
  )
}
