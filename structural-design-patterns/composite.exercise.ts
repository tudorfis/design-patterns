import { Team } from "./composite-exercise/Team";
import { Truck } from "./composite-exercise/Truck";
import { HumanResource } from "./composite-exercise/HumanResource";

const subTeam1 = new Team();
subTeam1.add(new Truck());
subTeam1.add(new HumanResource());
subTeam1.add(new HumanResource());
subTeam1.add(new HumanResource());

const subTeam2 = new Team();
subTeam2.add(new Truck());
subTeam2.add(new HumanResource());
subTeam2.add(new HumanResource());

const team = new Team();
team.add(subTeam1);
team.add(subTeam2);

// subTeam1.deploy();
// subTeam2.deploy();
team.deploy();


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