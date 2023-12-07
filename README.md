# CareercampPlacementcell.github.io

# CareerCamp Connect App

I developed a web application called "CareerCamp Connect," a Placement Cell management system for a company. The main goal was to create an interface where employees could input data into the database and then download it in CSV format to compile various reports. A company constantly needs to download their data to compile different reports. You need to create an interface for the employees of this company to fill in the data into the database and then download it in CSV format. Team Career Camp wants to maintain a database of all the student interviews [only for their own use].

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used]


## Features
1. **Authentication System**
    - The web application had a secure sign-up and sign-in system exclusively for company employees. This ensured that only authorized users could access and manage the data.

2. **Student Database Management**
    - Employees could view and manage a list of students, including their batch, college, and placement status (placed or not placed). The application allowed adding new students to the database with their respective course scores, such as DSA Final Score, WebD Final Score, and React Final Score.

3. **Interview Scheduling**
    - The application provided a section to create and manage interviews, where employees could specify the company name and date for each interview.

4. **Student Allocation**
    - Employees had the ability to allocate students to specific interviews. This helped in organizing and tracking the interview process efficiently.

5. **Result Mapping**
    - The application had a feature to map the results of interviews for each student, indicating whether they passed, failed, were on hold, or didn't attempt the interview.

6. **External Jobs List**
    - Additionally, the application featured a minimalistic page that fetched real available jobs in India for React and Node.js using open APIs. The job details were retrieved from APIs such as GitHub Jobs API.

7. **CSV Data Export**
    - Lastly, employees could download a complete CSV file containing all the relevant data, including student ID, name, college, placement status, course scores, interview date, company name, and interview result. This export functionality made it easier for the company to compile reports.

## Getting Started
1. **Clone Git Repo**
    ```bash
    git clone https://github.com/SIDDH5320/CareercampPlacementcell.github.io.git
    ```

2. **Install NPM dependencies**
    ```bash
    npm install
    ```

3. **Set Up .env file**
    - Add MongoDB URL in the .env file.

4. **Start the App**
    ```bash
    npm start
    ```

### Prerequisites
- NodeJs Any Version

### Technologies Used
1. **Front-end**
    - HTML, CSS, Tailwind CSS, JavaScript: For creating the user interface and handling client-side interactions. For building a dynamic and responsive user interface, especially for the External Jobs List page.

2. **Back-end**
    - Node.js: For server-side development and handling API requests.
    - Express.js: As a framework to create the application's server-side routes and manage the HTTP requests and responses.
    - MongoDB: As the database to store and manage the student, interview, and result data.

3. **Authentication**
    - Passport.js: For implementing the authentication system and managing user sign-up and sign-in.

4. **CSV Export**
    - fast-csv: A Node.js library used to generate the CSV file with the required student and interview data.

5. **External API Integration**
    - Axios: A promise-based HTTP client for Node.js, used to fetch job data from the GitHub Jobs API and other open APIs.

6. **Deployment**
    - The application was deployed using cloud services like render, depending on the preferred platform.
