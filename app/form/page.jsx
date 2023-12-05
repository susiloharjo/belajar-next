import Card from "../components/Card";
import Form from "./Form";


export default function CreateForm() {
  return (
    <div>
    <h1 className="font-bold text-xl">Contoh Form</h1>
    <Card title="Create Form" onHover={() => console.log("Card hovered")}>
      <Form />
                           
      </Card>

      
    </div>
  )
}
