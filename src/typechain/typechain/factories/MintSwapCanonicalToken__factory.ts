/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MintSwapCanonicalToken, MintSwapCanonicalTokenInterface } from "../MintSwapCanonicalToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bridge",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supplyCap",
        type: "uint256",
      },
    ],
    name: "BridgeSupplyCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
    ],
    name: "TokenSwapCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bridges",
    outputs: [
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridgeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_swapCap",
        type: "uint256",
      },
    ],
    name: "setBridgeTokenSwapCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridgeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "swapBridgeForCanonical",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridgeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "swapCanonicalForBridge",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "swapSupplies",
    outputs: [
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridge",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cap",
        type: "uint256",
      },
    ],
    name: "updateBridgeSupplyCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001aa338038062001aa3833981016040819052620000349162000252565b8282828282816003908051906020019062000051929190620000df565b50805162000067906004906020840190620000df565b5050506200007b336200008d60201b60201c565b60ff1660805250620003149350505050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ed90620002d7565b90600052602060002090601f0160209004810192826200011157600085556200015c565b82601f106200012c57805160ff19168380011785556200015c565b828001600101855582156200015c579182015b828111156200015c5782518255916020019190600101906200013f565b506200016a9291506200016e565b5090565b5b808211156200016a57600081556001016200016f565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001ad57600080fd5b81516001600160401b0380821115620001ca57620001ca62000185565b604051601f8301601f19908116603f01168101908282118183101715620001f557620001f562000185565b816040528381526020925086838588010111156200021257600080fd5b600091505b8382101562000236578582018301518183018401529082019062000217565b83821115620002485760008385830101525b9695505050505050565b6000806000606084860312156200026857600080fd5b83516001600160401b03808211156200028057600080fd5b6200028e878388016200019b565b94506020860151915080821115620002a557600080fd5b50620002b4868287016200019b565b925050604084015160ff81168114620002cc57600080fd5b809150509250925092565b600181811c90821680620002ec57607f821691505b602082108114156200030e57634e487b7160e01b600052602260045260246000fd5b50919050565b60805161177362000330600039600061022101526117736000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806379cc6790116100e3578063a9059cbb1161008c578063dd62ed3e11610066578063dd62ed3e146103aa578063f2fde38b146103e3578063f716932e146103f657600080fd5b8063a9059cbb1461035d578063cd04611914610370578063ced67f0c1461038357600080fd5b806395d89b41116100bd57806395d89b41146103425780639dc29fac146102fe578063a457c2d71461034a57600080fd5b806379cc6790146102fe578063893d20e8146103115780638da5cb5b1461033157600080fd5b806334faea1b1161014557806342966c681161011f57806342966c68146102ad5780634ce2f71a146102c057806370a08231146102d557600080fd5b806334faea1b1461024b578063395093511461028757806340c10f191461029a57600080fd5b806318160ddd1161017657806318160ddd146101ff57806323b872dd14610207578063313ce5671461021a57600080fd5b806306fdde031461019d578063095ea7b3146101bb57806313f1a4a4146101de575b600080fd5b6101a5610409565b6040516101b29190611563565b60405180910390f35b6101ce6101c93660046115b2565b61049b565b60405190151581526020016101b2565b6101f16101ec3660046115b2565b6104b3565b6040519081526020016101b2565b6002546101f1565b6101ce6102153660046115dc565b61055e565b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101b2565b610272610259366004611618565b6007602052600090815260409020805460019091015482565b604080519283526020830191909152016101b2565b6101ce6102953660046115b2565b610584565b6101ce6102a83660046115b2565b6105c3565b6101ce6102bb366004611633565b610698565b6102d36102ce3660046115b2565b6106ac565b005b6101f16102e3366004611618565b6001600160a01b031660009081526020819052604090205490565b6101ce61030c3660046115b2565b61076e565b61031961077a565b6040516001600160a01b0390911681526020016101b2565b6005546001600160a01b0316610319565b6101a5610793565b6101ce6103583660046115b2565b6107a2565b6101ce61036b3660046115b2565b610857565b6102d361037e3660046115b2565b610865565b610272610391366004611618565b6006602052600090815260409020805460019091015482565b6101f16103b836600461164c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102d36103f1366004611618565b61091f565b6101f16104043660046115b2565b610a10565b6060600380546104189061167f565b80601f01602080910402602001604051908101604052809291908181526020018280546104449061167f565b80156104915780601f1061046657610100808354040283529160200191610491565b820191906000526020600020905b81548152906001019060200180831161047457829003601f168201915b5050505050905090565b6000336104a9818585610b0e565b5060019392505050565b6001600160a01b0382166000908152600760205260408120805461051e5760405162461bcd60e51b815260206004820152601460248201527f696e76616c69642062726964676520746f6b656e00000000000000000000000060448201526064015b60405180910390fd5b8281600101600082825461053291906116d0565b9091555061054290503384610c33565b6105566001600160a01b0385163385610d7e565b509092915050565b60003361056c858285610e0e565b610577858585610ea0565b60019150505b9392505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906104a990829086906105be9087906116e7565b610b0e565b33600090815260066020526040812080546106205760405162461bcd60e51b815260206004820152600e60248201527f696e76616c69642063616c6c65720000000000000000000000000000000000006044820152606401610515565b8281600101600082825461063491906116e7565b909155505080546001820154111561068e5760405162461bcd60e51b815260206004820152601960248201527f657863656564732062726964676520737570706c7920636170000000000000006044820152606401610515565b6104a9848461109d565b60006106a43383610c33565b506001919050565b336106bf6005546001600160a01b031690565b6001600160a01b0316146107155760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610515565b6001600160a01b038216600081815260066020908152604091829020849055815192835282018390527f59e1e4348943de408b89af8ab71e502ea722dd41efd1ff4a3548c60e83e91c6091015b60405180910390a15050565b600061057d838361117c565b600061078e6005546001600160a01b031690565b905090565b6060600480546104189061167f565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091908381101561083f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610515565b61084c8286868403610b0e565b506001949350505050565b6000336104a9818585610ea0565b336108786005546001600160a01b031690565b6001600160a01b0316146108ce5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610515565b6001600160a01b038216600081815260076020908152604091829020849055815192835282018390527f51c7b3899924578d835c066303e3f765c25fea17d7b18840cd109a90f5c5601f9101610762565b336109326005546001600160a01b031690565b6001600160a01b0316146109885760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610515565b6001600160a01b038116610a045760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610515565b610a0d81611218565b50565b6001600160a01b03821660009081526007602052604081208054610a765760405162461bcd60e51b815260206004820152601460248201527f696e76616c69642062726964676520746f6b656e0000000000000000000000006044820152606401610515565b80546001820154610a889085906116e7565b10610ad55760405162461bcd60e51b815260206004820152600f60248201527f65786365656420737761702063617000000000000000000000000000000000006044820152606401610515565b82816001016000828254610ae991906116e7565b90915550610af99050338461109d565b6105566001600160a01b038516333086611282565b6001600160a01b038316610b705760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610515565b6001600160a01b038216610bd15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610515565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038216610c935760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610515565b6001600160a01b03821660009081526020819052604090205481811015610d075760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610515565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610d369084906116d0565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610c26565b505050565b6040516001600160a01b038316602482015260448101829052610d7990849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526112ba565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610e9a5781811015610e8d5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610515565b610e9a8484848403610b0e565b50505050565b6001600160a01b038316610f1c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610515565b6001600160a01b038216610f7e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610515565b6001600160a01b0383166000908152602081905260409020548181101561100d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610515565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906110449084906116e7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161109091815260200190565b60405180910390a3610e9a565b6001600160a01b0382166110f35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610515565b806002600082825461110591906116e7565b90915550506001600160a01b038216600090815260208190526040812080548392906111329084906116e7565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b336000908152600660205260408120805415158061119e575060008160010154115b156112035782816001015410156111f75760405162461bcd60e51b815260206004820152601c60248201527f6578636565647320627269646765206d696e74656420616d6f756e74000000006044820152606401610515565b60018101805484900390555b61120e843385610e0e565b6104a98484610c33565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040516001600160a01b0380851660248301528316604482015260648101829052610e9a9085906323b872dd60e01b90608401610daa565b600061130f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661139f9092919063ffffffff16565b805190915015610d79578080602001905181019061132d91906116ff565b610d795760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610515565b60606113ae84846000856113b6565b949350505050565b60608247101561142e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610515565b6001600160a01b0385163b6114855760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610515565b600080866001600160a01b031685876040516114a19190611721565b60006040518083038185875af1925050503d80600081146114de576040519150601f19603f3d011682016040523d82523d6000602084013e6114e3565b606091505b50915091506114f38282866114fe565b979650505050505050565b6060831561150d57508161057d565b82511561151d5782518084602001fd5b8160405162461bcd60e51b81526004016105159190611563565b60005b8381101561155257818101518382015260200161153a565b83811115610e9a5750506000910152565b6020815260008251806020840152611582816040850160208701611537565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146115ad57600080fd5b919050565b600080604083850312156115c557600080fd5b6115ce83611596565b946020939093013593505050565b6000806000606084860312156115f157600080fd5b6115fa84611596565b925061160860208501611596565b9150604084013590509250925092565b60006020828403121561162a57600080fd5b61057d82611596565b60006020828403121561164557600080fd5b5035919050565b6000806040838503121561165f57600080fd5b61166883611596565b915061167660208401611596565b90509250929050565b600181811c9082168061169357607f821691505b602082108114156116b457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156116e2576116e26116ba565b500390565b600082198211156116fa576116fa6116ba565b500190565b60006020828403121561171157600080fd5b8151801515811461057d57600080fd5b60008251611733818460208701611537565b919091019291505056fea264697066735822122003f059da38bf107f3e79ba470fd7a73fa9632b2c9cd27a3fb40020b699b7430d64736f6c63430008090033";

type MintSwapCanonicalTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintSwapCanonicalTokenConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintSwapCanonicalToken__factory extends ContractFactory {
  constructor(...args: MintSwapCanonicalTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MintSwapCanonicalToken";
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MintSwapCanonicalToken> {
    return super.deploy(name_, symbol_, decimals_, overrides || {}) as Promise<MintSwapCanonicalToken>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, decimals_, overrides || {});
  }
  attach(address: string): MintSwapCanonicalToken {
    return super.attach(address) as MintSwapCanonicalToken;
  }
  connect(signer: Signer): MintSwapCanonicalToken__factory {
    return super.connect(signer) as MintSwapCanonicalToken__factory;
  }
  static readonly contractName: "MintSwapCanonicalToken";
  public readonly contractName: "MintSwapCanonicalToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintSwapCanonicalTokenInterface {
    return new utils.Interface(_abi) as MintSwapCanonicalTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MintSwapCanonicalToken {
    return new Contract(address, _abi, signerOrProvider) as MintSwapCanonicalToken;
  }
}