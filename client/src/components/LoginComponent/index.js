import React from 'react';
import './style.css';

//import Materialize from "materialize";

function LoginComponent(props) {
    return (
        <main>
            <div className="container">
                <div className="row loginbox">
                    <div className="col s8 offset-s2">
                        <div class="card horizontal">
                        <div class="card-image">
                        <img className="background" src="images/geometric-cave.jpg" alt="background design" />
                        <img className="logo" src="images/bdt-logo-square.png" alt="Logo" />

                        </div>
                        <div class="card-stacked">
                            <div className="card-content">
                                <span className="card-title">Log In</span>
                                <form id="signin" name="signin" method="post" action="signin">
                                    <label for="username">Username</label>
                                    <input name="username" type="text" />
                                    <label for="password">Password</label>
                                    <input name="password" type="password" />
                                    <input className="btn" type="submit" value="Sign In" />
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LoginComponent;