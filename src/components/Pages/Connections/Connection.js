import { ethers } from "ethers";
import Contract from "./ConnectionABI.json";

if (window.ethereum) {
  const gameAddress = "0x22BE3A11460FB0d40DcF34c45211F3b3d0ecc894";
  // const gameAddress = "0x7d7579e68bfD0230781656784F3A32eB58dC9c18";
 
  // const tokenAddress = "0x517416E57aB2ea3a9f388793d9678F86FAcF149E";
  const contractAbi =[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "arrayDelegatorsList",
      "outputs": [
        {
          "internalType": "address",
          "name": "validatorAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "delegatorAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "arrayValidatorsList",
      "outputs": [
        {
          "internalType": "address",
          "name": "_validatorsAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "delegatorStakeBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getContractBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDelegatorsDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "validatorAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "delegatorAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "ID",
              "type": "uint256"
            }
          ],
          "internalType": "struct Staking.ActiveDelegatorsList[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_validatorsAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getDelegatorsDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "validatorAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "delegatorAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "stakeAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256"
            }
          ],
          "internalType": "struct Staking.Delegator",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        }
      ],
      "name": "getValidatorsDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "validatorAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "stakeAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stakeStartTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stakeEndTime",
              "type": "uint256"
            }
          ],
          "internalType": "struct Staking.Validators",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getValidatorsList",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "_validatorsAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "ID",
              "type": "uint256"
            }
          ],
          "internalType": "struct Staking.ActiveValidatorsList[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minStakeAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "minValidator",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stakeDxt",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "stakeValidatorBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_validatorAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "stakeValidators",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "unStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  var web = new ethers.Contract(gameAddress, contractAbi, signer);
  console.log(web,"Hello connection");
  console.log(signer);
}
export default web;