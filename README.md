# Automated Transaction on Balance Threshold

This Node.js application utilizes the `ethereum-wallet-interactor` library to automatically send an Ethereum transaction when the wallet balance exceeds a predefined threshold. It's designed to help users or businesses maintain a certain level of ETH in their wallets, automatically transferring excess funds to a specified recipient address.

## Features

- **Automatic Transactions:** Automatically sends ETH when the wallet balance exceeds a specified threshold.
- **Customizable Threshold and Recipient:** Easily configure the balance threshold and recipient address.
- **Secure:** Uses environment variables to safely store sensitive information such as wallet addresses and private keys.

## Prerequisites

- Node.js (v14.0.0 or higher)
- An Ethereum wallet with some ETH for testing.
- Private key access for the Ethereum wallet.

## Installation

1. Clone the repository:

git clone https://github.com/yourusername/automated-transaction-on-balance-threshold.git


2. Navigate to the project directory:

cd automated-transaction-on-balance-threshold


3. Install necessary dependencies:

npm install


4. Set up your environment variables:
Create a `.env` file in the root of your project and add the following lines:

WALLET_ADDRESS=your_wallet_address_here
PRIVATE_KEY=your_private_key_here
RECIPIENT_ADDRESS=recipient_wallet_address_here

## Usage

To run the application, execute the following command in your terminal:


The script will continuously monitor the wallet balance. Once it detects that the balance is above the specified threshold, it will automatically send 1 ETH to the recipient address and log the transaction.

## Configuration

To change the threshold and the amount sent, modify the `threshold` and `amount` variables in the `index.js` file according to your needs:

const threshold = 10; // Balance threshold in ETH
const amountToSend = '1'; // Amount of ETH to send when threshold is exceeded


## Security Note

Ensure your private key is stored securely and never expose it in your code or online. Always use environment variables or secure vault solutions to manage sensitive data.

## Contributing

Contributions are welcome! If you have suggestions for improving this application, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
