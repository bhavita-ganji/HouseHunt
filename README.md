# HouseHunt

## Overview

HouseHunt is a MERN Stack (MongoDB, Express.js, React.js, Node.js) web application developed for property rental management.

The application supports three types of users:

* Admin
* Owner
* Renter

Owners can add rental properties, renters can browse and book properties, and admins can manage users, properties, and bookings.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Role-Based Access Control

### Owner Module

* Owner Dashboard
* Add Property
* View Own Properties
* Manage Property Listings
* View Booking Requests

### Renter Module

* Renter Dashboard
* Browse Available Properties
* View Property Details
* Book Properties

### Admin Module

* Admin Dashboard
* View All Users
* View All Properties
* View All Bookings

---

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Vite

### Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt.js

### Database

* MongoDB Atlas
* Mongoose

---

## Project Structure

```text
HouseHunt
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middlewares
│   └── server.js
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
MONGO_URI=your_mongodb_connection_string
PORT=8000
JWT_SECRET=your_secret_key
```

---

## Run Backend

```bash
cd server
node server.js
```

Server runs on:

```text
http://localhost:8000
```

---

## Run Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Future Enhancements

* Property Image Upload
* Property Search & Filters
* Email Notifications
* Password Reset
* Payment Integration
* Responsive UI Design

---

## Author

**Bhavita Ganji**

B.Tech Computer Science Engineering

MERN Stack Capstone Project
