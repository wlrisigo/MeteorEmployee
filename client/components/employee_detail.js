import React from 'react';

// ES6 just like props but instead we just want access to employee  property
// so we dont have to rewrite props.employee
const EmployeeDetail = ({employee}) => {
//since we rendered from EmployeeList we have access to props
/*PROPS: one employee  */

// ES6 -- destructering
const { name, email, phone, avatar } = employee;
return (
  <div className =  "thumbnail">
    <img src = {avatar} />
    <div className = "caption">
      <h3>{name}</h3>
      <ul className = "list-group">
          <li className = "list-group-item"> Email: {email}</li>
          <li className = "list-group-item">Phone: {phone}</li>
      </ul>

    </div>
  </div>



)

};

export default EmployeeDetail;
