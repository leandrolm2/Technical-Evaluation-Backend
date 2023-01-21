# Technical Evaluation Backend

## Hey guys! 👋

This project aims to test the candidate's ability to develop a NodeJS application that can efficiently distribute leads to salespeople based on dynamic sorting and limits.

## More About the project!

## Task 🦾
The candidate is expected to develop a NodeJS application that connects to a MongoDB database and retrieves leads and salespeople data. The application should then assign the leads to the correct salespeople based on the following requirements:

- Assign leads to the salesperson who has been without receiving leads for the longest time (as per the sales.lastReceivedDate field)
- Assign leads to the salesperson who has not yet reached their limit (as per the sales.limiter field) and keep track of the assigned leads using the sales.receivedLeads field
- Disregard salespeople who have reached their limit for lead distribution.
 
---
## Tech involved 💻
- mongoose
- Typescript
- express

## Note 📝

Please note that this project is currently under evaluation and no pull requests will be approved.

---
## Let's get started! 🚀
- Make sure you have NodeJS and MongoDB installed on your machine.
- Clone the repository and run yarn to install the required dependencies.
- Start the application by running yarn dev.
- Use yarn seed to populate your database with sample data.
- Use yarn rollback to remove the sample data from the database.