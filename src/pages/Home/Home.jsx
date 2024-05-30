import React from 'react';
import Header from "../../components/Header/Header";
import {CorporateSite} from "../../components/CorporateSite/CorporateSite";
import ExclusiveSites from "../../components/ ExclusiveSites/ExclusiveSites";
import HighPerfomanceSite from "../../components/HighPerfomanceSite/HighPerfomanceSite";
import TechSupport from "../../components/TechSupport/TechSupport";
import {Results} from "../../components/Results/Results";
import {Slider} from "../../components/Slider/Slider";



const Home = () => {
    return (
        <div>
            <Header />
            <CorporateSite/>
            <ExclusiveSites />
            <HighPerfomanceSite />
            <TechSupport />
            <Results />
            <Slider />
        </div>
    );
};

export default Home;
