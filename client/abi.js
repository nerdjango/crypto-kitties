var abi = {
    kittyContract: [{
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "kittenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "mumId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "dadId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "genes",
                    "type": "uint256"
                }
            ],
            "name": "Birth",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "CREATION_LIMIT_GEN0",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "approvedCatTokenIdToSpender",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "catList",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "genes",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "birthTime",
                    "type": "uint64"
                },
                {
                    "internalType": "uint32",
                    "name": "mumId",
                    "type": "uint32"
                },
                {
                    "internalType": "uint32",
                    "name": "dadId",
                    "type": "uint32"
                },
                {
                    "internalType": "uint32",
                    "name": "readyTime",
                    "type": "uint32"
                },
                {
                    "internalType": "uint16",
                    "name": "generation",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "catTokenIdToOwner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "gen0Counter",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "ownerToCatBalance",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{
                "internalType": "uint256",
                "name": "total",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [{
                "internalType": "string",
                "name": "tokenName",
                "type": "string"
            }],
            "stateMutability": "pure",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [{
                "internalType": "string",
                "name": "tokenSymbol",
                "type": "string"
            }],
            "stateMutability": "pure",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }],
            "name": "ownerOf",
            "outputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }],
            "name": "getApproved",
            "outputs": [{
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "bytes4",
                "name": "_interfaceId",
                "type": "bytes4"
            }],
            "name": "supportsInterface",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_genes",
                "type": "uint256"
            }],
            "name": "createCatGen0",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }],
            "name": "getCat",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "genes",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "birthTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "mumId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "dadId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "generation",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "getCatByOwner",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "result",
                "type": "uint256[]"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_dadId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_mumId",
                    "type": "uint256"
                }
            ],
            "name": "breed",
            "outputs": [{
                "internalType": "uint256",
                "name": "newDna",
                "type": "uint256"
            }],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    marketplace: [{
            "inputs": [{
                "internalType": "address",
                "name": "_kittyContractAddress",
                "type": "address"
            }],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": false,
                    "internalType": "string",
                    "name": "TxType",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "MarketTransaction",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "tokenIdToOffer",
            "outputs": [{
                    "internalType": "address payable",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "active",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "_kittyContractAddress",
                "type": "address"
            }],
            "name": "setKittyContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }],
            "name": "getOffer",
            "outputs": [{
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "active",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "getAllTokenOnSale",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "listOfOffers",
                "type": "uint256[]"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }],
            "name": "isOnSale",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "setOffer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }],
            "name": "removeOffer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }],
            "name": "buyKitty",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "payable": true
        }
    ]
}