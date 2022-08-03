# Hunt For Legends

League of Legends themed photo tagging app made with React and Firebase.

## Desktop demo

<p align="center" width="100%">
    <img width="50%" src="https://media.giphy.com/media/0KVlks9PxfIpZ1mDnD/giphy.gif" alt="desktop demo gif">
</p>

## [Live Site](https://hunt-for-legends-3f7c3.web.app/home) 👈

## Description

I made this app to gain experience using databases to serve data to the client. All images, icons, and game data are store on a firebase server. I realize that for an app of this size it would be more effective to store the images and coordinates clientside to reduce loading times, but that was not the purpose of this project.

The biggest challenges I faced during this project were responsively styling the site and implementing the game logic. 

I initially designed the app to look good on desktop, and it was a pain to get all the images to properly display on smaller screens. The game is still best played in landscape mode on mobile due to the aspect ratios of the level images.

The game logic was a little tricky get right, but I ended up overlaying the the image with an html canvas of the same size. The canvas listens for the user's clicks and references the coordinates stored in firebase to determine if they selected the correct character.

## Features

- Select from one of three levels and hunt for the characters listed. 
- Enter your name upon completetion to see how your time compares to other players.
- View leaderboards for each level and play again from the same screen.

## Technologies Used

- React
- Firebase
- CSS Modules
