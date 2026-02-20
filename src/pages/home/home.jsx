import HeaderPage from "../../components/HeaderPage";
import About from "./About";
import Hero from "./hero";

function home() {
  return (
    <div>
      <HeaderPage />
      <Hero />
      <About />
    </div>
  );
}

export default home;
