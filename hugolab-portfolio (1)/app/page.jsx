'use client';
import dynamic from "next/dynamic";
import "./globals.css";

const MaquetteLaSeiche = dynamic(() => import("./MaquetteLaSeiche"), { ssr: false });

export default function Page() {
  return <MaquetteLaSeiche />;
}
