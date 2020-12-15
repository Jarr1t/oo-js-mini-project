# Object Oriented Mini Project

Instructions for a day-long group project. 

## Purpose

The purpose of this project is to...
1. Assess your mastery of Object Orientated Programming covered in Unit 4.
2. Push you to reach for advanced OO Programming solutions and to address new design challenges.
3. Analyze real world systems, break them down, and transfer their ideas into code and programs. 

## Groups

This project will be completed in groups of 3. Every **row** is a group.

| Team Member #1 | Team Member #2 | Team Member #3 |
|---|---|---|
| Segun | Gracie | Shemar |
| Itzel | Jarrit | Jason |
| Andrea | Ricardo | Olivia |
| Rabia | Asif | Cat |

## Process

You will be building out an Object Oriented domain of your choice. As a group, you will be creating a "clone" of something that exists in the real world. You should spend *a long time* planning out your classes, properties, and methods before your start coding. At the end of the day, your group will be presenting your project by demonstrating the features and functionality in the browser's console. 

### Brainstorm

You only have one day to work on this project. A good sized project will have 3 to 5 classes with every class having multiple data properties and some methods. In addition, many of the classes may interact with each other. We recommend choosing one of the following domains.

##### Social Media
* `Instagram`
* `Snapchat`
* `YouTube`
* `Reddit`
* `Facebook`

##### Company/Organizations
* `Library`
* `Animal Shelter`
* `Gym/Membership`
* `Restaurant`
* `Bakery`
* `Car Dealership`

##### Machines
* `Jukebox`
* `VendingMachine`

##### Games
* `Monopoly`
* `pokemon`

It is perfectly fine if more than one group chooses the same domain. There are many ways to build out Object Oriented systems, and we can benefit from seeing different implementations of the same domain! If you want to build out a domain that is **not on the list**, you must get it approved by an instructor **before moving on** to the next step.

### Design

Before you touch the `index.js` file, you **MUST** have a solid game plan. Create class diagrams for each of the classes you plan to build. Determine: What is the [Minimum Viable Product](https://www.interaction-design.org/literature/article/minimum-viable-product-mvp-and-design-balancing-risk-to-gain-reward) (MVP) for this project? All of the domains above *could* be built out using only 2 or 3 key classes. A common pitfall is to bite off more than one can chew. Before you write 5+ classes, determine which classes and methods are most important and are part of your MVP. All other classes and methods will be stretch goals (features that get built *only* if time permits).

No matter what domain you are buiding out from the list above, **an instructor must approve your class diagrams before you start coding**.

##### Tips
1. Your MVP should consist of 2 or 3 classes with 2 to 4 methods each. If a class has more than 4 methods, figure out which ones are important enough to be part of MVP and which are stretch goals. 
2. Double check to see if any properties are better off as methods. Instead of a `numOfFriends` property, it may make more sense to have a `getNumOfFriends()` method that *derives* the data from an existing data property. 
3. Think about how your classes will interate with each other. 
    * If an object `IS-A` some other object, try using inheritance.
    * If an object `HAS-A` some other object, we should add a data property that is an *instance*.
    * If an object `BELONGS-TO` some other object, we should add a data property that is an *instance*.
    * If an object `HAS-MANY` other objects, we should add a data property that is an *array of instances*.

##### Planning Resources
* [Smart Draw class diagrams](https://cloud.smartdraw.com/)
* Google Slides
* [Aww App Online Whiteboard](https://awwapp.com/)

### Implementation

When you are ready to start coding (have you gotten your design approved by an instructor???), have one team member fork this repository and add all group members as collborators to the *forked repo*. All group members should be able to clone the forked repository to their local AWS environment. Practice good paired programming techniques:

* There should be one driver and two navigators at any time.
* The driver should share their screen.
* Communication is key! Navigators should explain what to type **as well as explain why.** Drivers should always explain what they are typing to the rest of hte group.
* Rotation the role of driver every 15 - 20 minutes. Use git to push up changes so the next driver can pull those changes down. 

##### Tips

* Remember to build out the **Minimum Viable Product first**! Choose 2 or 3 of the most important classes to build out first.
* For your first 2 or 3 classes, start implementing the easy stuff first (constructor methods and data properties).
* **Code a Little, Test a Little!** Create a lot of instances at the bottom of the file to test out your classes.
* For complex methods, practice the PEDAC approach
* Some methods might involve the *instantiation* of another instance. For example, `user.postTweet()` would be a `User` method that creates a `Tweet` instance. 
* For methods with multiple control flows (loops and if statments), test every if branch, loop, and use case.

### Presentations

At the end of the day, your group will give a 5 - 10 minutes presentation of your project with an additional 5 minutes for questions, comments, and praise! All group members must participate in the presentation. Decide before-hand which person is going to voice-over and explain which features. There should be one designated demo-er who will share their screen and demonstrate the functionality while its being voiced-over. 

