import React from 'react';
import './style.css';

//import Materialize from "materialize";

function BxChart(props) {
    return (
        <main>
        <div className="container">
          <div className="row">
    
            <div className="col s12 m12">
              <h5 id="username-container">Behavioral Charts</h5>
              <div className="card">
                <div className="card-metrics card-metrics-toggle card-metrics-centered">
                  <div className="card-metric waves-effect active" data-metric="revenue">
                    <div className="card-metric-title">Behavior</div>
                    <div className="card-metric-value">$12,476.00</div>
                  </div>
                </div>
                <div className="card-content">
                  <canvas className="card-chart" id="main-toggle-line-chart" width="400" height="400"></canvas>
                </div>
              </div>
            </div>
            </div>
          </div>
      </main>
    
    );
}

export default BxChart;
