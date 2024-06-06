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
import styles from './Home.module.scss'
import StagesOfWork from "../../components/StagesOfWork/StagesOfWork";
import ShockedNumbers from '../../components/ShockedNumbers/ShockedNumbers';
import {Element} from "react-scroll";

const Home = () => {
    return (
        <div>
            <Header />
            <div className={styles.cont}>
                <Element name={'home'}><WelcomeBlock /></Element>
                <Element name={'corpo'}><CorporateSite/></Element>
                <ShockedNumbers />
                <ExclusiveSites />
                <HighPerfomanceSite />
                <TechSupport />
                <Results />
                <Element name={'reviews'}><Slider /></Element>
                <Element name={'blog'}><StagesOfWork /></Element>
                <Element name={'contact'}><Leads /></Element>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
