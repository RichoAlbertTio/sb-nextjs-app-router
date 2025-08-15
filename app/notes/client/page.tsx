"use client";
import { useEffect, useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState<{ data: { id: number; title: string }[] }>({ data: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://service.pace11.my.id/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {notes.data.map((note) => (
        <ul key={note.id}>
          <li>{note.title}</li>
        </ul>
      ))}
    </>
  );
}

