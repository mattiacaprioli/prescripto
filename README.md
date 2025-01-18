# Doctor Appointment Booking System (MERN Stack)

## Project Description

The **Doctor Appointment Booking System** is a full-stack web platform designed to streamline medical appointment management. Built using the MERN stack (MongoDB, Node.js, Express.js, React.js and Tailwind CSS), this application enables users to efficiently manage medical appointments with three levels of authentication: patients, doctors, and administrators. The system can be used by individual doctors or healthcare facilities.

<img src="https://github.com/mattiacaprioli/prescripto/blob/main/frontend/src/assets/bannerPrescripto.png" alt="Prescripto Banner" width="600" />

## Key Features

### **For Patients:**
- Secure registration and authentication.
- Book appointments with available doctors.
- Manage and view booked appointments.
- Online payment for appointment fees.

### **For Doctors:**
- Access to a dedicated dashboard.
- View received appointments and earnings.
- Update their professional profile.

### **For Administrators:**
- Manage all users (patients and doctors).
- Supervise and manage appointments.
- Oversee doctor profiles.

## Technical Features
- **Frontend:** React.js for a modern and responsive user interface.
- **Backend:** Node.js and Express.js for request handling and server logic.
- **Database:** MongoDB for storing user, appointment, and payment data.
- **Authentication:** Secure user management with multiple access levels (JWT).
- **Online Payment Integration:** Payment gateway to simplify transaction of appointment fees.

## Potential Use Cases
- Portfolio project for personal development.
- Real-world applications for doctors or clinics.
- Academic project for university courses.

---

## How to Run the Project

### **Prerequisites**
- Node.js installed on your machine.
- MongoDB configured (locally or on a cloud service like MongoDB Atlas).
- Account for a payment gateway (e.g., Stripe or PayPal).

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/doctor-appointment-system.git
   cd doctor-appointment-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables by creating a `.env` file in the root directory:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the backend server:
   ```bash
   npm run server
   ```

5. Start the React client:
   ```bash
   cd client
   npm install
   npm start
   ```

---

## Contributions
Contributions to this project are welcome. If you wish to enhance the project, feel free to fork the repository and submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).
