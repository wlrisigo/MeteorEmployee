import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list';


//functional component -- returns some sort of JSX
var App = () => {
return (
<div> <EmployeeList /> </div>
)

};


//After meteor loads render my app to the DOM
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
});
