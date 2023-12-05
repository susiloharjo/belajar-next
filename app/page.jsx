import Card from "./components/Card";

export default function Home() {
  return (
    <main >
      <Card title="Welcome" onHover={() => console.log("Card hovered")}>
        <h1 className="text-2xl">Catatan belajar next js</h1>
        <ul>
          <li>Belajar fetch api</li>
          <li>Belajar form</li>
          <li>Belajar membuat grafik</li>
        </ul>
      </Card> 
      
    
    </main>
  )
}
