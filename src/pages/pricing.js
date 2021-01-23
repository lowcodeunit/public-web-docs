import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { Helmet } from "react-helmet";
import pricingImage from '../../static/img/pricing-page-final.png'
import styles from './styles.module.css';

function Pricing() {
    // const lcu = JSON.stringify({ "State": { "ActionRoot": "/api/state", "Root": "/api/state" } });
    // const script = document.getElementById("lcu-reg") || document.createElement("script");
    // script.id = "lcu-reg";
    // script.innerHTML = `window.LCU=${lcu};`;
    // if (!document.getElementById("lcu-reg")) {
    //     document.body.appendChild(script);
    // };
    return (
        <Layout title="Pricing">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="home_title">IOT Ensemble Pricing</h1>
                    <h1 className="home_title"></h1>

                </div>
            </header>
            <div style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
                <div>
                <a href="https://www.iot-ensemble.com/billing/iot/">
                    <img src={pricingImage}/>
                </a>
                </div>
            </div>
        </Layout>

        /* <Helmet>
        <script src="https://www.iot-ensemble.com/billing/lcu/wc/lcu-billing.lcu.js" type="text/javascript" />
        </Helmet>
        <lcu-billing-plan-view-element
        plan-group="iot">
        </lcu-billing-plan-view-element> */
    );
}

export default Pricing;