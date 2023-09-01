import Industries from "./components/Industries";
import Intro from "./components/Intro";
import SecondaryIntro from "./components/SecondaryIntro";
import Services from "./components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/home-banner.jpg" alt="" height={2000} width={2000}></Image>
      <Services />
      {/* <SecondaryIntro /> */}
      <Industries />
    </>
  );
}
