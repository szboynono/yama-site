import Industries from "./components/Industries";
import Services from "./components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/home-banner.jpg" alt="" height={2000} width={2000}></Image>
      <Services />
      <Industries />
    </>
  );
}
