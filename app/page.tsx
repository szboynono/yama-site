import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Industries from "./components/Industries";
import Intro from "./components/Intro";
import SecondaryIntro from "./components/SecondaryIntro";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <SecondaryIntro />
      <Industries />
      <Footer />
    </>
  );
}
