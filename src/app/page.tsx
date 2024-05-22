import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import Service from "@/components/sections/Service";
import TrustedBrand from "@/components/sections/TrustedBrand";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Header />
      <TrustedBrand />
      <About />
      <Service />
    </main>
  );
}
