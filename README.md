# Uni List

This is a simple React application that demonstrates how to display tabular data and manipulate it in the front end using the `@tanstack/react-table` library.

## Getting Started

### Prerequisites

Before you can run this project, you need to have the following tools installed:
- [Node.js](https://nodejs.org/): This project is built using Node.js, so you'll need it to run the development server and install dependencies.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/nahyansharvin/uni-list.git
   cd uni-list
   
2. Install project dependencies:
   ```bash
   npm install
   
3. Start the development server:
   ```bash
   npm run dev

## Usage

### Displaying Data
The app displays tabular data using the @tanstack/react-table library. You'll see a table with columns for the University Name, Country, and Website. The data is initially populated with some sample rows from a demo API.

### Adding Data
You can add new data to the table by clicking the "Add" button. This adds a new row with "University Name", "Country" and "Website".
* The university name should be a string with a minimum of 8 characters.
* The Country Should be a valid name with only alphabets.
* The website should be a valid URL.

### Editing Data
To edit existing data, you can click the "Edit" button on a row, which will trigger an edit action. In the provided code, it changes the "University Name", "Country" and "Website" of the item to new values.
* The university name should be a string with a minimum of 8 characters.
* The Country Should be a valid name with only alphabets.
* The website should be a valid URL.

### Deleting Data
To delete a particular row, click on the "Delete" button on that row.

   
