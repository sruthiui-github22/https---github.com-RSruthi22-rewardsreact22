
import './App.css';

import {Routes, Route, BrowserRouter as Router
} from "react-router-dom";

import HomePage from "./components/navigation/pages/HomePage";
import CustomerPage from "./components/navigation/pages/CustomerPage";
import ReportPage from "./components/navigation/pages/ReportPage";
import TransactionPage from "./components/navigation/pages/TransactionPage";
import RewardPage from "./components/navigation/pages/RewardPage";
import AboutPage from "./components/navigation/pages/AboutPage";
//import AppNavBar from './components/navigation/AppNavBar';

function App() {
  return (
    <div className='.App'>
      <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/transaction" element={<TransactionPage />}/>
            <Route path="/reward" element={<RewardPage/>} />
            <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
