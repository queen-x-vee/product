import Banner from "../banner";
import Careers from "./careers";
import CoreValues from "./coreValues";
import Faqs from "./faqs";
import Header from "./header";
import Stats from "./stats";
const About = () => {
  return (
    <div>
      <Header />
      <CoreValues/>
      <Stats/>
      <Faqs/>
      <Careers/>
      <Banner />

    </div>
  );
};

export default About;
