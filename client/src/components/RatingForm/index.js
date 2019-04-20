import React from 'react';
import './style.css';

function RatingForm(props) {
    return (
        <main>      
            {/* <!-- Tables --> */}
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <table id="table-custom-elements" className="row-border" cellSpacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>Student ID</th>
                                        <th>Name</th>
                                        <th>Behavior</th>
                                        <th>Rating</th>
                                    </tr>
                                </thead>
                                {(props.behaviorInfo.behaviors) ? (
                                <tbody>
                                    {props.behaviorInfo.behaviors.map(behaviors => (
                                    <tr key={behaviors._id}>
                                        <td>{behaviors.student}</td>
                                        <td>{behaviors.studentName}</td>
                                        <td>{behaviors.behaviorName}</td>
                                        <td>
                                            <form id={behaviors._id} name='rating' onChange={props.handleInputChange}>
                                            {/* handle input change will get passed here- use the behaviorID and the value to the handle change */}
                                                <label>
                                                    <input className="with-gap" id='Met' value={1} name={behaviors._id} type="radio" />
                                                    <span>Met</span>
                                                </label>
                                                <label>
                                                    <input className="with-gap" id="Not-Met" value={0} name={behaviors._id} type="radio" />
                                                    <span>Not Met</span>
                                                </label>
                                                <label>
                                                    <input className="with-gap" id="N/A" value={''} name={behaviors._id} type="radio" />
                                                    <span>N/A</span>
                                                </label>
                                            </form>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                                ) : 
                                (<tbody>
                                    <tr>
                                        <td>You do not have any student behaviors to rate.</td>
                                    </tr>
                                </tbody>)
                                }                    
                            </table>
                            <button className="waves-effect waves-light btn-small" id="saveData" onClick={props.saveData}>Save Data</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RatingForm;
