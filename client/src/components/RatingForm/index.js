import React from 'react';
import './style.css';

//import Materialize from "materialize";

function RatingForm(props) {
    return (
        <main>
        <div className="card-content">
            <h6 id="title">Content</h6>
            <canvas className="card-chart" id="ourAmazingChart" width="400" height="100"></canvas>
        </div>
                
        {/* <!-- Tables --> */}
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <table id="table-custom-elements" className="row-border" cellspacing="0" width="100%">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Student</th>
                      <th>Goal</th>
                      <th>Current Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
                {/* <!--Button to clear radio button selections once values have been saved--> */}
                <button className="waves-effect waves-light btn-small" id="saveData">Save Data</button>
              </div>
    
            </div>
          </div>
        </div>
    
      </main>
    
    );
}

export default RatingForm;
