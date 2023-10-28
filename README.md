# startup

Click Here for [notes.md file:](https://github.com/mcshayla/startup/blob/main/notes.md)

[WebServer](https://startup.mcshayla.click/)


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

# Deliverables

## HTML
For this deliverable, I created the structure of my application with HTML.
- **HTML** - Three HTML pages in total.  1. login page 2. creating habits and displaying data  3. a public page showing realtime data. 
- **Links** - By entering a name to begin, you are automatically taken to the habits page. Links are includes to switch between the pages, and a link is included to my github. 
- **Text** - Text is included as headers to explain context for the habits and public habits pages.
- **3rd party service calls** - The login input box is a placeholder for 3rd party service call for user authentication. Secure login over HTTPS.
- **Images** - Images are included for users on the public page. An image is also included in the head as a web application logo.
- **Login** - An input box for a name is included for login. The username is shown on the habits page and shown for habits that are public on the public page.
- **Database** - The usernames which will be stored in the database, as well as the current progress for the goals, and the highest streak for each habit represent data pulled from the database.
- **WebSocket** - On the public_habits.html file, users and their public goals will be displayed anytime a user creates a public habit (realtime). 

## CSS
I styled the application to look neat for production
- **Header, footer, and main** -used flex
- **navigation elements** - changed the text color to white in header and footer and removed the underlines. A link to my github is visible if you scroll to the footer.
- **responsive to windo resizing** - elements move with resizing to look good at any size. header and footer only show when there is enough space.
- **application elements** - split content up with headers and whitespace. made use of transitions for elements appearing on the page. Used bootstrap buttons for styling and background colors to seperate content.
- **application text content** - an easily readable font throughout. used font weight to create contrast.
- **appliction images** - adjusted size of images and content images transition onto public page.

## JavaScript
I used JavaScript to make the application iteractive and active.
- **Login** - I have a placeholder for a username and password. The input is stored in local storage and if there is input, you are taken to the habits page. 
- **Database Data** - On the habits page, input is taken and stored in local storage to be placed below in progress bars. 
- **WebSocket** - The username, habit, and progress(streak) for each set of input that is marked "public" is placed in a table on the public page. If it is the same habit, the record progress is shown on the public page. 
- **Application Logic** - Once the progress bars are displayed, the user can click to increase the progress on a habit. 