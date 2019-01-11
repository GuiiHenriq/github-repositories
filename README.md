# GitHub Repositories
> See GitHub Profiles and Repositories ![](public/favicon.ico)

This application is intended to display the repositories and profile information of all GitHub users. Consuming the GitHub API we can access this information.
Through the search field, find the profile you want to access and the magic happens!!


**_Attention: Make sure you have NodeJS, NPM and Git installed!_**

  
## Installation

Clone this repository:

```sh
git clone https://github.com/GuiiHenriq/github-repositories.git
```

Install the dependencies:

```sh
npm install - Make sure it's in the project folder (this process takes 30 ~ 50 seconds)
```

Take a test:

```sh
npm test - If nothing appears on the console, end the action and proceed to the next step (this process takes 05 ~ 15 seconds)
```

Start npm and run the application:

```sh
npm start
```
  
  
## Use of Javascript ES6 Components

**Arrow Function**  
  
> I used this new scope of function in order to shorten the syntax, with arrow function I do not need to bind this and with that it is also possible to simplify the scope of the function.

**Stateless Component**  
  
> Stateless Component was used to define reusable components, where I can define local variables and facilitate scope. I used Stateless Component mainly to define the body of the project in JSX (Navbar, Profile, Repositories).

**Class Component**  
  
> I used class components to define a state and store some information, where I can call this information through "this.state". I used this class method to display the GitHub profile information and the repositories.
  
  
## Test, Test, Test

I used the "npm test" itself to check bugs and fix any problems.
Recommendation: Turn the "npm test" command before running the application.