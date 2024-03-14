import Image from "next/image";
import GetComics from "./Components/GetComics";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-[25px] md:p-10 lg:p-24">

        <GetComics/>

    </main>

  );
}
