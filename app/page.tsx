"use client";
import Image from "next/image";
import styles from "./page.module.css";
// import { useCount } from "@/context";
import { dataStore } from "@/store/dataStore";

export default function Home() {
  // const { count, setCount } = useCount();
  const { inc} = dataStore()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Welcome to the course</p>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      {/* <button onClick={() => setCount(count + 1)} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Count ++</button> */}
      <button onClick={() => inc()} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Count ++</button>
      </main>
      <footer className={styles.footer}>
    
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
