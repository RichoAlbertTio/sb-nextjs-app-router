// testing data dynamic
// export default function BlogDetail({params}: {params: Promise<{ id: string }>}) {
//   // console.log('data =>', params);
//   return <div>Blog Detail Page</div>
// }



// ini adalah server component
// export default async function BlogDetail({params}: {params: Promise<{ id: string }>}) {
//   const id = (await params).id;
//   return <div>Blog Detail Page : {id}</div>
// }



// ini adalah client component
// "use client";
// import { useParams } from "next/navigation";
// export default function BlogDetail() {
//   const params = useParams()
//   return <div>Blog Detail Page : {params.id}</div>
// }



// ini adalah client component and search
"use client";
import { useParams, useSearchParams } from "next/navigation";
export default function BlogDetail() {
  const params = useParams()
  const search = useSearchParams()
  // const user = search.get('user')
  // const query = search.getAll('user')
  const query = Object.fromEntries(search.entries());
  console.log('user', query);
  // http://localhost:3000/blog/richo?user=programmer&age=22

  // console.log('query =>', query);

  // console.log('params =>', params);
  // console.log('search =>', search);
  // http://localhost:3000/blog/richo?user=programmer
  // return <div>Blog Detail Page {`dynamic: ${params.id}, query param: ${user}`}</div>
  return <div>Blog Detail Page {`dynamic: ${params.id}, query user: ${query.user}, query age: ${query.age}`}</div>
}