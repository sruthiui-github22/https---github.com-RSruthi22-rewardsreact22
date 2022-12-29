
import AppNavbar from "../AppNavBar";

import styles from '../navside.css';

export default function CustomerPage() {

    return (
        <div
        style={ {
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
  
        <h1>Customer Page</h1>
        <table align="center">
            <th>
                Customers
            </th>
            <tr>
                <td> Alice </td>
            </tr>
            <tr>
                <td> Bob </td>
            </tr>
            <tr>
                <td> Carol </td>
            </tr>
        </table>


    </div>
    );
};
