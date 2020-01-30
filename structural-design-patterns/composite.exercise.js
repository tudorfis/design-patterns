"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team_1 = require("./composite-exercise/Team");
var Truck_1 = require("./composite-exercise/Truck");
var HumanResource_1 = require("./composite-exercise/HumanResource");
var subTeam1 = new Team_1.Team();
subTeam1.add(new Truck_1.Truck());
subTeam1.add(new HumanResource_1.HumanResource());
subTeam1.add(new HumanResource_1.HumanResource());
subTeam1.add(new HumanResource_1.HumanResource());
var subTeam2 = new Team_1.Team();
subTeam2.add(new Truck_1.Truck());
subTeam2.add(new HumanResource_1.HumanResource());
subTeam2.add(new HumanResource_1.HumanResource());
var team = new Team_1.Team();
team.add(subTeam1);
team.add(subTeam2);
// subTeam1.deploy();
// subTeam2.deploy();
team.deploy();
// team.add();
// Exercise
// We’re building an application for an incident management organization.
// When an incident (eg fire) occurs, one or more teams may be deployed
// to attack the incident.
//A team often includes a truck and one or more human resources.
// It can also include a sub team. For example, for a medium-sized
// incident, we may need to deploy two teams and each team may contain
// a truck and two persons.
// -Team
//  -Sub Team 1
//      -Truck
//      -Human Resource
//      -Human Resource
//  -Sub Team 2
//      -Truck
//      -Human Resource
//      -Human Resource
// Look at the current implementation of our application in the composite package.
//   What are the problems with this implementation? 
// Refactor the code using the composite pattern. 
