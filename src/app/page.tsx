import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FAQs from "@/components/sections/FAQs";
import Header from "@/components/sections/Header";
import Service from "@/components/sections/Service";
import TrustedBrand from "@/components/sections/TrustedBrand";
import Image from "next/image";
import { services_bg_image } from "../../public/assets/images";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Header />
      <TrustedBrand />
      <About />
      <section className="relative w-full max-w-full">
        <Image
          src={services_bg_image}
          alt="services bg image"
          className="absolute inset-0 -z-10 object-cover opacity-20 w-full h-full"
        />
        <Service />
      </section>
      <FAQs />
      <Contact />
    </main>
  );
}
