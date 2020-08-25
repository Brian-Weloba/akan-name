# Akan Names

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![repo-size](https://img.shields.io/github/repo-size/brian-weloba/akan-name)

## **Author**: ```Brian Weloba```

## Description

In West Africa, newborns are given special names depending on the day they are born. Diverse ethnicities have variants and meanings as a symbol of cultural integrity and ancestral affiliation.

This site takes in the user's birthday and finds the day of week they were bor on. Based on that it calculates your Akan name.

The site was published on [GitHub Pages](htps://pages.github.com/).

## Page Preview

![alt screenshot](img/screenshot.png)

## Setup

 1. Clone this repository.
 2. Open the project directory.
 3. Run index.html on your browser.

- Alternatively, view on [GitHub Pages](https://brian-weloba.github.io/akan-name/).

## Script

User inputs date of birth on provided form and select a gender.

On submit:

```javascript
//call checkInput() to validate input
checkInput();
//set day of week
dayOfWeek = setDayOfWeek();
//pass value of day of week to get akan name
getAkanName(dayOfWeek);
```

 checking Input:

```javascript
function clientSideValidation() {
   //get user input
   if(conditions on invalid input) {
      //function to set error message
   } else {
      //set success message
      //validate input
   }
 }
  ```
  
  get day of week:

  ```javascript
  function getDayOfWeek() {
   //run set of mathematical functions to get what day of the week
  }
  ```
  
  get Akan name:

  ```javascript
  function getAkanName() {
   //functions to get the akan name from an array
   //update html form to display result
  }
  ```

## BDD
Behavioral specifications:
>**Title**: Get Akan name

>**As** a user.  
>**I want to** I input my date of birth.  
>**so** that I can get my Akan name  

>**Scenario 1:** Male user    
>**Given** that I am male  
>**and** I was born on 14/2/1998   
>**when** I input my date of birth  
>**and** I select my gender as Male.  
>**then** I should get my akan name is Kwame    
>**and** I was born on a Saturday.  

>**Scenario 2:** Female user    
>**Given** that I am female  
>**and** I was born on 25/5/1989   
>**when** I input my date of birth  
>**and** I select my gender as Female.  
>**then** I should get my akan name is Yaa    
>**and** I was born on a Thursday. 

>**Scenario 3:** Fail to select genger.    
>**Given** that I am female  
>**and** I was born on 25/5/1989   
>**when** I input my date of birth  
>**and** I fail to select my gender as Female.  
>**then** I should get my akan name is Yaw (Male name).    
>**and** I was born on a Thursday. 

>**Scenario 4:** Dates before October 1582.    
>**Given** that I want to know the Akan name of someone born before 1582
>**when** I input my date of birth  
>**and** I fail to select my gender as Female.  
>**then** I should not get the right day of week because of the lack of leap years in the calendar  




## Contact

E-mail: ```bweloba@gmail.com```

## Technologies Used

- HTML
- CSS
- Javascript
- Git

## Legal

 Copyright &copy; 2020 Brian N Weloba
