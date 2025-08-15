type ListNotes = {
  id: number;
  title: string;
  description: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
};

type Notes = {
  success: boolean;
  message: string;
  data: ListNotes[];
};
type DetailNotes = {
  success: boolean;
  message: string;
  data: ListNotes;
};



 
// Next.js will invalidate the cache when a
// request comes in, at most once every 3 seconds.
export const revalidate = 3;
 
export async function generateStaticParams() {
  const notes: Notes = await fetch('https://service.pace11.my.id/api/notes').then((res) =>
    res.json()
  )
  return notes.data.map((note) => ({
    id: String(note.id),
  }))
}
 
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const notes: DetailNotes = await fetch(`https://service.pace11.my.id/api/note/${id}`).then(
    (res) => res.json()
  )
  return (
    <main>
      <div className="border-b border-gray-300 mb-4">
      <h1>{notes.data.title}</h1>
      <p>{notes.data.description}</p>

      </div>
    </main>
  )
}