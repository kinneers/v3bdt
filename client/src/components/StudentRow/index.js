import React from 'react';
import './style.css';

//import Materialize from "materialize";

function StudentRow(props) {

    let name = 'Bad Billy';
    let behavior = "Don't pick nose!";
    let studentID = 1;
    

    return (
        //Need to map this to the rows in RatingForm... but first need to fix the radio buttons right
        <tr>
            <td>{name}</td>
            <td>{behavior}</td>
            <td>
                <form id={studentID}>
                    <label>
                        <input class="with-gap" id='Met' value='1' name="group-{studentID}" type="radio"/>
                        <span>Met</span>
                    </label>
                    <label>
                        <input class="with-gap" id="Not-Met" value='2' name="group-{studentID}" type="radio"/>
                        <span>Not Met</span>
                    </label>
                    <label>
                        <input class="with-gap" id="N/A" value='N/A' name="group-{studentID}" type="radio"/>
                        <span>N/A</span>
                    </label>
                </form>
            </td>
        </tr>



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
      
    );
}

export default StudentRow;
