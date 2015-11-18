# checkers
write a basic checkers game in a time crunch as an exercise to stay sharp. command line first.

##Methodology and Process

###<i> Nov 17, 2015</i>

###Reflection

I've reworked he checkers game so that it is actually following most of the rules of checkers, though I have not yet implemented the rules about kings and only moving forward. What I am discovering is that my functions for moving and jumping may not be entirely necessary. What I mean is with my added method of show options which will in turn show all the potential options for the player within the board constraints.

###<i> Nov 12, 2015</i>

### Reflection

At this point, I have set up the basic rules of the game, and
have connected it to the view in the very basic sense. I still need to get event recongnition. My natrual instinct is to do it all Jquery and JS, but this might be an opportunity to use a front end framework.

![no styling checkers board](imgs/nov12.png)

I have 2 ideas for methods to connect the user's click actions to the backend
 - take the input chip value and automatically identify where legal options would be - potentially even showing the user where legal options. This would do all of the logic upon the first click, identifying a type of move option in the class of the grid cell and inputting the information for the full turn right from the off.
 - allowing the player to select thier chip and their desired location AND THEN doing the logic.

I think the former option would be best.

### Rules not accounted for:

 - Kings - Right now logic has it that all chips can move in any direction, though I am currently not sure if a checkers chip can move sideways... Shoot. I just realized I set up all my rules wrong.
