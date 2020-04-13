import React, { useContext, useEffect, Fragment } from "react";
import Banner from "../Banner.js/Banner";
import Features from "../Features/Features";
import Stat from "../Statistiques/Statistiques";
import GlobalContext from "../../context/global/globalContext";
import DefaultJobsSection from "../JobsSecton/JobsSection";
import MembersCard from "../../component/MembersCard/MembersCard";
import Contact from "../../component/Contact/Contact";
import Footer from "../../component/Footer/Footer";
const Home = props => {
  console.log(props);
  const { getDefaultJobs } = useContext(GlobalContext);
  useEffect(() => getDefaultJobs(), []);
  return (
    <Fragment>
      <Banner />
      <Features />
      <Stat />
      <DefaultJobsSection />
      <MembersCard />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
