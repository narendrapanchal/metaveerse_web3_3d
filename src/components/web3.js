import { useState, useEffect } from 'react';
import Web3 from 'web3';

const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        if (window.ethereum) {
          const newWeb3 = new Web3(window.ethereum);

          await window.ethereum.request({ method: 'eth_requestAccounts' });

          const accounts = await newWeb3.eth.getAccounts();

          if (accounts.length > 0) {
            setWeb3(newWeb3);
            setAccount(accounts[0]);
          } else {
            console.warn('No accounts found. Please connect a wallet.');
          }
        } else {
          console.error('Web3 not found. Please install a wallet like MetaMask.');
        }
      } catch (error) {
        console.error('Error initializing Web3:', error);
      }
    };

    initWeb3();
  }, []);

  const connectWallet = async () => {
    try {
      if (web3) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          console.warn('No accounts found. Please connect a wallet.');
        }
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  return { account, connectWallet, disconnectWallet };
};

export { useWeb3 };
