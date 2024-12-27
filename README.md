# Guide for Frontend Setup and Execution

This README is designed to help you set up and run the frontend for the "ELJAMUNI - Interactive Menu for Restaurants" project. Follow these detailed steps to ensure everything works correctly.

## Prerequisites

Before starting, make sure you meet the following requirements:

1. **Node.js** and **npm** installed on your system.
   - Download Node.js from [Node.js Downloads](https://nodejs.org/).
   - During installation, ensure `npm` (Node Package Manager) is included.

   - Verify the installation by running:
     ```bash
     node -v
     npm -v
     ```

2. A recommended text editor, such as:
   - [Visual Studio Code](https://code.visualstudio.com/), ideal for working with frontend projects.

3. Access to the project files cloned from the repository on your local machine.

## Clone the Repository

1. Open your terminal and run the following command:
   ```bash
   git clone git@gitlab.com:jala-university1/cohort-4/oficial-es-desarrollo-de-software-1-iso-115-grupo-a/secci-n-b/eljamuni.git
   ```
   This will download all project files to your local machine.

2. Navigate to the frontend directory:
   ```bash
   cd /path_to_frontend_repository
   ```

## Install Dependencies

1. In the terminal, ensure you are inside the frontend directory.

2. Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```
   This will download and install the libraries and packages required for the project to function.

## Environment Setup

1. Ensure that the `.env` file is correctly configured in the frontend directory. If it does not exist, create one and add the necessary variables, for example:
   ```env
   REACT_APP_API_URL=http://localhost:8000
   ```
   This variable defines the base URL of the backend to which the frontend will connect.

## Run the Project

1. To start the development server, run:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```
   Here you can interact with the application in real-time.

## Verify Functionality

1. Ensure the backend is running and accessible through the URL configured in `.env`.

2. Navigate through the different sections of the interactive menu:
    - **Home Page**: Access an overview of the restaurant and featured options.
    - **Promotions Page**: View available offers and highlighted payment methods.
    - **Main Menu Page**: Explore the available categories.
    - **Specific Categories**: Examine products within each category.
    - **Cart Page**: Add products to the cart and verify totals.

## Common Errors and Solutions

1. **Error: "Command not found: npm"**
   - Solution: Verify that Node.js and npm are correctly installed by running:
     ```bash
     node -v
     npm -v
     ```
   - If they are not installed, download them from [Node.js Downloads](https://nodejs.org/).

2. **Error: "Failed to connect to API"**
   - Solution: Ensure the backend is running at the URL configured in `.env`.

If you encounter issues or need support, open a ticket in the project's repository or contact the system administrator.
