import React, { Component } from 'react';
//how we are going to create a contanier so we can update how much data to send to the client
import {  createContainer } from 'meteor/react-meteor-data';
import { Employees } from "../../imports/collections/employees";
//import what you are going to render (child component)
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

//CLASS BASED Componoent: in order to update number of records displayed on screen
  //must define a render method and return some sort of jsx in a Component class
class EmployeeList extends Component{
  /* Life cycle method is a method we can choose to define on our class and if we
  define it, it will be called automatically    */
  componentWillMount(){
    this.page = 1;
  }

  handleButtonClick(){
    Meteor.subscribe('employees', PER_PAGE * this.page +  1);
    this.page += 1;
  }

  render(){
  //we could a refence to props.employees
    return(
      <div>
        <div className = "employee_list">
      {/*for every employees render an EmployeeDetail
        BECAUSE this is NOW a class component props does not exist*/}
      {this.props.employees.map(employee =>
        <EmployeeDetail key = {employee._id } employee = {employee} />)}
        </div>
{/*because this is a callback we need to bind the context of it*/}
        <button onClick={this.handleButtonClick.bind(this)}
         className = "btn btn-primary" >
         List More...
         </button>
      </div>
    );
   }
};


//so we can update data create a container
export default createContainer(() =>  {
//1) set up subcription -- ask server can I have data from publication empolyees
//this container is only subscribed to the 20 published by the server
//sends PER_PAGE to publish in main server
/*{sets defualt image count to 20 }*/
Meteor.subscribe('employees', PER_PAGE);
/*2) return an object. Whatever we return will be sent to EmloyeeList as props
returns the query as an object with a key of employees */
return { employees: Employees.find({}).fetch()}
},  EmployeeList);
