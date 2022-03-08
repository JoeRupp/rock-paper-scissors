# ROCK PAPER SCISSORS - PIGEON EDITION 🐦

### Overview
Play your favorite game of Rock Paper Scissors, but now with elemental pigeons! Pick from two game modes, classic or extreme, and face off against the computer enemy pigeon. In classic mode, three pigeon champions are available to you: fire pigeon, earth pigeon, and water pigeon. In extreme mode, air pigeon and void pigeon get added in. Play as long as you want and reset the score if you wish to start a new game.

- fire beats earth / void
- earth beats water / air
- water beats fire / air
- air beats void / fire
- void beats earth / water

### Collaborators
- [**Joe Rupp**](https://github.com/JoeRupp)

### Installation Steps
1. Fork this repo to create your own copy.
2. Clone your newly-forked repo. Make sure SSH is selected.
3. Type `cd rock-paper-scissors` to move into the root directory.
4. Use a text editor of your choice to make changes to the file.
5. See your changes in the browser by running `open index.html` in your terminal.

### Deploy link
~To be updated later

### Instructions
 - When the game loads, the user will have two game modes to choose from - classic or extreme. Classic mode has three pigeon champions to pick from, while extreme adds to the complexity and has five champions. The user can toggle between the two modes without losing their current score.
 
 ![Screen Shot 2022-03-08 at 4 32 54 PM](https://user-images.githubusercontent.com/96392562/157344230-a6353664-a265-4fc2-b843-dc6c138950d8.png)
 
 - Selecting a game mode changes the page's view to show the champion options for the user to select. The user can direct back to the game mode options by clicking the `Change Game` button in the bottom left corner.
 
 ![Screen Shot 2022-03-08 at 4 33 52 PM](https://user-images.githubusercontent.com/96392562/157344402-8e95c884-23c3-4a32-a0d6-e4a2067e7f1f.png)

 - Selecting a pigeon champion starts a battle between the user and computer enemy. The selection view will disappear temporarily to show the battlefield view. In the battlefield view, the user and enemy's champion choices will be displayed along with a message saying "You Won!", "You Lost!", or "Tied!". After the winner has been declared, the selection view will be automatically displayed again.
 
 <img width="1434" alt="Screen Shot 2022-03-08 at 4 37 19 PM" src="https://user-images.githubusercontent.com/96392562/157344472-9dfd8b34-dff9-4b21-b4f8-0150d5c64bff.png">

 - Depending on who wins the round, the score will be updated in the player's info box located in the top left side, or the enemy's info box located in the top right. The user can also change their icon by clicking the `Change Bird` button located below their info. There are three icon options to pick from!

 ![Screen Shot 2022-03-08 at 4 33 06 PM](https://user-images.githubusercontent.com/96392562/157344484-57aab910-868d-43c4-97b1-026b38e264e1.png)

 - As long as the user or enemy score is above 0, at any point the user can choose to reset the scores to 0 using the `Reset Score` button located in the bottom left corner.

![Screen Shot 2022-03-08 at 4 46 57 PM](https://user-images.githubusercontent.com/96392562/157345021-3213acb4-96bf-42c3-806d-4841e5f3df5a.png)


### Technologies
HTML | CSS | Javascript | Adobe Illustrator

### Application Forecast
In the future, we are looking to add the following features:

1. Add sounds so that when a user hovers/clicks a button, or pigeons battle, a small sound plays.
2. Create an input allowing the user to create their own username before starting a game.
3. Add small animations to pigeons during battle view.

Original project spec can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)
