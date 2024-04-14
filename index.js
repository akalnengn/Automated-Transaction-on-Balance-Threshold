const { getBalance, sendTransaction } = require('ethereum-wallet-interactor');

// Account details
const walletAddress = 'your_wallet_address';
const privateKey = 'your_private_key';
const recipientAddress = 'recipient_address';
const threshold = 10; // ETH

// Function to send ETH automatically when balance exceeds a certain threshold
const automatedTransaction = async () => {
    const balance = await getBalance(walletAddress);
    if (balance > threshold) {
        sendTransaction(walletAddress, privateKey, recipientAddress, '1'); // Send 1 ETH
    }
};

automatedTransaction();
