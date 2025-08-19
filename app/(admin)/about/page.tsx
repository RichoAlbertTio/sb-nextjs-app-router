"use client";
// import {useCount} from "@/context";
import {dataStore} from "@/store/dataStore";

export default function About() {
  // const { count, setCount } = useCount();
  const { inc } = dataStore();
  return (
    <div>
      <h1>About Page</h1>
      {/* <button onClick={() => setCount(count + 1)} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Count ++</button> */}
      <button onClick={() => inc()} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Count ++</button>
    </div>
  );
}