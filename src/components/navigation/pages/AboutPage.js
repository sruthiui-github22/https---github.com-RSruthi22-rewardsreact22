
import AppNavbar from "../AppNavBar";

import styles from '../navside.css';

export default function AboutPage() {

    return (
        <div   style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'Left',
            alignItems: 'Left',
            height: '100vh',
            marginLeft: '10vh',
            marginRight: '10vh',
        }}
      >

      <AppNavbar/>
          <div>
            <h1> Rewards Plus </h1>
            <p> This website calculates and provides rewards for the amount you spent on the transactions </p>
        
            <h3>Contact Us </h3> 
            <h4>  Author: Sruthi R.  Atlanta, GA. 29 Dec 2022.</h4>
            <p >  Reach us at  +676-444-8889</p>
            <p >  or Dallas, Texas   +303-404-2356</p>
            <h5>  United States </h5>
          </div>
      </div>
    );
};
