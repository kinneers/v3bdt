import React from 'react';
import './style.css';

//import Materialize from "materialize";

function Footer(props) {

    return (
    <footer className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col s6 m3">
                    <img className="materialize-logo" src='./../../public/images/' alt="Materialize" />
                    <p>Made with love by Materialize.</p>
                </div>
                <div className="col s6 m3">
                    <h5>Learn</h5>
                    <ul>
                        <li><a href="https://github.com/kinneers/v3dbt">Github</a></li>
                        <li><a href="docs.html">Docs</a></li>
                    </ul>
                </div>
                <div className="col s6 m3">
                    <h5>About</h5>
                    <ul>
                        <li><a href="terms.html">Terms of Use</a></li>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="col s6 m3">
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto: support@behavioraldatakeeper.com">Support</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;