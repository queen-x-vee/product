import Banner from "../banner";
import Header from "./layout/header";
import Community from "./layout/community";
import Consultancy from "./layout/consultancy";
import Event from "./layout/event";
import Recruitment from "./layout/recuitment";
import Talent from "./layout/talent";
import Merch from "./layout/merch";

const Services = () => {
  return (
    <div>
      <Header />
      <Merch/>
      <Recruitment/>
      <Event/>
      <Consultancy/>
      <Talent/>
      <Community/>
      <Banner />
    </div>
  );
};

export default Services;
