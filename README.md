# Multi-User-Login
# Project README

## Simple Login System

This project is a basic implementation of a login system using HTML, JavaScript, and Bootstrap. The purpose of this system is to demonstrate a simple user authentication process with predefined user credentials.

### Project Structure

The project consists of two main files:

1. **index.html**: This HTML file defines the structure of the login page. It includes form elements for the user to input their username and password.

2. **script.js**: The JavaScript file contains the logic for user authentication. It checks the entered credentials against a predefined JSON array containing user types (admin, user) and their respective passwords. Upon successful authentication, the user is redirected to a specified webpage.

### How to Use

To use this login system, follow these steps:

1. Open the `index.html` file in a web browser.
2. Enter the predefined username and password for either the "admin" or "user" type.
3. Click the "Submit" button.

### User Credentials

The project uses a simple JSON array to store user credentials. The credentials are as follows:

- **Admin:**
  - Username: admin
  - Password: admin

- **User:**
  - Username: user
  - Password: user

### Implementation Details

- **Bootstrap**: The project utilizes Bootstrap (v5.0.2) for styling and responsiveness. The CDN link is included in the `<head>` section of the HTML file.

- **JavaScript Logic**: The `script.js` file contains the logic for checking user credentials. Upon successful authentication, the user is redirected to a predefined webpage using `window.location.href`.

### Note

This project is a basic demonstration and should not be used in a production environment. For real-world applications, it is recommended to implement more secure authentication methods and server-side validation.

