# Team_Profile_Generator


## Description

```
I created this application to allow a user to create an html page that displays team member profile cards for every person in their team. The user only has to answer a few questions about the team members and the application will generate the HTML page. Some of the technologies used in this application are HTML, CSS, JQuery, Node.js, and the Inquirer Package. I also used Classes and Subclasses to create the employee objects.
```

#### Table of Contents

[User Story](#User_Story)  

[Acceptance Criteria](#Acceptance_Criteria)

[Video Walkthrough](#Video_Walkthrough)  

[Sample](#Sample)  

[Installation Instructions](#Installation_Instructions)  


## User_Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance_Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Video_Walkthrough
```
The following video shows a walkthrough of the applications functionality and testing.

https://www.youtube.com/watch?v=LEBJ7GRMX4c
```

## Sample
```
A sample of the html file that gets created can be found here:

https://fariskadir.github.io/Team_Profile_Generator/dist/
```


## Installation_Instructions
```
This application must be run in your terminal. In order for it to run successfully you will need to install Inquirer by typing the following into your terminal:


npm install inquirer


You will also need to install jest if you plan on running the test, which also need to run in your terminal by typing the following into your terminal:


npm install jest

```