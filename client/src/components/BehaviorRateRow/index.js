import React from 'react';
import './style.css';

function BehaviorRateRow(props) {
    return (
        //Need to map this to the rows in RatingForm... but first need to fix the radio buttons right
        //Pass down the onChange as a prop to the form id
        //
        <tr>
            <td>{props.studentID}</td>
            <td>{props.name}</td>
            <td>{props.behavior}</td>
            <td>
                <form id={props.behaviorID}
                //handle input change will get passed here- use the behaviorID and the value to the handle change
                >
                    <label>
                        <input className="with-gap" id='Met' value='1' name="group-{studentID}" type="radio"/>
                        <span>Met</span>
                    </label>
                    <label>
                        <input className="with-gap" id="Not-Met" value='0' name="group-{studentID}" type="radio"/>
                        <span>Not Met</span>
                    </label>
                    <label>
                        <input className="with-gap" id="N/A" value='N/A' name="group-{studentID}" type="radio"/>
                        <span>N/A</span>
                    </label>
                </form>
            </td>
        </tr>
    );
}

export default BehaviorRateRow;
