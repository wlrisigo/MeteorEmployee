import {image, helpers} from 'faker';
import _ from "lodash";
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees'


Meteor.startup(() => {
  //Great place to Generate data

  //Check to see if data is in the collection
  //see if collection has any records
  //get length of what is currently in numberRecords collection (records-not array)  (curser)
  const numberRecords = Employees.find({}).count();
   if(!numberRecords){
/*   Generate Data */
//run callback function 5000 times (better than for loops)
_.times(5000, () =>{

  //createCard part of faker creates return value of   listed below
  const {name, email, phone} = helpers.createCard();
//inserting using meteor to Employees DB
  Employees.insert({
    //EA6 allow us to refrator to:
    name, email, phone,
    avatar: image.avatar()
    /*name: name,
    email: emai,
    phone: phone*/
  });
});
  }
  else {console.log(numberRecords);
  }
  /*SERVER defines publications */


Meteor.publish('employees', function(per_page ){
  //find() doesnt query for info in our data base. its a curser (bookmark )
  //if anyone tries to  get access to DB sends back 20 (for security and so server doesnt crash)
return Employees.find({}, { limit: per_page });

});

});
