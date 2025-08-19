"use client";

import Link from "next/link";
// import { useCount } from "@/context";
import { dataStore } from "@/store/dataStore";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  //  setter dan getter dari context
  // const { count } = useCount();
  const { count } = dataStore((state) => state);

  return (
    <>
     
      <div className={`flex flex-col min-h-screen`}>
        <header className="bg-blue-600 text-white p-4">
          <div className="cointainer mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Richo Albert Tio</h1>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/notes/client">Notes</Link>
              </li>
             
            </ul>
          </div>
        </header>
        <main className="flex-1 container mx-auto p-4">
          <div>
            <p>{`Count: ${count}`}</p>
          </div>
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Personal Website</p>
        </footer>

        {/* cara akses style global */}
        {/* style global ini di render sama misal header = header */}
        {/* <div className="header">Header</div> */}
        {/* cara akses style module */}
        {/* cara akses id namun tidak di sarankan */}
        {/* <div id={styles.main}>{children}</div> */}
        {/* cara akses style module */}
        {/* style module ini di render sama unique footer = akan du generate berbeda namanya */}
        {/* <div className={styles.footer}>Footer</div> */}
      </div>
    </>
  );
}
