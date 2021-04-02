## AWS Amplify

AWS Amplify URL: https://master.duer5jpine1ze.amplifyapp.com/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Approach

1. Test APIs on Postman
2. Integrate API to frontend
3. Create simple form to call API
4. Store API responses into redux store
5. Create more detailed UI
6. Create UX from one test case to another
7. Conduct error handling
8. Housekeeping codes
9. Deployment to AWS

## Design Method

- Reusable components to components that are (1) commonly used across other pages (2) requires more UI customisation
- Follow as closely to UI provided on document
- Create workflow of UX from one page to another
- Create standardisation e.g. Colors, components, fontsizes, etc.
- Errors are displayed visibly
- Prevention of recursive calling of APIs as APIs would only be triggered when a button is clicked
- Documentation of test cases below to allow ease of walkthrough of web application

--------------------------------------------------------------------------------------------------------------------------------------

## Test Cases

### 1. Sign Up

At the Home page, click on the Sign Up button on the top right of the screen.

<img width="1428" alt="1" src="https://user-images.githubusercontent.com/34975891/113423041-5dd3bb00-9400-11eb-9c84-cc38d8fe8fba.png">

You will be redirected to the Sign Up page. Enter your particulars.

<img width="1428" alt="2" src="https://user-images.githubusercontent.com/34975891/113426567-3c75cd80-9406-11eb-9dc2-55e89bff8a8d.png">

If an email had been used previously to create an account, an error would be shown.

<img width="1428" alt="3" src="https://user-images.githubusercontent.com/34975891/113426605-47c8f900-9406-11eb-9fca-5278eaa4db0e.png">

If there were an incorrect email format detected, an error would be shown.

<img width="1428" alt="4" src="https://user-images.githubusercontent.com/34975891/113426679-64fdc780-9406-11eb-9451-114c1f55eea3.png">

If there are no longer any errors, you will be redirected to the Login page.

<img width="1428" alt="5" src="https://user-images.githubusercontent.com/34975891/113426695-6a5b1200-9406-11eb-9a04-67b71cb59181.png">

--------------------------------------------------------------------------------------------------------------------------------------

### 2. Login

On the login page, enter your login credentials.

<img width="1428" alt="6" src="https://user-images.githubusercontent.com/34975891/113426800-91194880-9406-11eb-949d-e9d5d31993a4.png">

If incorrect login credentials were inputted, an error would be shown.

<img width="1428" alt="7" src="https://user-images.githubusercontent.com/34975891/113426852-9d9da100-9406-11eb-9bd4-89915263b81c.png">

If there are no longer any errors, you will be redirected to the Home page.

<img width="1428" alt="8" src="https://user-images.githubusercontent.com/34975891/113426915-b3ab6180-9406-11eb-813e-85cb31549a35.png">

--------------------------------------------------------------------------------------------------------------------------------------

### 3. Logout

At the Home page, click on the Logout button to logout of your account.

<img width="1428" alt="8" src="https://user-images.githubusercontent.com/34975891/113426915-b3ab6180-9406-11eb-813e-85cb31549a35.png">

The home page would now show the Login and Sign Up buttons.

<img width="1428" alt="9" src="https://user-images.githubusercontent.com/34975891/113426965-c887f500-9406-11eb-9501-1eaa9855c1fc.png">

--------------------------------------------------------------------------------------------------------------------------------------

## Reusable Components

### 1. TextInput

Used in these files
- Home.tsx
- Login.tsx
- Signup.tsx

#### Example

<img width="407" alt="10" src="https://user-images.githubusercontent.com/34975891/113427378-7e534380-9407-11eb-874d-d5b4ba605c8b.png">

### 2. SocialMediaSignIn

Used in these files
- Login.tsx

#### Example

<img width="396" alt="11" src="https://user-images.githubusercontent.com/34975891/113427411-8b703280-9407-11eb-84d5-7fd40bcc59ef.png">

### 3. KeyFeatures

Used in these files
- Home.tsx

#### Example

<img width="421" alt="12" src="https://user-images.githubusercontent.com/34975891/113427455-9f1b9900-9407-11eb-9409-96ea64bd272c.png">

### 4. Footer

Used in these files
- Home.tsx
- Login.tsx
- Signup.tsx

#### Example

<img width="1268" alt="13" src="https://user-images.githubusercontent.com/34975891/113427482-ae024b80-9407-11eb-9dac-f4e84199e157.png">

--------------------------------------------------------------------------------------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
