import { Mongo } from 'meteor/mongo';

//creates collection callled employees
export const Employees =  new Mongo.Collection('employees');

//export without default to hand down not one but a bunch of variables
