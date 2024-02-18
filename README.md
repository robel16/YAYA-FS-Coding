# Yaya Wallet Dashboard

This project is a simple dashboard for Yaya Wallet, allowing users to monitor their transactions. It fetches transaction data from Yaya Wallet's REST API and provides features such as pagination and search functionality.

## Features

- Display a tabular list of transactions with the following fields:
  - Transaction ID
  - Sender
  - Receiver
  - Amount
  - Currency
  - Cause
  - Created At
- Pagination support (using "p" as a query parameter to specify page number)
- Search transactions by sender account name, receiver account name, cause, or ID
- Visual indication of outgoing and incoming transactions in each table row

## Technologies Used

- React.js
- Axios (for making HTTP requests)
- Tailwind CSS (for styling)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

```bash
git clone <repository_url>
```
