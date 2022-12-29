
import AppNavbar from "../AppNavBar";

import styles from '../navside.css';

export default function HomePage() {

    return (
        <div   style={ {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'Left',
          alignItems: 'Left',
          height: '100vh',
          marginLeft: '10vh',
          marginRight: '10vh',
          } }
      >

      <AppNavbar />

      <div> 
        <h1>Home</h1>
        <h2>Rewards Plus</h2> 
          <h3>You can get your rewards on the fly when you buy from us</h3>
          <p>This site brings happiness in the form of rewards for your purchases </p>

         <h3>GET REWARDS </h3> 
         <h5>You will be able to earn the reward points on every purchase of $50 and above </h5>
         <h4>Author: Sruthi R.  Atlanta, GA. Dec 2022.</h4>
      </div>
    </div>
    )
};
