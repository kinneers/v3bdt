import React, { Component } from 'react';
import './style.css';
import BehaviorRateRow from './../BehaviorRateRow';
import API from './../../utils/API';

class RatingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            behaviorInfo: [{ studentID: 1, name: 'Bad Billy', behavior: 'Do not pick your nose!', behaviorID: 1 }],
            newData: []
        };
    }

    //Create get request for this teacher's behaviors' IDs, names, behaviors
    //Set state for behaviorInfo to this teacher's student data
    //Create onClick to gather each student's data
    //Post each student's data to the database
    //Show a modal when student data has been saved and reset radio buttons

    // // When the component mounts, load all students and save them to this.state.behaviorInfo
    // componentDidMount() {
    //     this.loadBehaviors();
    // };

    // // Loads all students and sets them to this.state.behaviorInfo
    // loadBehaviors = () => {
    //     API.getBehaviors()
    //         .then(res => this.setState({ behaviorInfo: res.data }))
    //         .catch(err => console.log(err));
    // };

//   // Deletes a book from the database with a given id, then reloads books from the db
//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   // Handles updating component state when the user types into the input field
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };


    render() {
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
                                <table id="table-custom-elements" className="row-border" cellSpacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Student ID</th>
                                            <th>Name</th>
                                            <th>Behavior</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* This needs to map all the student Rows */}
                                        <BehaviorRateRow 
                                        studentID={this.state.behaviorInfo[0].studentID}
                                        name={this.state.behaviorInfo[0].name}
                                        behavior={this.state.behaviorInfo[0].behavior}
                                        behaviorID={this.state.behaviorInfo[0].behaviorID}
                                        />
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
    };
};

export default RatingForm;


        //HOW IT WAS DONE IN v.2:
        // function getStudents() {
        //     $.get("/teacher/students", function (dbData) {
        //       // console.log(dbData);
        //       dbDataContainer = dbData;
        //       for (var i = 0; i < dbData.length; i++) {
        //           var studArray = [];
        //           var order = (i + 1);
        //           var name = dbData[i].studentname;
        //           var bx = dbData[i].behavior;
        //           var eachId = dbData[i].id;
        //           bxId.push(eachId);
        //           studArray.push(order, name, bx);
        //           data.push(studArray);
      
        //           var sidebar = `<li class="bold waves-effect"><a class="collapsible-header">${name}<i class="material-icons chevron">chevron_left</i></a>
        //             <div class="collapsible-body">
        //               <ul>
        //                 <li><i class="material-icons">web</i><button id="getChart" value="${bx}" class="waves-effect">${bx}</button></li>
        //               </ul>
        //             </div>
        //           </li>`;
        //           $(".collapsible-accordion").append(sidebar);
        //       }
              
        //       $('#sidenav-left').on('click tap', '#getChart', function(event) {
        //           var bx = event.target.value;
        //           makeChart(bx);
        //       });
          
        //       // e = element,  i = index
        //       data.forEach((e, i) => {
        //         return (
        //           e.push(
        //             `<form id="${dbData[i].id}"><label><input class="with-gap" id="met-${dbData[i].id}" name="group-${dbData[i].id}" type="radio"/>
        //     <span>Met</span> </label>
        //     <label><input class="with-gap" id="notMet-${dbData[i].id}" name="group-${dbData[i].id}" type="radio"/>
        //     <span>Not Met</span></label></form>`
        //           )
        //         )
        //       });
        //       var tableCustomElements = $('#table-custom-elements');
        //       if (tableCustomElements.length) {
        //         var table = tableCustomElements.DataTable({
        //           'data': data,
        //           'columnDefs': [{
        //             'targets': 0,
        //             'searchable': false,
        //             'orderable': false,
        //             'className': 'dataTables-checkbox-column',
        //             /*'render': function (data, type, full, meta){
        //                 return '<label><input class="filled-in" type="checkbox" name="id[]" value="'
        //                    + $('<div/>').text(data).html() + '"><span></span></label>';
        //             }*/
        //           }],
        //           'language': {
        //             'search': '',
        //             'searchPlaceholder': 'Enter search term'
        //           },
        //           'order': [3, 'asc'],
        //           'dom': 'ft<"footer-wrapper"l<"paging-info"ip>>',
        //           'scrollY': '400px',
        //           'scrollCollapse': true,
        //           'pagingType': 'full',
        //           'drawCallback': function (settings) {
        //             var api = this.api();
      
        //             // Add waves to pagination buttons
        //             $(api.table().container()).find('.paginate_button').addClass('waves-effect');
      
        //             api.table().columns.adjust();
        //           }
        //         });
      
        //         $('#table-custom-elements_wrapper').on('change', 'input[type=checkbox]', function (e) {
        //           var parentTR = $(this).parentsUntil('table').closest('tr');
        //           parentTR.toggleClass('selected', this.checked);
        //         });
      
        //         // Handle click on "Select all" control
        //         $('#table-custom-elements_wrapper').find('.select-all').on('click', function () {
        //           // Check/uncheck all checkboxes in the table
        //           var rows = table.rows({ 'search': 'applied' }).nodes();
        //           $('input[type="checkbox"]', rows)
        //             .prop('checked', this.checked)
        //           $(rows).toggleClass('selected', this.checked);
        //         });
        //       }
        //     })
        //     $(".container").on("click", "#saveData", function (event) {
        //       //console.log(data);
        //       for (var i = 0; i < dbDataContainer.length; i++) {
        //         var met = $(`#met-${dbDataContainer[i].id}:checked`).val();
        //         //var met = $(`#met-${data[i].BehaviorId}:checked`).val();
        //         var notMet = $(`#notMet-${dbDataContainer[i].id}:checked`).val();
        //       //   console.log(dbDataContainer[i].id);
        //       //   console.log(met);
        //       //   console.log(notMet);
      
        //         var body = {
        //           BehaviorId: dbDataContainer[i].id,
        //         };
        //         if (met === undefined && notMet === undefined) {
        //           // eslint-disable-next-line no-console
        //           console.log("Met or Not Met condition tracked");
        //           body.behavInfo = null;
        //         } else {
        //         if (met === "on") {
        //           //post to student[i] or student.id
        //           //${i} will change to data[i].id 
        //           body.behavInfo = 1;
        //         }
        //         else {
        //           body.behavInfo = 0;
        //         }
        //           $.post('/ratings', body, function (req, res) {
        //             console.log(body);
        //             console.log(res);
      
        //             //makeChart(chartData);
        //           });
        //         }
        //       }
        //       $(".with-gap").prop("checked", false);
        //     })
        //   }
        //   getStudents();
      
