# startup

Click Here for [notes.md file:](https://github.com/mcshayla/startup/blob/main/notes.md)

[WebServer](http://52.207.129.186/)


# The Habit Startup

## Elevator Pitch
Looking to boost your productivity, achieve your goals, become who you desire to be? Try the Habit application! It allows you to pick habits that you want to work on developing! This application raises your awareness as it keeps track of how long you have consistently kept a habit. The application also gives the option to make each habit personal or public so you can have others keep you accountable. As you become aware of your progress on the habits you want, the habits will become a part of you and you will be one step closer to becoming the best you!

## Design
![unnamed](https://github.com/mcshayla/startup/assets/137968448/2a965cdf-f20e-437f-acfb-0603054d7670)

# Technologies
I am going to use the required technologies in the following ways.
- **HTML** - Uses correct HTML structure for application. Three HTML pages. One page for login. One page that allows the user to input new habits and shows the stats of all of all input habits. One page for public habits. Hyperlinks to switch back and forth from private and public goals.
- **CSS** - Application styling that looks clean and fun/motivating, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, provides space to enter habits and option to make each habit personal or public, place to click whether habit was completed or not, displays public habits, displays charts representing consistency for each habit.
- **Service** - Backend service with endpoints for:
  1. login
  2. Retrieve users’ public goal fractions
- **DB** - Store users, habits, current progress with habit, highest streak for each habit.
- **Login** -Create name and login. Credentials securely stored in the database. Can't keep track of habits without authentication.
- **WebSocket** - Anytime a user creates a public habit, it is posted on the public habit page for all users to see.
- **React** - Application ported to use the React web framework.

- **Authentication:** An input for the user to create an account and login. The username will be displayed.
- **Database data:** A rendering of application data that is stored in the database. This web application will save data for the longest amount of time a user has kept a habit.  
- **WebSocket data:** A rendering of data that is received from your server. This web application allows a user to have personal and public habits. The public goals are shared every time a user creates one and can be seen by others - allowing people to keep each other accountable and motivate each other.

# Key Features
- Secure login over HTTPS
- Ability to input unique habits (weekly, monthly, yearly, option to create any amount of time for developing a habit. This means a user could enter 21 and use the application to mark a habit they are trying to do 3 times a day for a week). 
- If the habit wasn’t completed, the progress restarts but the longest streak for that habit is still displayed.
- Displays progress of all goals
- Displays public goals across users for accountability and motivation.
- Ability for a user to click whether or not they have achieved their goal or not.
- Progress is stored and updated

