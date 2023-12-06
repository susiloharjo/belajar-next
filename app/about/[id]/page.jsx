import { notFound } from "next/navigation";
import { Suspense } from 'react';
import Loading from '../../loading';
import Card from '../../components/Card';

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return users.map((user) => ({
    params: { id: user.id.toString() },
  }));
}

async function getData(id) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function UserDetail({ params }) {
  const users = await getData(params.id);

  return (
    <Suspense fallback={<Loading />}>
      <Card title="User Detail">
        <div>
          <h1 className="font-bold text-xl">{users.name}</h1>
          <h1>{users.email}</h1>
        </div>
      </Card>
    </Suspense>
  );
}

