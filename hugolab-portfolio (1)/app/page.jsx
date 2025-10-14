import dynamic from "next/dynamic";

const MaquetteLaSeiche = dynamic(() => import("./MaquetteLaSeiche"), {
  ssr: false,
});
const MaquetteLaSeiche = dynamic(() => import("./MaquetteLaSeiche"), { ssr: false });

export default function Page() {
  return <MaquetteLaSeiche />;
}
