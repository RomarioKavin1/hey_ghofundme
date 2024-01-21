const DEPLOYMENTS = {
  vaultImplementation: '0x03f67022442CB4dcdcf1e44f1C32B2bC208613AC',
  vaultFactory: '0x01C053A2222cf0b7c1AC0c828A268440a55aF7cF',
  ghoFundMeModule: '0x2BaBE53698ee80A7DB726AEd2A8aA94546448404',
  fanMintToken: '0xB29067d2f5C2e020B93a7881438d2D5b7dDF92CD',
  fanTradeToken: '0xf8179814BE9793a79e43c9bbe0feC001b23e2d74',
  polygonLINK: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
  sepoliaLINK: '0x779877A7B0D9E8603169DdbD7836e478b4624789',
  polygonSelector: '12532609583862916517',
  ethereumSelector: '16015286601757825753'
};

const VAULT_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_router',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'target',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'FailedToWithdrawEth',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'router',
        type: 'address'
      }
    ],
    name: 'InvalidRouter',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NothingToWithdraw',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'SenderNotAllowlisted',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'sourceChainSelector',
        type: 'uint64'
      }
    ],
    name: 'SourceChainNotAllowlisted',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'lensProfileId',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'moduleAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'chainSelector',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'rewardTokenAddress',
        type: 'address'
      }
    ],
    name: 'Initialized',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'sourceChainSelector',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    name: 'MessageReceived',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'destinationChainSelector',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'feeToken',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fees',
        type: 'uint256'
      }
    ],
    name: 'MessageSent',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: '_messageId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'subscriber',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'lensProfileId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountInGHO',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalFanTokensMinted',
        type: 'uint256'
      }
    ],
    name: 'SubscriptionInitiated',
    type: 'event'
  },
  {
    inputs: [],
    name: 'POLYGON_CHAIN_SELECTOR',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'SEPOLIA_CHAIN_SELECTOR',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    name: 'allowlistedDestinationChains',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'allowlistedSenders',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    name: 'allowlistedSourceChains',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'messageId',
            type: 'bytes32'
          },
          {
            internalType: 'uint64',
            name: 'sourceChainSelector',
            type: 'uint64'
          },
          {
            internalType: 'bytes',
            name: 'sender',
            type: 'bytes'
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct Client.EVMTokenAmount[]',
            name: 'destTokenAmounts',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct Client.Any2EVMMessage',
        name: 'message',
        type: 'tuple'
      }
    ],
    name: 'ccipReceive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'claimWindowDuration',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getLastReceivedMessageDetails',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getRouter',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'creator',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_link',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'lensProfileId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'moduleAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_rewardTokenAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_mintPriceInGHO',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_minimumMintAmount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_claimWindowDuration',
        type: 'uint256'
      },
      {
        internalType: 'uint64',
        name: '_chainSelector',
        type: 'uint64'
      }
    ],
    name: 'initialize',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'latestClaimWindow',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'minimumMintAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'mintPriceInGHO',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'rewardTokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'lensProfileId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'amountInGHO',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32'
      }
    ],
    name: 'subscribe',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amountInGHO',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32'
      }
    ],
    name: 'testPermit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalClaimmableFunds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalLockedFunds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'userTotalLockedFunds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vaultFactory',
    outputs: [
      {
        internalType: 'contract IGHOFundMeVaultFactory',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_beneficiary',
        type: 'address'
      }
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_beneficiary',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address'
      }
    ],
    name: 'withdrawToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    stateMutability: 'payable',
    type: 'receive'
  }
];

const VAULT_FACTORY_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vaultImplementation',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_link',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_moduleAddress',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'target',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'FailedToWithdrawEth',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'router',
        type: 'address'
      }
    ],
    name: 'InvalidRouter',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'currentBalance',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'calculatedFees',
        type: 'uint256'
      }
    ],
    name: 'NotEnoughBalance',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NothingToWithdraw',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'SenderNotAllowlisted',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'sourceChainSelector',
        type: 'uint64'
      }
    ],
    name: 'SourceChainNotAllowlisted',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'sourceChainSelector',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    name: 'MessageReceived',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'destinationChainSelector',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'feeToken',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fees',
        type: 'uint256'
      }
    ],
    name: 'MessageSent',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_crossChainMessage',
        type: 'address'
      }
    ],
    name: 'VaultDeployed',
    type: 'event'
  },
  {
    inputs: [],
    name: 'GHO_TOKEN_ADDRESS',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'POLYGON_CHAIN_SELECTOR',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'SEPOLIA_CHAIN_SELECTOR',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_moduleAddress',
        type: 'address'
      }
    ],
    name: 'addModuleAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    name: 'allowlistedDestinationChains',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'allowlistedSenders',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    name: 'allowlistedSourceChains',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'messageId',
            type: 'bytes32'
          },
          {
            internalType: 'uint64',
            name: 'sourceChainSelector',
            type: 'uint64'
          },
          {
            internalType: 'bytes',
            name: 'sender',
            type: 'bytes'
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct Client.EVMTokenAmount[]',
            name: 'destTokenAmounts',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct Client.Any2EVMMessage',
        name: 'message',
        type: 'tuple'
      }
    ],
    name: 'ccipReceive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_destinationChainSelector',
        type: 'uint64'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'getFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getLastReceivedMessageDetails',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getRouter',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'moduleAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_destinationChainSelector',
        type: 'uint64'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'subscribe',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vaultImplementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_beneficiary',
        type: 'address'
      }
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_beneficiary',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address'
      }
    ],
    name: 'withdrawToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    stateMutability: 'payable',
    type: 'receive'
  }
];

const MODULE_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vaultImplementation',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_link',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'target',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'FailedToWithdrawEth',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InitParamsInvalid',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'router',
        type: 'address'
      }
    ],
    name: 'InvalidRouter',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'currentBalance',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'calculatedFees',
        type: 'uint256'
      }
    ],
    name: 'NotEnoughBalance',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotHub',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NothingToWithdraw',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'SenderNotAllowlisted',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'sourceChainSelector',
        type: 'uint64'
      }
    ],
    name: 'SourceChainNotAllowlisted',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lensProfileId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'subscriber',
        type: 'address'
      }
    ],
    name: 'BurnedFanToken',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lensProfileId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'creator',
        type: 'address'
      }
    ],
    name: 'FanTokenCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'sourceChainSelector',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    name: 'MessageReceived',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'destinationChainSelector',
        type: 'uint64'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'feeToken',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fees',
        type: 'uint256'
      }
    ],
    name: 'MessageSent',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lensProfileId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'subscriber',
        type: 'address'
      }
    ],
    name: 'MintedFanToken',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    inputs: [],
    name: 'HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'LENS_HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'POLYGON_CHAIN_SELECTOR',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'SEPOLIA_CHAIN_SELECTOR',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'accounts',
    outputs: [
      {
        internalType: 'uint256',
        name: 'lensProfileId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'creator',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address'
      },
      {
        internalType: 'bytes32',
        name: 'createAccountMessageId',
        type: 'bytes32'
      },
      {
        internalType: 'bool',
        name: 'exists',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    name: 'allowlistedDestinationChains',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'allowlistedSenders',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64'
      }
    ],
    name: 'allowlistedSourceChains',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'messageId',
            type: 'bytes32'
          },
          {
            internalType: 'uint64',
            name: 'sourceChainSelector',
            type: 'uint64'
          },
          {
            internalType: 'bytes',
            name: 'sender',
            type: 'bytes'
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            internalType: 'struct Client.EVMTokenAmount[]',
            name: 'destTokenAmounts',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct Client.Any2EVMMessage',
        name: 'message',
        type: 'tuple'
      }
    ],
    name: 'ccipReceive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'fanMintTokenName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fanTradeTokenName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fanMintTokenSymbol',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'fanTradeTokenSymbol',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'mintTokenURI',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'tradeTokenURI',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'lensProfileId',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'mintPriceInGHO',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'minimumMintAmount',
            type: 'uint256'
          }
        ],
        internalType: 'struct GHOFundMeModule.CreateTokenInputParams',
        name: 'params',
        type: 'tuple'
      }
    ],
    name: 'createFanToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'fanMintToken',
    outputs: [
      {
        internalType: 'contract IFanToken',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'fanTradeToken',
    outputs: [
      {
        internalType: 'contract IFanToken',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'followNFTTokenId',
        type: 'uint256'
      }
    ],
    name: 'followModuleTransferHook',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_lensProfileId',
        type: 'uint256'
      },
      {
        internalType: 'uint64',
        name: '_destinationChainSelector',
        type: 'uint64'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'getFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getLastReceivedMessageDetails',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getLatestTokenId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getRouter',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'lensProfileId',
        type: 'uint256'
      }
    ],
    name: 'getVaultAddress',
    outputs: [
      {
        internalType: 'address',
        name: '_contractAddress',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'get_moduleMetadataURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    name: 'initializeFollowModule',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'follower',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'followNFTTokenId',
        type: 'uint256'
      }
    ],
    name: 'isFollowing',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'follower',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    name: 'processFollow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'uri',
        type: 'string'
      }
    ],
    name: 'setModuleMetadatURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vaultFactory',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'mintToken',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'tradeToken',
        type: 'address'
      }
    ],
    name: 'setupModule',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_lensProfileId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_tokenAmount',
        type: 'uint256'
      }
    ],
    name: 'terminateSubscription',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vaultFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vaultImplementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_beneficiary',
        type: 'address'
      }
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_beneficiary',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address'
      }
    ],
    name: 'withdrawToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    stateMutability: 'payable',
    type: 'receive'
  }
];

const LINK_ABI = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      },
      { indexed: false, internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' }
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }
    ],
    name: 'decreaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }
    ],
    name: 'decreaseApproval',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'addedValue', type: 'uint256' }
    ],
    name: 'increaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'addedValue', type: 'uint256' }
    ],
    name: 'increaseApproval',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'transfer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'transferAndCall',
    outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'transferFrom',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'typeAndVersion',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'pure',
    type: 'function'
  }
];
export { DEPLOYMENTS, VAULT_ABI, VAULT_FACTORY_ABI, MODULE_ABI, LINK_ABI };
