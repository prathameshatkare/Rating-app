# FullStack Intern Coding Challenge

## Tech Stack
- **Backend:** Express.js / Loopback / Nest.js  
- **Database:** PostgreSQL / MySQL  
- **Frontend:** React.js  

---

## Project Overview
This web application allows users to submit ratings for stores registered on the platform. Ratings range from **1 to 5**.  

A **single login system** is implemented for all users. Based on their roles, users have access to different functionalities after logging in.  

Normal users can sign up via a registration page.  

---

## User Roles
1. **System Administrator**  
2. **Normal User**  
3. **Store Owner**  

---

## Functionalities

### System Administrator
- Add new stores, normal users, and admin users.
- Access a dashboard displaying:
  - Total number of users
  - Total number of stores
  - Total number of submitted ratings
- Add new users with the following details:
  - Name, Email, Password, Address
- View a list of stores with:
  - Name, Email, Address, Rating
- View a list of normal and admin users with:
  - Name, Email, Address, Role
- Apply filters on listings based on Name, Email, Address, and Role
- View details of all users, including ratings for Store Owners
- Logout from the system

### Normal User
- Sign up and log in to the platform
- Signup form fields:
  - Name, Email, Address, Password
- Update password after logging in
- View a list of all registered stores
- Search for stores by Name and Address
- Store listings display:
  - Store Name, Address, Overall Rating, User's Submitted Rating
  - Option to submit or modify rating
- Submit ratings (1-5) for individual stores
- Logout from the system

### Store Owner
- Log in to the platform
- Update password after logging in
- Dashboard functionalities:
  - View users who submitted ratings for their store
  - See the average rating of their store
- Logout from the system

---

## Form Validations
- **Name:** Min 20 characters, Max 60 characters  
- **Address:** Max 400 characters  
- **Password:** 8-16 characters, must include at least one uppercase letter and one special character  
- **Email:** Standard email validation  

---

## Additional Notes
- All tables support sorting (ascending/descending) for key fields like Name, Email, etc.  
- Best practices are followed for both frontend and backend development  
- Database schema design follows best practices  

---

## How to Run

1. Clone the repository:  
```bash
git clone https://github.com/prathameshatkare/Rating-app.git
```

2. Install backend dependencies:  
```bash
cd store-ratings-backend
npm install
```

3. Configure the database and run migrations.

4. Start the backend server:  
```bash
npm start
```

5. Install frontend dependencies:  
```bash
cd store-ratings-frontend
npm install
```

6. Start the frontend server:  
```bash
npm start
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## License
This project is licensed under the MIT License.
