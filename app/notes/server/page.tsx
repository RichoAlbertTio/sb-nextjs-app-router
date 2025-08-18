// export default async function Notes() {
//   const notes = await fetch("https://service.pace11.my.id/api/notes").then(res => res.json());
//   return (
//     <>
//     {notes.data.map(el => (
//       <ul key={el.id}>
//         <li>{el.title}</li>
//       </ul>
//     ))}
//     </>
//   )
// }

import  CreateForm from "./create";


async function getNotes(): Promise<{ data: { id: number; title: string; description: string }[] }> {
  const res = await fetch("https://service.pace11.my.id/api/notes", {
    next: { revalidate: 60 }, // revalidate every 60 seconds
  });
  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }
  return res.json();
}

export default async function Notes() {
  const notes = await getNotes();
  return (
   <>
    <CreateForm />
    <div className="grid grid-cols-4 gap-4">
    {notes.data.map(({ id, title, description }: { id: number; title: string; description: string }) => (
      <div key={id} className="p-4 bg-white shadow-sm rounded-lg">
        <h1>{title}</h1>
        <h1>{description}</h1>
      </div>
    ))}
    </div>
   </>
  );
}
