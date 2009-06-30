import React, { useContext, useEffect, Fragment } from "react";
import Banner from "../Banner.js/Banner";
import Features from "../Features/Features";
import Stat from "../Statistiques/Statistiques";
import GlobalContext from "../../context/global/globalContext";
import DefaultJobsSection from "../JobsSecton/JobsSection";
import MembersCard from "../../component/MembersCard/MembersCard";
import Contact from "../../component/Contact/Contact";
import Footer from "../../component/Footer/Footer";
import { connect } from "react-redux";
import { changeTestOne } from "../../actions/action1";
const Home = props => {
  const { getDefaultJobs } = useContext(GlobalContext);
  // getDefaultJobs();
  const btnClicked = () => {
    props.changeTestOne;
  };
  return (
    <Fragment>
      <button onClick={btnClicked}>cickkkkkkkkkkkkkkkk </button>
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
const mapStateToProps = state => {
  return {
    call: state.state1
  };
};
// const actions = (dispatch)=>{
//   ()
// }
export default connect(mapStateToProps, { changeTestOne })(Home);
