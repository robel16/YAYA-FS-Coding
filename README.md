# **Yaya Wallet Dashboard**
## **Overview**
This Fullstack project is a simple dashboard for Yaya Wallet, allowing users to monitor their transactions. It fetches transaction data from Yaya Wallet's REST API and provides features both the frontend and backend is implemented but it is facing integration issues
## Technologies Used

- React.js
- Axios (for making HTTP requests)
- Tailwind CSS (for styling)
## **Status**
Both the frontend and backend components have been implemented separately, there wasn't enough time to thoroughly address all integration issues and implement all planned features.
## **Quality of Code and Solution i used**
### **Maintainability**
- Decomposed components: To ensure the project's maintainability, I decomposed complex components into smaller, reusable components. This makes it easier to understand, update, and debug the codebase.
- Modular structure: The project follows a modular structure, with separate folders for components, actions, and services. This organization facilitates code maintenance and scalability as the project grows.
- Clear naming conventions: Descriptive and consistent naming conventions were used throughout the project, making it easier for developers to understand the purpose of each component and function.

### **Simplicity**
- Minimalistic design: The frontend components were designed with simplicity in mind, focusing on essential functionality and avoiding unnecessary complexity. This improves user experience and makes the application easier to use.
- Concise logic: Backend logic was kept concise and focused, using  libraries and frameworks to handle common tasks

### **Structure**
- Component-based architecture: The frontend architecture follows a component-based approach, with each component responsible for a specific UI element or functionality. This modular structure promotes code reusability and scalability.
- Separation of concerns: The backend code is organized into separate modules, each handling a specific aspect of the application such as routing, data fetching, and security. This separation of concerns improves code readability and maintainability.

## **Integration Issues**
The integration between the frontend and backend is not functioning correctly. Currently, the frontend is unable to fetch data from the backend API due to issues with the request headers and URL parameters. and also there wasn't enough time to thoroughly address all integration issues and implement all planned features.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/robel16/YAYA-FS-Coding/tree/master
```
2.cd YAYA-FS-Coding

3. create ENV file in band past

 API_KEY = 'key-test_493e9539-3765-493a-864d-1082e2636168'; 
 API_SECRET='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5Ijoia2V5LXRlc3RfNDkzZTk1MzktMzc2NS00OTNhLTg2NGQtMTA4MmUyNjM2MTY4Iiwic2VjcmV0IjoiMDUyOTNjMGU1MDlhOWE4ODRiMDVhMWYwZjkzYjdiNjMzMmE1NDUwMSJ9.is7GgbMLZ_ZUT1He9DG1dtEs5CxfpkVlCco0Xo6mHQY';
 

4. cd Frontend

5. npm install

6. open another terminal and cd to the backend


7. npm install

8.## Open the Frontend in the browser   http://localhost:5173/
## RESULTS
## ** i have used some dummy data to illustrate how it looks **
![image](https://github.com/robel16/YAYA-FS-Coding/assets/99750963/c4c1b7ed-3571-4c9d-a67d-6e73b6d8b6ae)
## ** with Dummy data
![image](https://github.com/robel16/YAYA-FS-Coding/assets/99750963/66b92a30-a129-4b4c-9f45-fd83fab7a757)


