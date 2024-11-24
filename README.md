# LearnLingo App (Frontend)

## Project Overview

The application is designed for a company that offers online language learning
services with teachers.

### Key Features

- **Registration Form**: Enables users to create an account on the platform.
- **Login Form**: Allows existing users to sign in to their accounts.
- **Home Page**: Features the company’s advantages and a call-to-action link
  that redirects users to the Teachers page.
  ![Home page](https://github.com/Natalia-Kalashnikova/LearnLingo/blob/main/src/assets/Home-page.jpg)
- **Teachers Page**: Lists available teachers with descriptions of the languages
  they teach, the proficiency levels of students they work with, and their
  hourly rates. (location, body type, amenities).
  ![Catalog page](https://github.com/Natalia-Kalashnikova/LearnLingo/blob/main/src/assets/Catalog.jpg)
- **Trial Lesson Booking Form**: Provides users with the option to book a trial
  lesson with a selected teacher.
  ![Booking Form](https://github.com/Natalia-Kalashnikova/LearnLingo/blob/main/src/assets/Booking.jpg)
  - **Favorites Page**: A private page where users can view the teachers they
    have added to their "favorites" list.
    ![Favorites Page](https://github.com/Natalia-Kalashnikova/LearnLingo/blob/main/src/assets/Favorites.jpg)

## Technology Stack

Technology Stack

- **React**: For building the user interface.
- **Vite**: For project bundling and local server setup.
- **Redux Toolkit**: For state management.
- **Firebase**: For user authentication and data storage.
- **Formik**: For handling forms and validation.
- **Yup**: For form validation schema.
- **React Router DOM**: For navigation between pages.
- **React-Toastify**: For displaying notifications.
- **React-Select**: For customizable dropdown menus.
- **React-Loader-Spinner**: For displaying loading indicators.

## Getting Started

### Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js**
- **npm**

### Steps to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/Natalia-Kalashnikova/LearnLingo
   ```
2. **Install dependencies**
   ```bash
   cd learnlingo
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Build the project for production**
   ```bash
   npm run build
   ```
5. **Preview the production build**
   ```bash
   npm run preview
   ```
6. **Run code linting**
   ```bash
   npm run lint
   ```

## Conclusion

LearnLingo is a user-friendly and feature-rich platform designed to connect
learners with language teachers. With easy navigation and the ability to save
favorite teachers, it offers a streamlined experience for online language
learning.
