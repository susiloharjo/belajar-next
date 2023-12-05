import Card from "./components/Card";

export default function Home() {
  return (
    <main className="grid grid-cols-4">
      <Card title="Eko" onHover={() => console.log("Card hovered")}>
        This is the content of the card.
      </Card> 
      
      <Card title="Ardli" onHover={() => console.log("Card hovered")}>
        This is the content of the card.
      </Card> 

      <Card title="Ali" onHover={() => console.log("Card hovered")}>
        This is the content of the card.
      </Card> 

      <Card title="Ivan" onHover={() => console.log("Card hovered")}>
        This is the content of the card.
      </Card> 
    </main>
  )
}
