export default function CardSimple({ children }) {
  return (
    <div className="rounded-3xl m-2 bg-white p-5 shadow-md">
      <div className="flex  items-center justify-between">
        <div>{children}</div>
      </div>
    </div>
  );
}
