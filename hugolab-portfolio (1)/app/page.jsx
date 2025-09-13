'use client';
import dynamic from "next/dynamic";
import "./globals.css";

// Dynamically import to ensure 'use client' component renders properly
const Portfolio = dynamic(() => import("./Portfolio"), { ssr: false });

export default function Page() {
  return <Portfolio />;
}
