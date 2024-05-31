import React from 'react';
import Header from "../../components/Header/Header";
import {CorporateSite} from "../../components/CorporateSite/CorporateSite";
import ExclusiveSites from "../../components/ExclusiveSites/ExclusiveSites";
import HighPerfomanceSite from "../../components/HighPerfomanceSite/HighPerfomanceSite";
import TechSupport from "../../components/TechSupport/TechSupport";
import {Results} from "../../components/Results/Results";
import {Slider} from "../../components/Slider/Slider";
import WelcomeBlock from '../../components/WelcomeBlock/Welcome'
import Leads from '../../components/LeadGeneration/LeadGeneration'
import Footer from '../../components/footer/footer'
import StagesOfWork from "../../components/StagesOfWork/StagesOfWork";

const Home = () => {
    return (
        <div>
            <Header />
            <WelcomeBlock />
            <CorporateSite/>
            <ExclusiveSites />
            <HighPerfomanceSite />
            <TechSupport />
            <Results />
            <Slider />
            <StagesOfWork />
            <Leads />
            <Footer />
        </div>
    );
};

export default Home;
