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



async function getNotes(): Promise<{ data: { id: number; title: string }[] }> {
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
    {notes.data.map(({ id, title }: { id: number; title: string }) => (
      <ul key={id}>
        <li>{title}</li>
      </ul>
    ))}
    </>
  );
}
