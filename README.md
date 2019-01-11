# GitHub Repositories
> See GitHub Profiles and Repositories

This application is intended to display the repositories and profile information of all GitHub users. Consuming the GitHub API we can access this information.
Through the search field, find the profile you want to access and the magic happens!!

![](public/favicon.ico)
  
  
## Installation

Clone this repository:

```sh
git clone https://github.com/GuiiHenriq/github-repositories.git
```

Install the dependencies:

```sh
npm install (make sure it's in the project folder)
```

Take a test:

```sh
npm test
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
  
  
## TEST, TEST, TEST

I used the "npm test" itself to check bugs and fix any problems.
Recommendation: Turn the "npm test" command before running the application.