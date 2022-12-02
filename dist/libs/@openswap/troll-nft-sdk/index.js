define('@openswap/troll-nft-sdk', (require, exports)=>{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.ts
__export(exports, {
  Contracts: () => contracts_exports
});

// src/contracts/index.ts
var contracts_exports = {};
__export(contracts_exports, {
  Authorization: () => Authorization,
  ERC721: () => ERC721,
  TrollNFT: () => TrollNFT,
  TrollNFTV2: () => TrollNFTV2,
  TrollNFT_VRF: () => TrollNFT_VRF,
  TrollNFT_VRFV2: () => TrollNFT_VRFV2
});

// src/contracts/@openzeppelin/contracts/token/ERC721/ERC721.ts
var import_eth_contract = __toModule(require("@ijstech/eth-contract"));

// src/contracts/@openzeppelin/contracts/token/ERC721/ERC721.json.ts
var ERC721_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60806040523480156200001157600080fd5b5060405162001b5938038062001b598339810160408190526200003491620001c1565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b5050506200027b565b828054620000769062000228565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c62000265565b604051601f8301601f19908116603f0116810190828211818310171562000167576200016762000265565b8160405283815260209250868385880101111562000183578485fd5b8491505b83821015620001a6578582018301518183018401529082019062000187565b83821115620001b757848385830101525b9695505050505050565b60008060408385031215620001d4578182fd5b82516001600160401b0380821115620001eb578384fd5b620001f9868387016200010e565b935060208501519150808211156200020f578283fd5b506200021e858286016200010e565b9150509250929050565b600181811c908216806200023d57607f821691505b602082108114156200025f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6118ce806200028b6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101d0578063b88d4fde146101e3578063c87b56dd146101f6578063e985e9c51461020957600080fd5b80636352211e1461019457806370a08231146101a757806395d89b41146101c857600080fd5b8063095ea7b3116100bd578063095ea7b31461015957806323b872dd1461016e57806342842e0e1461018157600080fd5b806301ffc9a7146100e457806306fdde031461010c578063081812fc14610121575b600080fd5b6100f76100f2366004611638565b610252565b60405190151581526020015b60405180910390f35b610114610337565b604051610103919061174a565b61013461012f366004611670565b6103c9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610103565b61016c61016736600461160f565b6103fd565b005b61016c61017c3660046114a7565b61058f565b61016c61018f3660046114a7565b610630565b6101346101a2366004611670565b61064b565b6101ba6101b536600461145b565b6106d7565b604051908152602001610103565b6101146107a5565b61016c6101de3660046115d5565b6107b4565b61016c6101f13660046114e2565b6107c3565b610114610204366004611670565b61086b565b6100f7610217366004611475565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806102e557507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061033157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060008054610346906117b8565b80601f0160208091040260200160405190810160405280929190818152602001828054610372906117b8565b80156103bf5780601f10610394576101008083540402835291602001916103bf565b820191906000526020600020905b8154815290600101906020018083116103a257829003601f168201915b5050505050905090565b60006103d4826108df565b5060009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60006104088261064b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156104cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821614806104f457506104f48133610217565b610580576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016104c2565b61058a838361096d565b505050565b6105993382610a0d565b610625576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f7665640000000000000000000000000000000000000060648201526084016104c2565b61058a838383610acd565b61058a838383604051806020016040528060008152506107c3565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610331576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016104c2565b600073ffffffffffffffffffffffffffffffffffffffff821661077c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016104c2565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b606060018054610346906117b8565b6107bf338383610dd5565b5050565b6107cd3383610a0d565b610859576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f7665640000000000000000000000000000000000000060648201526084016104c2565b61086584848484610f03565b50505050565b6060610876826108df565b600061088d60408051602081019091526000815290565b905060008151116108ad57604051806020016040528060008152506108d8565b806108b784610fa6565b6040516020016108c89291906116d2565b6040516020818303038152906040525b9392505050565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1661096a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016104c2565b50565b600081815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915581906109c78261064b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610a198361064b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610a87575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209388168352929052205460ff165b80610ac557508373ffffffffffffffffffffffffffffffffffffffff16610aad846103c9565b73ffffffffffffffffffffffffffffffffffffffff16145b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16610aed8261064b565b73ffffffffffffffffffffffffffffffffffffffff1614610b90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016104c2565b73ffffffffffffffffffffffffffffffffffffffff8216610c32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104c2565b610c3f8383836001611095565b8273ffffffffffffffffffffffffffffffffffffffff16610c5f8261064b565b73ffffffffffffffffffffffffffffffffffffffff1614610d02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016104c2565b600081815260046020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff8781168086526003855283862080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104c2565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610f0e848484610acd565b610f1a84848484611151565b610865576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104c2565b60606000610fb383611350565b600101905060008167ffffffffffffffff811115610ffa577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611024576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846110885761108d565b61102e565b509392505050565b60018111156108655773ffffffffffffffffffffffffffffffffffffffff8416156110f55773ffffffffffffffffffffffffffffffffffffffff8416600090815260036020526040812080548392906110ef908490611775565b90915550505b73ffffffffffffffffffffffffffffffffffffffff8316156108655773ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260408120805483929061114690849061175d565b909155505050505050565b600073ffffffffffffffffffffffffffffffffffffffff84163b15611345576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906111c8903390899088908890600401611701565b602060405180830381600087803b1580156111e257600080fd5b505af1925050508015611230575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261122d91810190611654565b60015b6112fa573d80801561125e576040519150601f19603f3d011682016040523d82523d6000602084013e611263565b606091505b5080516112f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104c2565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610ac5565b506001949350505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611399577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106113c5576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106113e357662386f26fc10000830492506010015b6305f5e10083106113fb576305f5e100830492506008015b612710831061140f57612710830492506004015b60648310611421576064830492506002015b600a83106103315760010192915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461145657600080fd5b919050565b60006020828403121561146c578081fd5b6108d882611432565b60008060408385031215611487578081fd5b61149083611432565b915061149e60208401611432565b90509250929050565b6000806000606084860312156114bb578081fd5b6114c484611432565b92506114d260208501611432565b9150604084013590509250925092565b600080600080608085870312156114f7578081fd5b61150085611432565b935061150e60208601611432565b925060408501359150606085013567ffffffffffffffff80821115611531578283fd5b818701915087601f830112611544578283fd5b8135818111156115565761155661183b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561159c5761159c61183b565b816040528281528a60208487010111156115b4578586fd5b82602086016020830137918201602001949094529598949750929550505050565b600080604083850312156115e7578182fd5b6115f083611432565b915060208301358015158114611604578182fd5b809150509250929050565b60008060408385031215611621578182fd5b61162a83611432565b946020939093013593505050565b600060208284031215611649578081fd5b81356108d88161186a565b600060208284031215611665578081fd5b81516108d88161186a565b600060208284031215611681578081fd5b5035919050565b600081518084526116a081602086016020860161178c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600083516116e481846020880161178c565b8351908301906116f881836020880161178c565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526117406080830184611688565b9695505050505050565b6020815260006108d86020830184611688565b600082198211156117705761177061180c565b500190565b6000828210156117875761178761180c565b500390565b60005b838110156117a757818101518382015260200161178f565b838111156108655750506000910152565b600181811c908216806117cc57607f821691505b60208210811415611806577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffff000000000000000000000000000000000000000000000000000000008116811461096a57600080fdfea2646970667358221220c84d02f0fbfbf0786710afe39b3de76061e7cf8b57a7fa1e3fa6f47b913baf1e64736f6c63430008040033"
};

// src/contracts/@openzeppelin/contracts/token/ERC721/ERC721.ts
var ERC721 = class extends import_eth_contract.Contract {
  constructor(wallet, address) {
    super(wallet, address, ERC721_json_default.abi, ERC721_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_contract.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
  }
  decodeApprovalForAllEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      operator: result.operator,
      approved: result.approved,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_contract.BigNumber(result.tokenId),
      _event: event
    };
  }
  assign() {
    let balanceOf_call = async (owner) => {
      let result = await this.call("balanceOf", [owner]);
      return new import_eth_contract.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let getApproved_call = async (tokenId) => {
      let result = await this.call("getApproved", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.getApproved = getApproved_call;
    let isApprovedForAllParams = (params) => [params.owner, params.operator];
    let isApprovedForAll_call = async (params) => {
      let result = await this.call("isApprovedForAll", isApprovedForAllParams(params));
      return result;
    };
    this.isApprovedForAll = isApprovedForAll_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let ownerOf_call = async (tokenId) => {
      let result = await this.call("ownerOf", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.ownerOf = ownerOf_call;
    let supportsInterface_call = async (interfaceId) => {
      let result = await this.call("supportsInterface", [interfaceId]);
      return result;
    };
    this.supportsInterface = supportsInterface_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let tokenURI_call = async (tokenId) => {
      let result = await this.call("tokenURI", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.tokenURI = tokenURI_call;
    let approveParams = (params) => [params.to, this.wallet.utils.toString(params.tokenId)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
    let safeTransferFrom_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
      call: safeTransferFrom_call
    });
    let safeTransferFrom_1Params = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId), this.wallet.utils.stringToBytes(params.data)];
    let safeTransferFrom_1_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_1_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
      call: safeTransferFrom_1_call
    });
    let setApprovalForAllParams = (params) => [params.operator, params.approved];
    let setApprovalForAll_send = async (params) => {
      let result = await this.send("setApprovalForAll", setApprovalForAllParams(params));
      return result;
    };
    let setApprovalForAll_call = async (params) => {
      let result = await this.call("setApprovalForAll", setApprovalForAllParams(params));
      return;
    };
    this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
      call: setApprovalForAll_call
    });
    let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
  }
};

// src/contracts/Authorization.ts
var import_eth_contract2 = __toModule(require("@ijstech/eth-contract"));

// src/contracts/Authorization.json.ts
var Authorization_json_default = {
  "abi": [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916331790556104e2806100326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639c52a7f11161005b5780639c52a7f114610109578063a2f55ae51461011c578063d4ee1d901461012f578063f2fde38b1461014f57600080fd5b80633fd8cc4e1461008257806360536172146100ba5780638da5cb5b146100c4575b600080fd5b6100a5610090366004610471565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100c2610162565b005b6000546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b1565b6100c2610117366004610471565b610290565b6100c261012a366004610471565b610337565b6001546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b6100c261015d366004610471565b6103da565b60015473ffffffffffffffffffffffffffffffffffffffff16331461020d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b457600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161032c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103fe57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161032c565b600060208284031215610482578081fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104a5578182fd5b939250505056fea2646970667358221220592babeee0d725cbe3b74ad0ef1a1ac3b894a4fd1d24a734bf060825c45ec18064736f6c63430008040033"
};

// src/contracts/Authorization.ts
var Authorization = class extends import_eth_contract2.Contract {
  constructor(wallet, address) {
    super(wallet, address, Authorization_json_default.abi, Authorization_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this.__deploy();
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  assign() {
    let isPermitted_call = async (param1) => {
      let result = await this.call("isPermitted", [param1]);
      return result;
    };
    this.isPermitted = isPermitted_call;
    let newOwner_call = async () => {
      let result = await this.call("newOwner");
      return result;
    };
    this.newOwner = newOwner_call;
    let owner_call = async () => {
      let result = await this.call("owner");
      return result;
    };
    this.owner = owner_call;
    let deny_send = async (user) => {
      let result = await this.send("deny", [user]);
      return result;
    };
    let deny_call = async (user) => {
      let result = await this.call("deny", [user]);
      return;
    };
    this.deny = Object.assign(deny_send, {
      call: deny_call
    });
    let permit_send = async (user) => {
      let result = await this.send("permit", [user]);
      return result;
    };
    let permit_call = async (user) => {
      let result = await this.call("permit", [user]);
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let takeOwnership_send = async () => {
      let result = await this.send("takeOwnership");
      return result;
    };
    let takeOwnership_call = async () => {
      let result = await this.call("takeOwnership");
      return;
    };
    this.takeOwnership = Object.assign(takeOwnership_send, {
      call: takeOwnership_call
    });
    let transferOwnership_send = async (newOwner) => {
      let result = await this.send("transferOwnership", [newOwner]);
      return result;
    };
    let transferOwnership_call = async (newOwner) => {
      let result = await this.call("transferOwnership", [newOwner]);
      return;
    };
    this.transferOwnership = Object.assign(transferOwnership_send, {
      call: transferOwnership_call
    });
  }
};

// src/contracts/TrollNFT.ts
var import_eth_contract3 = __toModule(require("@ijstech/eth-contract"));

// src/contracts/TrollNFT.json.ts
var TrollNFT_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "__baseURI", "type": "string" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_stakeToken", "type": "address" }, { "internalType": "bool", "name": "_requireApproval", "type": "bool" }, { "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }, { "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "allow", "type": "bool" }], "name": "ApprovedStaker", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "Attribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "baseURI", "type": "string" }], "name": "BaseURI", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cap", "type": "uint256" }], "name": "Cap", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "CustomAttribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minimumStake", "type": "uint256" }], "name": "MinimumStake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "protocolFeeTo", "type": "address" }], "name": "ProtocolFee", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Stake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstake", "type": "event" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_attributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_customAttributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "approvedStaker", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address[]", "name": "stakers", "type": "address[]" }], "name": "batchApprove", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "counter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "creationTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256", "name": "offset", "type": "uint256" }, { "internalType": "uint256", "name": "digits", "type": "uint256" }], "name": "getAttributes1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256[]", "name": "digits", "type": "uint256[]" }], "name": "getAttributes2", "outputs": [{ "internalType": "uint256[]", "name": "params", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "protocolFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "requireApproval", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }, { "internalType": "bool", "name": "allow", "type": "bool" }], "name": "setApprovedStaker", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "__baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_cap", "type": "uint256" }], "name": "setCap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "setCustomAttribute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }], "name": "setMinimumStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "name": "setProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "stakeToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakingBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "transferProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60a06040523480156200001157600080fd5b5060405162004ad738038062004ad7833981016040819052620000349162000427565b600080546001600160a01b03191633179055600160035588518990899062000064906004906020850190620002a0565b5080516200007a906005906020840190620002a0565b505050818311620000d25760405162461bcd60e51b815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c4665650000000060448201526064015b60405180910390fd5b811580620000e857506001600160a01b03811615155b620001365760405162461bcd60e51b815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f000000000000006044820152606401620000c9565b86516200014b90600f9060208a0190620002a0565b50600e869055606085901b6001600160601b0319166080526010805460ff191685151517905560118390556012829055601380546001600160a01b0319166001600160a01b0383161790556040517f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea7290620001c990600f906200050a565b60405180910390a17fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b600e546040516200020591815260200190565b60405180910390a17f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d6011546040516200024191815260200190565b60405180910390a1601254601354604080519283526001600160a01b0390911660208301527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050505050505050506200060b565b828054620002ae90620005b8565b90600052602060002090601f016020900481019282620002d257600085556200031d565b82601f10620002ed57805160ff19168380011785556200031d565b828001600101855582156200031d579182015b828111156200031d57825182559160200191906001019062000300565b506200032b9291506200032f565b5090565b5b808211156200032b576000815560010162000330565b80516001600160a01b03811681146200035e57600080fd5b919050565b805180151581146200035e57600080fd5b600082601f83011262000385578081fd5b81516001600160401b0380821115620003a257620003a2620005f5565b604051601f8301601f19908116603f01168101908282118183101715620003cd57620003cd620005f5565b81604052838152602092508683858801011115620003e9578485fd5b8491505b838210156200040c5785820183015181830184015290820190620003ed565b838211156200041d57848385830101525b9695505050505050565b60008060008060008060008060006101208a8c03121562000446578485fd5b89516001600160401b03808211156200045d578687fd5b6200046b8d838e0162000374565b9a5060208c015191508082111562000481578687fd5b6200048f8d838e0162000374565b995060408c0151915080821115620004a5578687fd5b50620004b48c828d0162000374565b97505060608a01519550620004cc60808b0162000346565b9450620004dc60a08b0162000363565b935060c08a0151925060e08a01519150620004fb6101008b0162000346565b90509295985092959850929598565b6000602080835281845483600182811c9150808316806200052c57607f831692505b8583108114156200054b57634e487b7160e01b87526022600452602487fd5b8786018381526020018180156200056b57600181146200057d57620005a9565b60ff19861682528782019650620005a9565b60008b815260209020895b86811015620005a35781548482015290850190890162000588565b83019750505b50949998505050505050505050565b600181811c90821680620005cd57607f821691505b60208210811415620005ef57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160601c6144986200063f600039600081816104e301528181610de4015281816116470152612b5601526144986000f3fe608060405234801561001057600080fd5b50600436106103365760003560e01c806370a08231116101b2578063b13db576116100f9578063e985e9c5116100a2578063ec5ffac21161007c578063ec5ffac214610754578063ef3692521461075d578063f0ab14ed1461077d578063f2fde38b1461079d57600080fd5b8063e985e9c5146106e5578063ea289d001461072e578063ea5ed3db1461074157600080fd5b8063d4ee1d90116100d3578063d4ee1d9014610685578063d5ae33e2146106a5578063d7930066146106c557600080fd5b8063b13db5761461063f578063b88d4fde1461065f578063c87b56dd1461067257600080fd5b806395d89b411161015b578063a2f55ae511610135578063a2f55ae514610610578063a694fc3a14610623578063b0e21e8a1461063657600080fd5b806395d89b41146105e25780639c52a7f1146105ea578063a22cb465146105fd57600080fd5b806382d5ea6c1161018c57806382d5ea6c146105955780638c8c8a50146105a25780638da5cb5b146105c257600080fd5b806370a08231146105575780637776a0e51461056a57806381fdc72b1461058d57600080fd5b8063355274ea1161028157806351ed6a301161022a57806361bc221a1161020457806361bc221a146105205780636352211e1461052957806368c1c0881461053c5780636c0360eb1461054f57600080fd5b806351ed6a30146104de57806355f804b314610505578063605361721461051857600080fd5b8063476f2d5c1161025b578063476f2d5c146104a557806347786d37146104b85780634f6ccce7146104cb57600080fd5b8063355274ea146104665780633fd8cc4e1461046f57806342842e0e1461049257600080fd5b80631e7269c5116102e35780632457c8ea116102bd5780632457c8ea1461042d5780632e17de78146104405780632f745c591461045357600080fd5b80631e7269c5146103e4578063233e99031461040757806323b872dd1461041a57600080fd5b8063095ea7b311610314578063095ea7b3146103b05780630a22d68c146103c557806318160ddd146103dc57600080fd5b806301ffc9a71461033b57806306fdde0314610363578063081812fc14610378575b600080fd5b61034e610349366004613f1c565b6107b0565b60405190151581526020015b60405180910390f35b61036b61080c565b60405161035a9190614199565b61038b610386366004613f9a565b61089e565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161035a565b6103c36103be366004613e97565b6108d2565b005b6103ce60145481565b60405190815260200161035a565b600c546103ce565b61034e6103f2366004613d61565b601b6020526000908152604090205460ff1681565b6103c3610415366004613f9a565b610a64565b6103c3610428366004613dad565b610b2f565b6103c361043b366004613fd4565b610bd0565b6103c361044e366004613f9a565b610d36565b6103ce610461366004613e97565b610e50565b6103ce600e5481565b61034e61047d366004613d61565b60026020526000908152604090205460ff1681565b6103c36104a0366004613dad565b610f1f565b6103ce6104b3366004614046565b610f3a565b6103c36104c6366004613f9a565b610f7e565b6103ce6104d9366004613f9a565b611042565b61038b7f000000000000000000000000000000000000000000000000000000000000000081565b6103c3610513366004613f54565b611127565b6103c361118f565b6103ce60155481565b61038b610537366004613f9a565b6112b9565b6103c361054a366004613e61565b611345565b61036b61148e565b6103ce610565366004613d61565b61151c565b61034e610578366004613d61565b601a6020526000908152604090205460ff1681565b6103c36115ea565b60105461034e9060ff1681565b6103ce6105b0366004613f9a565b60166020526000908152604090205481565b60005461038b9073ffffffffffffffffffffffffffffffffffffffff1681565b61036b61167e565b6103c36105f8366004613d61565b61168d565b6103c361060b366004613e61565b61172d565b6103c361061e366004613d61565b61173c565b6103ce610631366004613f9a565b6117df565b6103ce60125481565b6103ce61064d366004613f9a565b60176020526000908152604090205481565b6103c361066d366004613de8565b6118be565b61036b610680366004613f9a565b611966565b60015461038b9073ffffffffffffffffffffffffffffffffffffffff1681565b6103ce6106b3366004613f9a565b60196020526000908152604090205481565b6106d86106d3366004613ff5565b6119cd565b60405161035a9190614155565b61034e6106f3366004613d7b565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260096020908152604080832093909416825291909152205460ff1690565b6103c361073c366004613fb2565b611b6e565b6103c361074f366004613ec0565b611d0b565b6103ce60115481565b60135461038b9073ffffffffffffffffffffffffffffffffffffffff1681565b6103ce61078b366004613f9a565b60186020526000908152604090205481565b6103c36107ab366004613d61565b611ebf565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d63000000000000000000000000000000000000000000000000000000001480610806575061080682611f56565b92915050565b60606004805461081b906142f8565b80601f0160208091040260200160405190810160405280929190818152602001828054610847906142f8565b80156108945780601f1061086957610100808354040283529160200191610894565b820191906000526020600020905b81548152906001019060200180831161087757829003601f168201915b5050505050905090565b60006108a982612039565b5060009081526008602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60006108dd826112b9565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821614806109c957506109c981336106f3565b610a55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610997565b610a5f83836120c4565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a8857600080fd5b6012548111610af3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c466565000000006044820152606401610997565b60118190556040518181527f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d906020015b60405180910390a150565b610b393382612164565b610bc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f766564000000000000000000000000000000000000006064820152608401610997565b610a5f838383612223565b3360009081526002602052604090205460ff16610c6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610997565b60008281526018602052604090205415610ce5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f41747472696275746520616c72656164792073657400000000000000000000006044820152606401610997565b600082815260186020526040908190208290555182907fe73a9e48f41e228034f18c54b3f003b3de0b3bf1069ffd0c352543431b8a86a390610d2a9084815260200190565b60405180910390a25050565b610d3e61252b565b610d483382612164565b610dae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610997565b610db78161259f565b60008181526016602052604081208054919055610e0b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163383612685565b604051818152829033907ff960dbf9e5d0682f7a298ed974e33a28b4464914b7a2bfac12ae419a9afeb2809060200160405180910390a350610e4d6001600355565b50565b6000610e5b8361151c565b8210610ee9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e64730000000000000000000000000000000000000000006064820152608401610997565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600a60209081526040808320938352929052205490565b610a5f838383604051806020016040528060008152506118be565b6000610f468483612759565b610f508585612759565b600087815260176020526040902054610f6991906142a1565b610f739190614385565b90505b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610fa257600080fd5b600e54811161100d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f43617020616c72656164792065786365656465640000000000000000000000006044820152606401610997565b600e8190556040518181527fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b90602001610b24565b600061104d600c5490565b82106110db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e647300000000000000000000000000000000000000006064820152608401610997565b600c8281548110611115577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461114b57600080fd5b805161115e90600f906020840190613bc6565b507f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f604051610b2491906141ac565b60015473ffffffffffffffffffffffffffffffffffffffff163314611236576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610997565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610806576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610997565b60005473ffffffffffffffffffffffffffffffffffffffff16331461136957600080fd5b60105460ff1661139f57601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b80156113f85773ffffffffffffffffffffffffffffffffffffffff82166000908152601a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055611444565b73ffffffffffffffffffffffffffffffffffffffff82166000908152601a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b8173ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52382604051610d2a911515815260200190565b600f805461149b906142f8565b80601f01602080910402602001604051908101604052809291908181526020018280546114c7906142f8565b80156115145780601f106114e957610100808354040283529160200191611514565b820191906000526020600020905b8154815290600101906020018083116114f757829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff82166115c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e657200000000000000000000000000000000000000000000006064820152608401610997565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205490565b6115f261252b565b60135473ffffffffffffffffffffffffffffffffffffffff161580159061161b57506000601454115b15611672576014805460009091556013546116709073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116911683612685565b505b61167c6001600355565b565b60606005805461081b906142f8565b60005473ffffffffffffffffffffffffffffffffffffffff1633146116b157600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610b24565b6117383383836127eb565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461176057600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610b24565b60006117ea82612919565b60408051466020820181905243928201929092527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b82168184015233901b16607482015291925090600090608801604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001815282825280516020918201206000878152601783529290922082905581835290925084917f1e6edca497f4aff07b388b2c8af55371a16eb956ed650861cb45f11758e4a65b910160405180910390a25050919050565b6118c83383612164565b611954576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f766564000000000000000000000000000000000000006064820152608401610997565b61196084848484612c51565b50505050565b606061197182612039565b600061197b612cf4565b9050600081511161199b57604051806020016040528060008152506119c6565b806119a584612d03565b6040516020016119b69291906140dd565b6040516020818303038152906040525b9392505050565b6060818067ffffffffffffffff811115611a10577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015611a39578160200160208202803683370190505b5060008781526017602052604081205491935090815b83811015611b6257611aa088888884818110611a94577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135612759565b611aaa8985612759565b611ab490846142a1565b611abe9190614385565b858281518110611af7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050868682818110611b3c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013583611b4e9190614289565b925080611b5a8161434c565b915050611a4f565b50505050949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b9257600080fd5b8160115411611bfd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c466565000000006044820152606401610997565b811580611c1f575073ffffffffffffffffffffffffffffffffffffffff811615155b611c85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f000000000000006044820152606401610997565b6012829055601380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040805184815260208101929092527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611d2f57600080fd5b601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558060005b81811015611960576001601a6000868685818110611da5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190611dba9190613d61565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055838382818110611e46577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190611e5b9190613d61565b73ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c5236001604051611ea5911515815260200190565b60405180910390a280611eb78161434c565b915050611d5e565b60005473ffffffffffffffffffffffffffffffffffffffff163314611ee357600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610b24565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480611fe957507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061080657507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610806565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff16610e4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610997565b600081815260086020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155819061211e826112b9565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080612170836112b9565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806121de575073ffffffffffffffffffffffffffffffffffffffff80821660009081526009602090815260408083209388168352929052205460ff165b80610f7657508373ffffffffffffffffffffffffffffffffffffffff166122048461089e565b73ffffffffffffffffffffffffffffffffffffffff1614949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16612243826112b9565b73ffffffffffffffffffffffffffffffffffffffff16146122e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610997565b73ffffffffffffffffffffffffffffffffffffffff8216612388576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610997565b6123958383836001612df2565b8273ffffffffffffffffffffffffffffffffffffffff166123b5826112b9565b73ffffffffffffffffffffffffffffffffffffffff1614612458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610997565b600081815260086020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff8781168086526007855283862080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01905590871680865283862080546001019055868652600690945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60026003541415612598576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610997565b6002600355565b60006125aa826112b9565b90506125ba816000846001612df2565b6125c3826112b9565b600083815260086020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff85168085526007845282852080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190558785526006909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a5f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612fa2565b60008280156127cd5760018316801561277457849250612779565b600192505b506002830492505b82156127c857838402848582041461279857600080fd5b935060018316156127bd5783820282858204141585151516156127ba57600080fd5b91505b600283049250612781565b6127e4565b8280156127dd57600092506127e2565b600192505b505b5092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610997565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526009602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b600061292361252b565b601054339060ff1615806129465750336000908152601a602052604090205460ff165b6129ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610997565b601254831180156129cb57506011546012546129c890856142b5565b10155b612a31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d696e696e756d207374616b65206e6f74206d657400000000000000000000006044820152606401610997565b600e54600c5410612a9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f43617020657863656564656400000000000000000000000000000000000000006044820152606401610997565b60105460ff161580612ac05750336000908152601b602052604090205460ff16155b612b26576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f596f752063616e206f6e6c79207374616b65206f6e63650000000000000000006044820152606401610997565b601560008154612b359061434c565b91829055509150612b7e73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168230866130ae565b601254612b8b90846142b5565b6000838152601660205260408120919091556012546014805491929091612bb3908490614289565b9091555050336000908152601b6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905584835260199091529020429055612c0a818361310c565b604051838152829033907f5af417134f72a9d41143ace85b0a26dce6f550f894f2cbc1eeee8810603d91b69060200160405180910390a350612c4c6001600355565b919050565b612c5c848484612223565b612c6884848484613126565b611960576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610997565b6060600f805461081b906142f8565b60606000612d1083613322565b600101905060008167ffffffffffffffff811115612d57577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612d81576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084612de557612dea565b612d8b565b509392505050565b612dfe84848484613404565b6001811115612e8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e736563757469766520747260448201527f616e7366657273206e6f7420737570706f7274656400000000000000000000006064820152608401610997565b8173ffffffffffffffffffffffffffffffffffffffff8516612ef857612ef381600c80546000838152600d60205260408120829055600182018355919091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70155565b612f35565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614612f3557612f3585826134c0565b73ffffffffffffffffffffffffffffffffffffffff8416612f5e57612f5981613577565b612f9b565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612f9b57612f9b848261369b565b5050505050565b6000613004826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166136ec9092919063ffffffff16565b805190915015610a5f57808060200190518101906130229190613f00565b610a5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610997565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526119609085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016126d7565b6117388282604051806020016040528060008152506136fb565b600073ffffffffffffffffffffffffffffffffffffffff84163b1561331a576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a029061319d90339089908890889060040161410c565b602060405180830381600087803b1580156131b757600080fd5b505af1925050508015613205575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261320291810190613f38565b60015b6132cf573d808015613233576040519150601f19603f3d011682016040523d82523d6000602084013e613238565b606091505b5080516132c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610997565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610f76565b506001610f76565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061336b577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310613397576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106133b557662386f26fc10000830492506010015b6305f5e10083106133cd576305f5e100830492506008015b61271083106133e157612710830492506004015b606483106133f3576064830492506002015b600a83106108065760010192915050565b60018111156119605773ffffffffffffffffffffffffffffffffffffffff8416156134645773ffffffffffffffffffffffffffffffffffffffff84166000908152600760205260408120805483929061345e9084906142b5565b90915550505b73ffffffffffffffffffffffffffffffffffffffff8316156119605773ffffffffffffffffffffffffffffffffffffffff8316600090815260076020526040812080548392906134b5908490614289565b909155505050505050565b600060016134cd8461151c565b6134d791906142b5565b6000838152600b60205260409020549091508082146135375773ffffffffffffffffffffffffffffffffffffffff84166000908152600a602090815260408083208584528252808320548484528184208190558352600b90915290208190555b506000918252600b6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600a81528383209183525290812055565b600c54600090613589906001906142b5565b6000838152600d6020526040812054600c80549394509092849081106135d8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080600c8381548110613620577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255828152600d9091526040808220849055858252812055600c80548061367f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b60006136a68361151c565b73ffffffffffffffffffffffffffffffffffffffff9093166000908152600a602090815260408083208684528252808320859055938252600b9052919091209190915550565b6060610f76848460008561379e565b61370583836138b7565b6137126000848484613126565b610a5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610997565b606082471015613830576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610997565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161385991906140c1565b60006040518083038185875af1925050503d8060008114613896576040519150601f19603f3d011682016040523d82523d6000602084013e61389b565b606091505b50915091506138ac87838387613aea565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216613934576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610997565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff16156139c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610997565b6139ce600083836001612df2565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1615613a5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610997565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260076020908152604080832080546001019055848352600690915280822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60608315613b7d578251613b765773ffffffffffffffffffffffffffffffffffffffff85163b613b76576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610997565b5081610f76565b610f768383815115613b925781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109979190614199565b828054613bd2906142f8565b90600052602060002090601f016020900481019282613bf45760008555613c3a565b82601f10613c0d57805160ff1916838001178555613c3a565b82800160010185558215613c3a579182015b82811115613c3a578251825591602001919060010190613c1f565b50613c46929150613c4a565b5090565b5b80821115613c465760008155600101613c4b565b600067ffffffffffffffff80841115613c7a57613c7a6143f7565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715613cc057613cc06143f7565b81604052809350858152868686011115613cd957600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612c4c57600080fd5b60008083601f840112613d28578081fd5b50813567ffffffffffffffff811115613d3f578182fd5b6020830191508360208260051b8501011115613d5a57600080fd5b9250929050565b600060208284031215613d72578081fd5b6119c682613cf3565b60008060408385031215613d8d578081fd5b613d9683613cf3565b9150613da460208401613cf3565b90509250929050565b600080600060608486031215613dc1578081fd5b613dca84613cf3565b9250613dd860208501613cf3565b9150604084013590509250925092565b60008060008060808587031215613dfd578081fd5b613e0685613cf3565b9350613e1460208601613cf3565b925060408501359150606085013567ffffffffffffffff811115613e36578182fd5b8501601f81018713613e46578182fd5b613e5587823560208401613c5f565b91505092959194509250565b60008060408385031215613e73578182fd5b613e7c83613cf3565b91506020830135613e8c81614426565b809150509250929050565b60008060408385031215613ea9578182fd5b613eb283613cf3565b946020939093013593505050565b60008060208385031215613ed2578182fd5b823567ffffffffffffffff811115613ee8578283fd5b613ef485828601613d17565b90969095509350505050565b600060208284031215613f11578081fd5b81516119c681614426565b600060208284031215613f2d578081fd5b81356119c681614434565b600060208284031215613f49578081fd5b81516119c681614434565b600060208284031215613f65578081fd5b813567ffffffffffffffff811115613f7b578182fd5b8201601f81018413613f8b578182fd5b610f7684823560208401613c5f565b600060208284031215613fab578081fd5b5035919050565b60008060408385031215613fc4578182fd5b82359150613da460208401613cf3565b60008060408385031215613fe6578182fd5b50508035926020909101359150565b6000806000806060858703121561400a578182fd5b8435935060208501359250604085013567ffffffffffffffff81111561402e578283fd5b61403a87828801613d17565b95989497509550505050565b6000806000806080858703121561405b578182fd5b5050823594602084013594506040840135936060013592509050565b6000815180845261408f8160208601602086016142cc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082516140d38184602087016142cc565b9190910192915050565b600083516140ef8184602088016142cc565b8351908301906141038183602088016142cc565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261414b6080830184614077565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561418d57835183529284019291840191600101614171565b50909695505050505050565b6020815260006119c66020830184614077565b6000602080835281845483600182811c9150808316806141cd57607f831692505b858310811415614204577f4e487b710000000000000000000000000000000000000000000000000000000087526022600452602487fd5b87860183815260200181801561422157600181146142505761427a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168252878201965061427a565b60008b815260209020895b868110156142745781548482015290850190890161425b565b83019750505b50949998505050505050505050565b6000821982111561429c5761429c614399565b500190565b6000826142b0576142b06143c8565b500490565b6000828210156142c7576142c7614399565b500390565b60005b838110156142e75781810151838201526020016142cf565b838111156119605750506000910152565b600181811c9082168061430c57607f821691505b60208210811415614346577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561437e5761437e614399565b5060010190565b600082614394576143946143c8565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114610e4d57600080fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610e4d57600080fdfea2646970667358221220ca1684cc8f51b48b7fcaf5c51b70ee5becc67795c170c1bb7f78e20c89d7161664736f6c63430008040033"
};

// src/contracts/TrollNFT.ts
var TrollNFT = class extends import_eth_contract3.Contract {
  constructor(wallet, address) {
    super(wallet, address, TrollNFT_json_default.abi, TrollNFT_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol, params.baseURI, this.wallet.utils.toString(params.cap), params.stakeToken, params.requireApproval, this.wallet.utils.toString(params.minimumStake), this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_contract3.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
  }
  decodeApprovalForAllEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      operator: result.operator,
      approved: result.approved,
      _event: event
    };
  }
  parseApprovedStakerEvent(receipt) {
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
  }
  decodeApprovedStakerEvent(event) {
    let result = event.data;
    return {
      staker: result.staker,
      allow: result.allow,
      _event: event
    };
  }
  parseAttributeEvent(receipt) {
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_contract3.BigNumber(result.tokenId),
      attribute: new import_eth_contract3.BigNumber(result.attribute),
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      baseURI: result.baseURI,
      _event: event
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      cap: new import_eth_contract3.BigNumber(result.cap),
      _event: event
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_contract3.BigNumber(result.tokenId),
      attribute: new import_eth_contract3.BigNumber(result.attribute),
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      minimumStake: new import_eth_contract3.BigNumber(result.minimumStake),
      _event: event
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      protocolFee: new import_eth_contract3.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo,
      _event: event
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_contract3.BigNumber(result.tokenId),
      amount: new import_eth_contract3.BigNumber(result.amount),
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_contract3.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_contract3.BigNumber(result.tokenId),
      amount: new import_eth_contract3.BigNumber(result.amount),
      _event: event
    };
  }
  assign() {
    let _attributes_call = async (param1) => {
      let result = await this.call("_attributes", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract3.BigNumber(result);
    };
    this._attributes = _attributes_call;
    let _customAttributes_call = async (param1) => {
      let result = await this.call("_customAttributes", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract3.BigNumber(result);
    };
    this._customAttributes = _customAttributes_call;
    let approvedStaker_call = async (param1) => {
      let result = await this.call("approvedStaker", [param1]);
      return result;
    };
    this.approvedStaker = approvedStaker_call;
    let balanceOf_call = async (owner) => {
      let result = await this.call("balanceOf", [owner]);
      return new import_eth_contract3.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let baseURI_call = async () => {
      let result = await this.call("baseURI");
      return result;
    };
    this.baseURI = baseURI_call;
    let cap_call = async () => {
      let result = await this.call("cap");
      return new import_eth_contract3.BigNumber(result);
    };
    this.cap = cap_call;
    let counter_call = async () => {
      let result = await this.call("counter");
      return new import_eth_contract3.BigNumber(result);
    };
    this.counter = counter_call;
    let creationTime_call = async (param1) => {
      let result = await this.call("creationTime", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract3.BigNumber(result);
    };
    this.creationTime = creationTime_call;
    let getApproved_call = async (tokenId) => {
      let result = await this.call("getApproved", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.getApproved = getApproved_call;
    let getAttributes1Params = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.base), this.wallet.utils.toString(params.offset), this.wallet.utils.toString(params.digits)];
    let getAttributes1_call = async (params) => {
      let result = await this.call("getAttributes1", getAttributes1Params(params));
      return new import_eth_contract3.BigNumber(result);
    };
    this.getAttributes1 = getAttributes1_call;
    let getAttributes2Params = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.base), this.wallet.utils.toString(params.digits)];
    let getAttributes2_call = async (params) => {
      let result = await this.call("getAttributes2", getAttributes2Params(params));
      return result.map((e) => new import_eth_contract3.BigNumber(e));
    };
    this.getAttributes2 = getAttributes2_call;
    let isApprovedForAllParams = (params) => [params.owner, params.operator];
    let isApprovedForAll_call = async (params) => {
      let result = await this.call("isApprovedForAll", isApprovedForAllParams(params));
      return result;
    };
    this.isApprovedForAll = isApprovedForAll_call;
    let isPermitted_call = async (param1) => {
      let result = await this.call("isPermitted", [param1]);
      return result;
    };
    this.isPermitted = isPermitted_call;
    let minimumStake_call = async () => {
      let result = await this.call("minimumStake");
      return new import_eth_contract3.BigNumber(result);
    };
    this.minimumStake = minimumStake_call;
    let minted_call = async (param1) => {
      let result = await this.call("minted", [param1]);
      return result;
    };
    this.minted = minted_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let newOwner_call = async () => {
      let result = await this.call("newOwner");
      return result;
    };
    this.newOwner = newOwner_call;
    let owner_call = async () => {
      let result = await this.call("owner");
      return result;
    };
    this.owner = owner_call;
    let ownerOf_call = async (tokenId) => {
      let result = await this.call("ownerOf", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.ownerOf = ownerOf_call;
    let protocolFee_call = async () => {
      let result = await this.call("protocolFee");
      return new import_eth_contract3.BigNumber(result);
    };
    this.protocolFee = protocolFee_call;
    let protocolFeeBalance_call = async () => {
      let result = await this.call("protocolFeeBalance");
      return new import_eth_contract3.BigNumber(result);
    };
    this.protocolFeeBalance = protocolFeeBalance_call;
    let protocolFeeTo_call = async () => {
      let result = await this.call("protocolFeeTo");
      return result;
    };
    this.protocolFeeTo = protocolFeeTo_call;
    let requireApproval_call = async () => {
      let result = await this.call("requireApproval");
      return result;
    };
    this.requireApproval = requireApproval_call;
    let stakeToken_call = async () => {
      let result = await this.call("stakeToken");
      return result;
    };
    this.stakeToken = stakeToken_call;
    let stakingBalance_call = async (param1) => {
      let result = await this.call("stakingBalance", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract3.BigNumber(result);
    };
    this.stakingBalance = stakingBalance_call;
    let supportsInterface_call = async (interfaceId) => {
      let result = await this.call("supportsInterface", [interfaceId]);
      return result;
    };
    this.supportsInterface = supportsInterface_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let tokenByIndex_call = async (index) => {
      let result = await this.call("tokenByIndex", [this.wallet.utils.toString(index)]);
      return new import_eth_contract3.BigNumber(result);
    };
    this.tokenByIndex = tokenByIndex_call;
    let tokenOfOwnerByIndexParams = (params) => [params.owner, this.wallet.utils.toString(params.index)];
    let tokenOfOwnerByIndex_call = async (params) => {
      let result = await this.call("tokenOfOwnerByIndex", tokenOfOwnerByIndexParams(params));
      return new import_eth_contract3.BigNumber(result);
    };
    this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
    let tokenURI_call = async (tokenId) => {
      let result = await this.call("tokenURI", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.tokenURI = tokenURI_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_contract3.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let approveParams = (params) => [params.to, this.wallet.utils.toString(params.tokenId)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let batchApprove_send = async (stakers) => {
      let result = await this.send("batchApprove", [stakers]);
      return result;
    };
    let batchApprove_call = async (stakers) => {
      let result = await this.call("batchApprove", [stakers]);
      return;
    };
    this.batchApprove = Object.assign(batchApprove_send, {
      call: batchApprove_call
    });
    let deny_send = async (user) => {
      let result = await this.send("deny", [user]);
      return result;
    };
    let deny_call = async (user) => {
      let result = await this.call("deny", [user]);
      return;
    };
    this.deny = Object.assign(deny_send, {
      call: deny_call
    });
    let permit_send = async (user) => {
      let result = await this.send("permit", [user]);
      return result;
    };
    let permit_call = async (user) => {
      let result = await this.call("permit", [user]);
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
    let safeTransferFrom_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
      call: safeTransferFrom_call
    });
    let safeTransferFrom_1Params = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId), this.wallet.utils.stringToBytes(params.data)];
    let safeTransferFrom_1_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_1_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
      call: safeTransferFrom_1_call
    });
    let setApprovalForAllParams = (params) => [params.operator, params.approved];
    let setApprovalForAll_send = async (params) => {
      let result = await this.send("setApprovalForAll", setApprovalForAllParams(params));
      return result;
    };
    let setApprovalForAll_call = async (params) => {
      let result = await this.call("setApprovalForAll", setApprovalForAllParams(params));
      return;
    };
    this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
      call: setApprovalForAll_call
    });
    let setApprovedStakerParams = (params) => [params.staker, params.allow];
    let setApprovedStaker_send = async (params) => {
      let result = await this.send("setApprovedStaker", setApprovedStakerParams(params));
      return result;
    };
    let setApprovedStaker_call = async (params) => {
      let result = await this.call("setApprovedStaker", setApprovedStakerParams(params));
      return;
    };
    this.setApprovedStaker = Object.assign(setApprovedStaker_send, {
      call: setApprovedStaker_call
    });
    let setBaseURI_send = async (baseURI) => {
      let result = await this.send("setBaseURI", [baseURI]);
      return result;
    };
    let setBaseURI_call = async (baseURI) => {
      let result = await this.call("setBaseURI", [baseURI]);
      return;
    };
    this.setBaseURI = Object.assign(setBaseURI_send, {
      call: setBaseURI_call
    });
    let setCap_send = async (cap) => {
      let result = await this.send("setCap", [this.wallet.utils.toString(cap)]);
      return result;
    };
    let setCap_call = async (cap) => {
      let result = await this.call("setCap", [this.wallet.utils.toString(cap)]);
      return;
    };
    this.setCap = Object.assign(setCap_send, {
      call: setCap_call
    });
    let setCustomAttributeParams = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.attribute)];
    let setCustomAttribute_send = async (params) => {
      let result = await this.send("setCustomAttribute", setCustomAttributeParams(params));
      return result;
    };
    let setCustomAttribute_call = async (params) => {
      let result = await this.call("setCustomAttribute", setCustomAttributeParams(params));
      return;
    };
    this.setCustomAttribute = Object.assign(setCustomAttribute_send, {
      call: setCustomAttribute_call
    });
    let setMinimumStake_send = async (minimumStake) => {
      let result = await this.send("setMinimumStake", [this.wallet.utils.toString(minimumStake)]);
      return result;
    };
    let setMinimumStake_call = async (minimumStake) => {
      let result = await this.call("setMinimumStake", [this.wallet.utils.toString(minimumStake)]);
      return;
    };
    this.setMinimumStake = Object.assign(setMinimumStake_send, {
      call: setMinimumStake_call
    });
    let setProtocolFeeParams = (params) => [this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo];
    let setProtocolFee_send = async (params) => {
      let result = await this.send("setProtocolFee", setProtocolFeeParams(params));
      return result;
    };
    let setProtocolFee_call = async (params) => {
      let result = await this.call("setProtocolFee", setProtocolFeeParams(params));
      return;
    };
    this.setProtocolFee = Object.assign(setProtocolFee_send, {
      call: setProtocolFee_call
    });
    let stake_send = async (amount) => {
      let result = await this.send("stake", [this.wallet.utils.toString(amount)]);
      return result;
    };
    let stake_call = async (amount) => {
      let result = await this.call("stake", [this.wallet.utils.toString(amount)]);
      return new import_eth_contract3.BigNumber(result);
    };
    this.stake = Object.assign(stake_send, {
      call: stake_call
    });
    let takeOwnership_send = async () => {
      let result = await this.send("takeOwnership");
      return result;
    };
    let takeOwnership_call = async () => {
      let result = await this.call("takeOwnership");
      return;
    };
    this.takeOwnership = Object.assign(takeOwnership_send, {
      call: takeOwnership_call
    });
    let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
    let transferOwnership_send = async (newOwner) => {
      let result = await this.send("transferOwnership", [newOwner]);
      return result;
    };
    let transferOwnership_call = async (newOwner) => {
      let result = await this.call("transferOwnership", [newOwner]);
      return;
    };
    this.transferOwnership = Object.assign(transferOwnership_send, {
      call: transferOwnership_call
    });
    let transferProtocolFee_send = async () => {
      let result = await this.send("transferProtocolFee");
      return result;
    };
    let transferProtocolFee_call = async () => {
      let result = await this.call("transferProtocolFee");
      return;
    };
    this.transferProtocolFee = Object.assign(transferProtocolFee_send, {
      call: transferProtocolFee_call
    });
    let unstake_send = async (tokenId) => {
      let result = await this.send("unstake", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    let unstake_call = async (tokenId) => {
      let result = await this.call("unstake", [this.wallet.utils.toString(tokenId)]);
      return;
    };
    this.unstake = Object.assign(unstake_send, {
      call: unstake_call
    });
  }
};

// src/contracts/TrollNFTV2.ts
var import_eth_contract4 = __toModule(require("@ijstech/eth-contract"));

// src/contracts/TrollNFTV2.json.ts
var TrollNFTV2_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "__baseURI", "type": "string" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_stakeToken", "type": "address" }, { "internalType": "bool", "name": "_requireApproval", "type": "bool" }, { "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }, { "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }, { "components": [{ "internalType": "contract IERC721[]", "name": "listValidNFTs", "type": "address[]" }, { "internalType": "uint256", "name": "maximumValidNFTs", "type": "uint256" }], "internalType": "struct TrollNFTV2.NFTInfo", "name": "_nftInfo", "type": "tuple" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountAdded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newAmount", "type": "uint256" }], "name": "AddStakes", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }], "name": "AddValidNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "allow", "type": "bool" }], "name": "ApprovedStaker", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "Attribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "baseURI", "type": "string" }], "name": "BaseURI", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cap", "type": "uint256" }], "name": "Cap", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "CustomAttribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "EquipNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minimumStake", "type": "uint256" }], "name": "MinimumStake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "protocolFeeTo", "type": "address" }], "name": "ProtocolFee", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Stake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "StakesApproval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "toTokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "StakesTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "UnequipNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstake", "type": "event" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_attributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_customAttributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "_stakesTransferAllowances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "addStakes", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721[]", "name": "nfts", "type": "address[]" }], "name": "addValidNFTs", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "approvedStaker", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address[]", "name": "stakers", "type": "address[]" }], "name": "batchApprove", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "counter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "creationDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "destoryDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "equipNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "extraStakes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256", "name": "offset", "type": "uint256" }, { "internalType": "uint256", "name": "digits", "type": "uint256" }], "name": "getAttributes1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256[]", "name": "digits", "type": "uint256[]" }], "name": "getAttributes2", "outputs": [{ "internalType": "uint256[]", "name": "params", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "name": "isValidNFT", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lastStakeDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "listValidNFTs", "outputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "maximumValidNFTs", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftsEquipped", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "protocolFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "requireApproval", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }, { "internalType": "bool", "name": "allow", "type": "bool" }], "name": "setApprovedStaker", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "__baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_cap", "type": "uint256" }], "name": "setCap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "setCustomAttribute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }], "name": "setMinimumStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "name": "setProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "stakeToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakingBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "transferProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "contract IERC721", "name": "", "type": "address" }], "name": "trollOwnedNFTs", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "unequipNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "validNFTsLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "60a06040523480156200001157600080fd5b5060405162005e5238038062005e528339810160408190526200003491620006a6565b600080546001600160a01b03191633179055600160035589518a908a90620000649060049060208501906200046f565b5080516200007a9060059060208401906200046f565b50505082600014806200009557506001600160a01b03821615155b620000e75760405162461bcd60e51b815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f0000000000000060448201526064015b60405180910390fd5b602081015181515111156200013a5760405162461bcd60e51b81526020600482015260248082015260008051602062005e328339815191526044820152634e46547360e01b6064820152608401620000de565b87516200014f90600f9060208b01906200046f565b50600e879055606086901b6001600160601b0319166080526010805460ff191686151517905560118490556012839055601380546001600160a01b0319166001600160a01b03841617905560208101516016558051620001af90620002b9565b7f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f604051620001e19190620007b1565b60405180910390a17fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b600e546040516200021d91815260200190565b60405180910390a17f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d6011546040516200025991815260200190565b60405180910390a1601254601354604080519283526001600160a01b0390911660208301527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050505050505050505062000978565b6000546001600160a01b03163314620002d157600080fd5b6016548151601554620002e59190620008bd565b1115620003305760405162461bcd60e51b81526020600482015260248082015260008051602062005e328339815191526044820152634e46547360e01b6064820152608401620000de565b60005b81518110156200046b5760008282815181106200036057634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b038116600090815291805260409091205490915060ff1615620003cd5760405162461bcd60e51b815260206004820152601160248201527013919508185b1c9958591e481859191959607a1b6044820152606401620000de565b6001600160a01b0381166000818152602080526040808220805460ff1916600190811790915560158054918201815583527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec4750180546001600160a01b03191684179055517f6f0f8cee3d9c2f167393540bc77d82ef43045c19beafd62240a7e45f2519171a9190a25080620004628162000915565b91505062000333565b5050565b8280546200047d90620008d8565b90600052602060002090601f016020900481019282620004a15760008555620004ec565b82601f10620004bc57805160ff1916838001178555620004ec565b82800160010185558215620004ec579182015b82811115620004ec578251825591602001919060010190620004cf565b50620004fa929150620004fe565b5090565b5b80821115620004fa5760008155600101620004ff565b805162000522816200095f565b919050565b805180151581146200052257600080fd5b600082601f83011262000549578081fd5b81516001600160401b0381111562000565576200056562000949565b60206200057b601f8301601f191682016200088a565b82815285828487010111156200058f578384fd5b835b83811015620005ae57858101830151828201840152820162000591565b83811115620005bf57848385840101525b5095945050505050565b600060408284031215620005db578081fd5b620005e56200085f565b82519091506001600160401b03808211156200060057600080fd5b818401915084601f8301126200061557600080fd5b81516020828211156200062c576200062c62000949565b8160051b92506200063f8184016200088a565b8281528181019085830185870184018a10156200065b57600080fd5b600096505b848710156200068e578051955062000678866200095f565b8583526001969096019591830191830162000660565b50808752505080860151818601525050505092915050565b6000806000806000806000806000806101408b8d031215620006c6578586fd5b8a516001600160401b0380821115620006dd578788fd5b620006eb8e838f0162000538565b9b5060208d015191508082111562000701578788fd5b6200070f8e838f0162000538565b9a5060408d015191508082111562000725578788fd5b620007338e838f0162000538565b995060608d015198506200074a60808e0162000515565b97506200075a60a08e0162000527565b965060c08d0151955060e08d01519450620007796101008e0162000515565b93506101208d015191508082111562000790578283fd5b506200079f8d828e01620005c9565b9150509295989b9194979a5092959850565b6000602080835281845483600182811c915080831680620007d357607f831692505b858310811415620007f257634e487b7160e01b87526022600452602487fd5b878601838152602001818015620008125760018114620008245762000850565b60ff1986168252878201965062000850565b60008b815260209020895b868110156200084a578154848201529085019089016200082f565b83019750505b50949998505050505050505050565b604080519081016001600160401b038111828210171562000884576200088462000949565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620008b557620008b562000949565b604052919050565b60008219821115620008d357620008d362000933565b500190565b600181811c90821680620008ed57607f821691505b602082108114156200090f57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200092c576200092c62000933565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200097557600080fd5b50565b60805160601c61547f620009b3600039600081816105ce01528181610f930152818161240d01528181612a080152613a0f015261547f6000f3fe608060405234801561001057600080fd5b50600436106103d05760003560e01c806378511f61116101ff578063baba73a51161011a578063e985e9c5116100ad578063ef3692521161007c578063ef3692521461094a578063f0ab14ed1461096a578063f2fde38b1461098a578063f43d95841461099d57600080fd5b8063e985e9c5146108d2578063ea289d001461091b578063ea5ed3db1461092e578063ec5ffac21461094157600080fd5b8063d7930066116100e9578063d793006614610877578063d8f8504f14610897578063da1bbcf6146108b7578063e7201063146108bf57600080fd5b8063baba73a514610819578063c287e80614610822578063c87b56dd14610844578063d4ee1d901461085757600080fd5b8063a22cb46511610192578063b13db57611610161578063b13db576146107b3578063b1bc9916146107d3578063b55e5847146107e6578063b88d4fde1461080657600080fd5b8063a22cb46514610771578063a2f55ae514610784578063a694fc3a14610797578063b0e21e8a146107aa57600080fd5b80638c8c8a50116101ce5780638c8c8a50146107165780638da5cb5b1461073657806395d89b41146107565780639c52a7f11461075e57600080fd5b806378511f61146106b65780637e09858e146106d657806381fdc72b1461070157806382d5ea6c1461070957600080fd5b806342842e0e116102ef57806360536172116102825780636c0360eb116102515780636c0360eb1461064d5780636e660ab11461065557806370a08231146106805780637776a0e51461069357600080fd5b8063605361721461061657806361bc221a1461061e5780636352211e1461062757806368c1c0881461063a57600080fd5b80635174df05116102be5780635174df05146105b657806351ed6a30146105c957806355f804b3146105f05780635981f75a1461060357600080fd5b806342842e0e1461056a578063476f2d5c1461057d57806347786d37146105905780634f6ccce7146105a357600080fd5b8063233e9903116103675780632f745c59116103365780632f745c5914610518578063355274ea1461052b5780633a2f5511146105345780633fd8cc4e1461054757600080fd5b8063233e9903146104cc57806323b872dd146104df5780632457c8ea146104f25780632e17de781461050557600080fd5b80630a22d68c116103a35780630a22d68c1461045f57806318160ddd146104765780631864bbc91461047e5780631e7269c5146104a957600080fd5b806301ffc9a7146103d557806306fdde03146103fd578063081812fc14610412578063095ea7b31461044a575b600080fd5b6103e86103e3366004614e6a565b6109bd565b60405190151581526020015b60405180910390f35b610405610a19565b6040516103f4919061510f565b610425610420366004614ee8565b610aab565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016103f4565b61045d610458366004614d2f565b610adf565b005b61046860145481565b6040519081526020016103f4565b600c54610468565b61046861048c366004614d2f565b602260209081526000928352604080842090915290825290205481565b6103e86104b7366004614bd5565b601f6020526000908152604090205460ff1681565b61045d6104da366004614ee8565b610c71565b61045d6104ed366004614c45565b610cd1565b61045d610500366004614f4a565b610d72565b61045d610513366004614ee8565b610ed8565b610468610526366004614d2f565b6110eb565b610468600e5481565b61045d610542366004614d9a565b6111ba565b6103e8610555366004614bd5565b60026020526000908152604090205460ff1681565b61045d610578366004614c45565b611444565b61046861058b366004614fbc565b61145f565b61045d61059e366004614ee8565b6114a3565b6104686105b1366004614ee8565b611567565b61045d6105c4366004614f24565b61164c565b6104257f000000000000000000000000000000000000000000000000000000000000000081565b61045d6105fe366004614ea2565b611aa0565b61045d610611366004614f24565b611b08565b61045d611f55565b61046860175481565b610425610635366004614ee8565b61207f565b61045d610648366004614d02565b61210b565b610405612254565b610468610663366004614f00565b602460209081526000928352604080842090915290825290205481565b61046861068e366004614bd5565b6122e2565b6103e86106a1366004614bd5565b601e6020526000908152604090205460ff1681565b6104686106c4366004614ee8565b60236020526000908152604090205481565b6104686106e4366004614f00565b602160209081526000928352604080842090915290825290205481565b61045d6123b0565b6010546103e89060ff1681565b610468610724366004614ee8565b60186020526000908152604090205481565b6000546104259073ffffffffffffffffffffffffffffffffffffffff1681565b610405612444565b61045d61076c366004614bd5565b612453565b61045d61077f366004614d02565b6124f3565b61045d610792366004614bd5565b6124fe565b6104686107a5366004614ee8565b6125a1565b61046860125481565b6104686107c1366004614ee8565b60196020526000908152604090205481565b6104256107e1366004614ee8565b612680565b6104686107f4366004614ee8565b601d6020526000908152604090205481565b61045d610814366004614c85565b6126b7565b61046860165481565b6103e8610830366004614bd5565b602080526000908152604090205460ff1681565b610405610852366004614ee8565b61275f565b6001546104259073ffffffffffffffffffffffffffffffffffffffff1681565b61088a610885366004614f6b565b6127c6565b6040516103f491906150cb565b6104686108a5366004614ee8565b601c6020526000908152604090205481565b601554610468565b61045d6108cd366004614f4a565b612967565b6103e86108e0366004614c0d565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260096020908152604080832093909416825291909152205460ff1690565b61045d610929366004614f00565b612aa3565b61045d61093c366004614d5a565b612bd5565b61046860115481565b6013546104259073ffffffffffffffffffffffffffffffffffffffff1681565b610468610978366004614ee8565b601a6020526000908152604090205481565b61045d610998366004614bd5565b612d89565b6104686109ab366004614ee8565b601b6020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d63000000000000000000000000000000000000000000000000000000001480610a135750610a1382612e20565b92915050565b606060048054610a28906152bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610a54906152bd565b8015610aa15780601f10610a7657610100808354040283529160200191610aa1565b820191906000526020600020905b815481529060010190602001808311610a8457829003601f168201915b5050505050905090565b6000610ab682612f03565b5060009081526008602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6000610aea8261207f565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82161480610bd65750610bd681336108e0565b610c62576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610ba4565b610c6c8383612f8e565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c9557600080fd5b60118190556040518181527f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d906020015b60405180910390a150565b610cdb338261302e565b610d67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f766564000000000000000000000000000000000000006064820152608401610ba4565b610c6c8383836130ed565b3360009081526002602052604090205460ff16610e11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610ba4565b6000828152601a602052604090205415610e87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f41747472696275746520616c72656164792073657400000000000000000000006044820152606401610ba4565b6000828152601a6020526040908190208290555182907fe73a9e48f41e228034f18c54b3f003b3de0b3bf1069ffd0c352543431b8a86a390610ecc9084815260200190565b60405180910390a25050565b610ee06133f5565b610eea338261302e565b610f50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610ba4565b610f5981613469565b6000818152601c60209081526040808320429055601890915281208054919055610fba73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016338361354f565b60005b6015548110156110a557600060158281548110611003577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600091825260208083209091015486835260218252604080842073ffffffffffffffffffffffffffffffffffffffff9092168085529190925291205490915080156110905773ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832083905588835260218252808320938352929052908120555b5050808061109d90615311565b915050610fbd565b50604051818152829033907ff960dbf9e5d0682f7a298ed974e33a28b4464914b7a2bfac12ae419a9afeb2809060200160405180910390a3506110e86001600355565b50565b60006110f6836122e2565b8210611184576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e64730000000000000000000000000000000000000000006064820152608401610ba4565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600a60209081526040808320938352929052205490565b60005473ffffffffffffffffffffffffffffffffffffffff1633146111de57600080fd5b60165481516015546111f0919061524e565b111561127d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45786365656473206d6178696d756d206e756d626572206f662076616c69642060448201527f4e465473000000000000000000000000000000000000000000000000000000006064820152608401610ba4565b60005b81518110156114405760008282815181106112c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff8116600090815291805260409091205490915060ff1615611362576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e465420616c72656164792061646465640000000000000000000000000000006044820152606401610ba4565b73ffffffffffffffffffffffffffffffffffffffff8116600081815260208052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915560158054918201815583527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec4750180547fffffffffffffffffffffffff00000000000000000000000000000000000000001684179055517f6f0f8cee3d9c2f167393540bc77d82ef43045c19beafd62240a7e45f2519171a9190a2508061143881615311565b915050611280565b5050565b610c6c838383604051806020016040528060008152506126b7565b600061146b8483613623565b6114758585613623565b60008781526019602052604090205461148e9190615266565b611498919061534a565b90505b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114c757600080fd5b600e548111611532576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f43617020616c72656164792065786365656465640000000000000000000000006044820152606401610ba4565b600e8190556040518181527fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b90602001610cc6565b6000611572600c5490565b8210611600576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e647300000000000000000000000000000000000000006064820152608401610ba4565b600c828154811061163a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208052604090205460ff166116da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f742076616c6964204e4654000000000000000000000000000000000000006044820152606401610ba4565b336116e48461207f565b73ffffffffffffffffffffffffffffffffffffffff1614611787576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f596f7520617265206e6f7420746865206f776e6572206f66207468697320747260448201527f6f6c6c00000000000000000000000000000000000000000000000000000000006064820152608401610ba4565b6040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101829052339073ffffffffffffffffffffffffffffffffffffffff841690636352211e9060240160206040518083038186803b1580156117ef57600080fd5b505afa158015611803573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118279190614bf1565b73ffffffffffffffffffffffffffffffffffffffff16146118ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f596f7520617265206e6f7420746865206f776e6572206f662074686973204e4660448201527f54000000000000000000000000000000000000000000000000000000000000006064820152608401610ba4565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260226020908152604080832084845290915290205415611962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e465420616c72656164792065717569707065640000000000000000000000006044820152606401610ba4565b600083815260216020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915290205415611a1f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f456163682074726f6c6c2063616e206f6e6c79206571756970206f6e6520746f60448201527f6b656e20706572204e46540000000000000000000000000000000000000000006064820152608401610ba4565b73ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832087905586835260218252808320848452825291829020849055905183815285917f5f3e52a313d16d3e3d13ea422592abcdf8484958442b5d977890b64c53523e2391015b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611ac457600080fd5b8051611ad790600f906020840190614a7c565b507f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f604051610cc69190615122565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208052604090205460ff16611b96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f742076616c6964204e4654000000000000000000000000000000000000006044820152606401610ba4565b33611ba08461207f565b73ffffffffffffffffffffffffffffffffffffffff1614611c43576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f596f7520617265206e6f7420746865206f776e6572206f66207468697320747260448201527f6f6c6c00000000000000000000000000000000000000000000000000000000006064820152608401610ba4565b6040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101829052339073ffffffffffffffffffffffffffffffffffffffff841690636352211e9060240160206040518083038186803b158015611cab57600080fd5b505afa158015611cbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ce39190614bf1565b73ffffffffffffffffffffffffffffffffffffffff1614611d86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f596f7520617265206e6f7420746865206f776e6572206f662074686973204e4660448201527f54000000000000000000000000000000000000000000000000000000000000006064820152608401610ba4565b73ffffffffffffffffffffffffffffffffffffffff821660009081526022602090815260408083208484529091529020548314611e45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f54686973204e465420646f6573206e6f742062656c6f6e6720746f207468697360448201527f2074726f6c6c00000000000000000000000000000000000000000000000000006064820152608401610ba4565b600083815260216020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020548114611edd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f546869732074726f6c6c20646f6573206e6f74206f776e2074686973204e46546044820152606401610ba4565b73ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832083905586835260218252808320848452825280832092909255905183815285917f209edba55054a6d25cdb7cd481d568e6a0fbe2ecc48276caee30a061cb1f744f9101611a93565b60015473ffffffffffffffffffffffffffffffffffffffff163314611ffc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610ba4565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610a13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610ba4565b60005473ffffffffffffffffffffffffffffffffffffffff16331461212f57600080fd5b60105460ff1661216557601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b80156121be5773ffffffffffffffffffffffffffffffffffffffff82166000908152601e6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905561220a565b73ffffffffffffffffffffffffffffffffffffffff82166000908152601e6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b8173ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52382604051610ecc911515815260200190565b600f8054612261906152bd565b80601f016020809104026020016040519081016040528092919081815260200182805461228d906152bd565b80156122da5780601f106122af576101008083540402835291602001916122da565b820191906000526020600020905b8154815290600101906020018083116122bd57829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff8216612387576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e657200000000000000000000000000000000000000000000006064820152608401610ba4565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205490565b6123b86133f5565b60135473ffffffffffffffffffffffffffffffffffffffff16158015906123e157506000601454115b15612438576014805460009091556013546124369073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811691168361354f565b505b6124426001600355565b565b606060058054610a28906152bd565b60005473ffffffffffffffffffffffffffffffffffffffff16331461247757600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610cc6565b6114403383836136b5565b60005473ffffffffffffffffffffffffffffffffffffffff16331461252257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610cc6565b60006125ac826137db565b60408051466020820181905243928201929092527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b82168184015233901b16607482015291925090600090608801604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001815282825280516020918201206000878152601983529290922082905581835290925084917f1e6edca497f4aff07b388b2c8af55371a16eb956ed650861cb45f11758e4a65b910160405180910390a25050919050565b6015818154811061269057600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b6126c1338361302e565b61274d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f766564000000000000000000000000000000000000006064820152608401610ba4565b61275984848484613b07565b50505050565b606061276a82612f03565b6000612774613baa565b9050600081511161279457604051806020016040528060008152506127bf565b8061279e84613bb9565b6040516020016127af929190615053565b6040516020818303038152906040525b9392505050565b6060818067ffffffffffffffff811115612809577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015612832578160200160208202803683370190505b5060008781526019602052604081205491935090815b8381101561295b576128998888888481811061288d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135613623565b6128a38985613623565b6128ad9084615266565b6128b7919061534a565b8582815181106128f0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050868682818110612935577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013583612947919061524e565b92508061295381615311565b915050612848565b50505050949350505050565b336129718361207f565b73ffffffffffffffffffffffffffffffffffffffff16146129ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610ba4565b612a3073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333084613ca8565b60008281526018602052604081208054839290612a4e90849061524e565b90915550506000828152601d6020908152604080832042905560188252918290205482518481529182015283917f9dd9373946c68e9420a62b36f888feb3e769b907bb535e27af7f59f2886337499101610ecc565b60005473ffffffffffffffffffffffffffffffffffffffff163314612ac757600080fd5b811580612ae9575073ffffffffffffffffffffffffffffffffffffffff811615155b612b4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f000000000000006044820152606401610ba4565b6012829055601380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040805184815260208101929092527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff163314612bf957600080fd5b601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558060005b81811015612759576001601e6000868685818110612c6f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190612c849190614bd5565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055838382818110612d10577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190612d259190614bd5565b73ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c5236001604051612d6f911515815260200190565b60405180910390a280612d8181615311565b915050612c28565b60005473ffffffffffffffffffffffffffffffffffffffff163314612dad57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610cc6565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480612eb357507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80610a1357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610a13565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff166110e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610ba4565b600081815260086020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091558190612fe88261207f565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061303a8361207f565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806130a8575073ffffffffffffffffffffffffffffffffffffffff80821660009081526009602090815260408083209388168352929052205460ff165b8061149b57508373ffffffffffffffffffffffffffffffffffffffff166130ce84610aab565b73ffffffffffffffffffffffffffffffffffffffff1614949350505050565b8273ffffffffffffffffffffffffffffffffffffffff1661310d8261207f565b73ffffffffffffffffffffffffffffffffffffffff16146131b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610ba4565b73ffffffffffffffffffffffffffffffffffffffff8216613252576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610ba4565b61325f8383836001613d06565b8273ffffffffffffffffffffffffffffffffffffffff1661327f8261207f565b73ffffffffffffffffffffffffffffffffffffffff1614613322576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610ba4565b600081815260086020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff8781168086526007855283862080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01905590871680865283862080546001019055868652600690945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60026003541415613462576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610ba4565b6002600355565b60006134748261207f565b9050613484816000846001613d06565b61348d8261207f565b600083815260086020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff85168085526007845282852080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190558785526006909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610c6c9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152613eb6565b60008280156136975760018316801561363e57849250613643565b600192505b506002830492505b821561369257838402848582041461366257600080fd5b9350600183161561368757838202828582041415851515161561368457600080fd5b91505b60028304925061364b565b6136ae565b8280156136a757600092506136ac565b600192505b505b5092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561374b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610ba4565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526009602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319101611a93565b60006137e56133f5565b60105460ff1615806138065750336000908152601e602052604090205460ff165b61386c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610ba4565b60006012548361387c919061527a565b90506011548110156138ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d696e696e756d207374616b65206e6f74206d657400000000000000000000006044820152606401610ba4565b600e54600c5410613957576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f43617020657863656564656400000000000000000000000000000000000000006044820152606401610ba4565b60105460ff1615806139795750336000908152601f602052604090205460ff16155b6139df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f596f752063616e206f6e6c79207374616b65206f6e63650000000000000000006044820152606401610ba4565b6017600081546139ee90615311565b91829055509150613a3773ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333086613ca8565b60008281526018602052604081208290556012546014805491929091613a5e90849061524e565b9091555050336000818152601f6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055858352601b82528083204290819055601d90925290912055613ac09083613fc2565b604051838152829033907f5af417134f72a9d41143ace85b0a26dce6f550f894f2cbc1eeee8810603d91b69060200160405180910390a350613b026001600355565b919050565b613b128484846130ed565b613b1e84848484613fdc565b612759576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610ba4565b6060600f8054610a28906152bd565b60606000613bc6836141d8565b600101905060008167ffffffffffffffff811115613c0d577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015613c37576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084613c9b57613ca0565b613c41565b509392505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526127599085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016135a1565b613d12848484846142ba565b6001811115613da3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e736563757469766520747260448201527f616e7366657273206e6f7420737570706f7274656400000000000000000000006064820152608401610ba4565b8173ffffffffffffffffffffffffffffffffffffffff8516613e0c57613e0781600c80546000838152600d60205260408120829055600182018355919091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70155565b613e49565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614613e4957613e498582614376565b73ffffffffffffffffffffffffffffffffffffffff8416613e7257613e6d8161442d565b613eaf565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614613eaf57613eaf8482614551565b5050505050565b6000613f18826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166145a29092919063ffffffff16565b805190915015610c6c5780806020019051810190613f369190614e4e565b610c6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610ba4565b6114408282604051806020016040528060008152506145b1565b600073ffffffffffffffffffffffffffffffffffffffff84163b156141d0576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290614053903390899088908890600401615082565b602060405180830381600087803b15801561406d57600080fd5b505af19250505080156140bb575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526140b891810190614e86565b60015b614185573d8080156140e9576040519150601f19603f3d011682016040523d82523d6000602084013e6140ee565b606091505b50805161417d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610ba4565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a020000000000000000000000000000000000000000000000000000000014905061149b565b50600161149b565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310614221577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831061424d576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061426b57662386f26fc10000830492506010015b6305f5e1008310614283576305f5e100830492506008015b612710831061429757612710830492506004015b606483106142a9576064830492506002015b600a8310610a135760010192915050565b60018111156127595773ffffffffffffffffffffffffffffffffffffffff84161561431a5773ffffffffffffffffffffffffffffffffffffffff84166000908152600760205260408120805483929061431490849061527a565b90915550505b73ffffffffffffffffffffffffffffffffffffffff8316156127595773ffffffffffffffffffffffffffffffffffffffff83166000908152600760205260408120805483929061436b90849061524e565b909155505050505050565b60006001614383846122e2565b61438d919061527a565b6000838152600b60205260409020549091508082146143ed5773ffffffffffffffffffffffffffffffffffffffff84166000908152600a602090815260408083208584528252808320548484528184208190558352600b90915290208190555b506000918252600b6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600a81528383209183525290812055565b600c5460009061443f9060019061527a565b6000838152600d6020526040812054600c805493945090928490811061448e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080600c83815481106144d6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255828152600d9091526040808220849055858252812055600c805480614535577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600061455c836122e2565b73ffffffffffffffffffffffffffffffffffffffff9093166000908152600a602090815260408083208684528252808320859055938252600b9052919091209190915550565b606061149b8484600085614654565b6145bb838361476d565b6145c86000848484613fdc565b610c6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610ba4565b6060824710156146e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610ba4565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161470f9190615037565b60006040518083038185875af1925050503d806000811461474c576040519150601f19603f3d011682016040523d82523d6000602084013e614751565b606091505b5091509150614762878383876149a0565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166147ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610ba4565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1615614876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610ba4565b614884600083836001613d06565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1615614910576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610ba4565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260076020908152604080832080546001019055848352600690915280822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60608315614a33578251614a2c5773ffffffffffffffffffffffffffffffffffffffff85163b614a2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ba4565b508161149b565b61149b8383815115614a485781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba4919061510f565b828054614a88906152bd565b90600052602060002090601f016020900481019282614aaa5760008555614af0565b82601f10614ac357805160ff1916838001178555614af0565b82800160010185558215614af0579182015b82811115614af0578251825591602001919060010190614ad5565b50614afc929150614b00565b5090565b5b80821115614afc5760008155600101614b01565b600067ffffffffffffffff831115614b2f57614b2f6153bc565b614b6060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116016151ff565b9050828152838383011115614b7457600080fd5b828260208301376000602084830101529392505050565b60008083601f840112614b9c578182fd5b50813567ffffffffffffffff811115614bb3578182fd5b6020830191508360208260051b8501011115614bce57600080fd5b9250929050565b600060208284031215614be6578081fd5b81356127bf816153eb565b600060208284031215614c02578081fd5b81516127bf816153eb565b60008060408385031215614c1f578081fd5b8235614c2a816153eb565b91506020830135614c3a816153eb565b809150509250929050565b600080600060608486031215614c59578081fd5b8335614c64816153eb565b92506020840135614c74816153eb565b929592945050506040919091013590565b60008060008060808587031215614c9a578081fd5b8435614ca5816153eb565b93506020850135614cb5816153eb565b925060408501359150606085013567ffffffffffffffff811115614cd7578182fd5b8501601f81018713614ce7578182fd5b614cf687823560208401614b15565b91505092959194509250565b60008060408385031215614d14578182fd5b8235614d1f816153eb565b91506020830135614c3a8161540d565b60008060408385031215614d41578182fd5b8235614d4c816153eb565b946020939093013593505050565b60008060208385031215614d6c578182fd5b823567ffffffffffffffff811115614d82578283fd5b614d8e85828601614b8b565b90969095509350505050565b60006020808385031215614dac578182fd5b823567ffffffffffffffff80821115614dc3578384fd5b818501915085601f830112614dd6578384fd5b813581811115614de857614de86153bc565b8060051b9150614df98483016151ff565b8181528481019084860184860187018a1015614e13578788fd5b8795505b83861015614e415780359450614e2c856153eb565b84835260019590950194918601918601614e17565b5098975050505050505050565b600060208284031215614e5f578081fd5b81516127bf8161540d565b600060208284031215614e7b578081fd5b81356127bf8161541b565b600060208284031215614e97578081fd5b81516127bf8161541b565b600060208284031215614eb3578081fd5b813567ffffffffffffffff811115614ec9578182fd5b8201601f81018413614ed9578182fd5b61149b84823560208401614b15565b600060208284031215614ef9578081fd5b5035919050565b60008060408385031215614f12578182fd5b823591506020830135614c3a816153eb565b600080600060608486031215614f38578081fd5b833592506020840135614c74816153eb565b60008060408385031215614f5c578182fd5b50508035926020909101359150565b60008060008060608587031215614f80578182fd5b8435935060208501359250604085013567ffffffffffffffff811115614fa4578283fd5b614fb087828801614b8b565b95989497509550505050565b60008060008060808587031215614fd1578182fd5b5050823594602084013594506040840135936060013592509050565b60008151808452615005816020860160208601615291565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60008251615049818460208701615291565b9190910192915050565b60008351615065818460208801615291565b835190830190615079818360208801615291565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526150c16080830184614fed565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015615103578351835292840192918401916001016150e7565b50909695505050505050565b6020815260006127bf6020830184614fed565b6000602080835281845483600182811c91508083168061514357607f831692505b85831081141561517a577f4e487b710000000000000000000000000000000000000000000000000000000087526022600452602487fd5b87860183815260200181801561519757600181146151c6576151f0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616825287820196506151f0565b60008b815260209020895b868110156151ea578154848201529085019089016151d1565b83019750505b50949998505050505050505050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715615246576152466153bc565b604052919050565b600082198211156152615761526161535e565b500190565b6000826152755761527561538d565b500490565b60008282101561528c5761528c61535e565b500390565b60005b838110156152ac578181015183820152602001615294565b838111156127595750506000910152565b600181811c908216806152d157607f821691505b6020821081141561530b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156153435761534361535e565b5060010190565b6000826153595761535961538d565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff811681146110e857600080fd5b80151581146110e857600080fd5b7fffffffff00000000000000000000000000000000000000000000000000000000811681146110e857600080fdfea2646970667358221220002e318d196d7ca5f6bd32efa8a5ea567d71711a897dc9c903655a55a8ad8a2164736f6c6343000804003345786365656473206d6178696d756d206e756d626572206f662076616c696420"
};

// src/contracts/TrollNFTV2.ts
var TrollNFTV2 = class extends import_eth_contract4.Contract {
  constructor(wallet, address) {
    super(wallet, address, TrollNFTV2_json_default.abi, TrollNFTV2_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol, params.baseURI, this.wallet.utils.toString(params.cap), params.stakeToken, params.requireApproval, this.wallet.utils.toString(params.minimumStake), this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo, [params.nftInfo.listValidNFTs, this.wallet.utils.toString(params.nftInfo.maximumValidNFTs)]]);
  }
  parseAddStakesEvent(receipt) {
    return this.parseEvents(receipt, "AddStakes").map((e) => this.decodeAddStakesEvent(e));
  }
  decodeAddStakesEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_contract4.BigNumber(result.tokenId),
      amountAdded: new import_eth_contract4.BigNumber(result.amountAdded),
      newAmount: new import_eth_contract4.BigNumber(result.newAmount),
      _event: event
    };
  }
  parseAddValidNFTEvent(receipt) {
    return this.parseEvents(receipt, "AddValidNFT").map((e) => this.decodeAddValidNFTEvent(e));
  }
  decodeAddValidNFTEvent(event) {
    let result = event.data;
    return {
      nft: result.nft,
      _event: event
    };
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_contract4.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
  }
  decodeApprovalForAllEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      operator: result.operator,
      approved: result.approved,
      _event: event
    };
  }
  parseApprovedStakerEvent(receipt) {
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
  }
  decodeApprovedStakerEvent(event) {
    let result = event.data;
    return {
      staker: result.staker,
      allow: result.allow,
      _event: event
    };
  }
  parseAttributeEvent(receipt) {
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_contract4.BigNumber(result.tokenId),
      attribute: new import_eth_contract4.BigNumber(result.attribute),
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      baseURI: result.baseURI,
      _event: event
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      cap: new import_eth_contract4.BigNumber(result.cap),
      _event: event
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_contract4.BigNumber(result.tokenId),
      attribute: new import_eth_contract4.BigNumber(result.attribute),
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseEquipNFTEvent(receipt) {
    return this.parseEvents(receipt, "EquipNFT").map((e) => this.decodeEquipNFTEvent(e));
  }
  decodeEquipNFTEvent(event) {
    let result = event.data;
    return {
      trollId: new import_eth_contract4.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_contract4.BigNumber(result.nftId),
      _event: event
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      minimumStake: new import_eth_contract4.BigNumber(result.minimumStake),
      _event: event
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      protocolFee: new import_eth_contract4.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo,
      _event: event
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_contract4.BigNumber(result.tokenId),
      amount: new import_eth_contract4.BigNumber(result.amount),
      _event: event
    };
  }
  parseStakesApprovalEvent(receipt) {
    return this.parseEvents(receipt, "StakesApproval").map((e) => this.decodeStakesApprovalEvent(e));
  }
  decodeStakesApprovalEvent(event) {
    let result = event.data;
    return {
      fromTokenId: new import_eth_contract4.BigNumber(result.fromTokenId),
      spender: result.spender,
      amount: new import_eth_contract4.BigNumber(result.amount),
      _event: event
    };
  }
  parseStakesTransferEvent(receipt) {
    return this.parseEvents(receipt, "StakesTransfer").map((e) => this.decodeStakesTransferEvent(e));
  }
  decodeStakesTransferEvent(event) {
    let result = event.data;
    return {
      fromTokenId: new import_eth_contract4.BigNumber(result.fromTokenId),
      toTokenId: new import_eth_contract4.BigNumber(result.toTokenId),
      amount: new import_eth_contract4.BigNumber(result.amount),
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_contract4.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseUnequipNFTEvent(receipt) {
    return this.parseEvents(receipt, "UnequipNFT").map((e) => this.decodeUnequipNFTEvent(e));
  }
  decodeUnequipNFTEvent(event) {
    let result = event.data;
    return {
      trollId: new import_eth_contract4.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_contract4.BigNumber(result.nftId),
      _event: event
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_contract4.BigNumber(result.tokenId),
      amount: new import_eth_contract4.BigNumber(result.amount),
      _event: event
    };
  }
  assign() {
    let _attributes_call = async (param1) => {
      let result = await this.call("_attributes", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract4.BigNumber(result);
    };
    this._attributes = _attributes_call;
    let _customAttributes_call = async (param1) => {
      let result = await this.call("_customAttributes", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract4.BigNumber(result);
    };
    this._customAttributes = _customAttributes_call;
    let _stakesTransferAllowancesParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
    let _stakesTransferAllowances_call = async (params) => {
      let result = await this.call("_stakesTransferAllowances", _stakesTransferAllowancesParams(params));
      return new import_eth_contract4.BigNumber(result);
    };
    this._stakesTransferAllowances = _stakesTransferAllowances_call;
    let approvedStaker_call = async (param1) => {
      let result = await this.call("approvedStaker", [param1]);
      return result;
    };
    this.approvedStaker = approvedStaker_call;
    let balanceOf_call = async (owner) => {
      let result = await this.call("balanceOf", [owner]);
      return new import_eth_contract4.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let baseURI_call = async () => {
      let result = await this.call("baseURI");
      return result;
    };
    this.baseURI = baseURI_call;
    let cap_call = async () => {
      let result = await this.call("cap");
      return new import_eth_contract4.BigNumber(result);
    };
    this.cap = cap_call;
    let counter_call = async () => {
      let result = await this.call("counter");
      return new import_eth_contract4.BigNumber(result);
    };
    this.counter = counter_call;
    let creationDate_call = async (param1) => {
      let result = await this.call("creationDate", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract4.BigNumber(result);
    };
    this.creationDate = creationDate_call;
    let destoryDate_call = async (param1) => {
      let result = await this.call("destoryDate", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract4.BigNumber(result);
    };
    this.destoryDate = destoryDate_call;
    let extraStakes_call = async (param1) => {
      let result = await this.call("extraStakes", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract4.BigNumber(result);
    };
    this.extraStakes = extraStakes_call;
    let getApproved_call = async (tokenId) => {
      let result = await this.call("getApproved", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.getApproved = getApproved_call;
    let getAttributes1Params = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.base), this.wallet.utils.toString(params.offset), this.wallet.utils.toString(params.digits)];
    let getAttributes1_call = async (params) => {
      let result = await this.call("getAttributes1", getAttributes1Params(params));
      return new import_eth_contract4.BigNumber(result);
    };
    this.getAttributes1 = getAttributes1_call;
    let getAttributes2Params = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.base), this.wallet.utils.toString(params.digits)];
    let getAttributes2_call = async (params) => {
      let result = await this.call("getAttributes2", getAttributes2Params(params));
      return result.map((e) => new import_eth_contract4.BigNumber(e));
    };
    this.getAttributes2 = getAttributes2_call;
    let isApprovedForAllParams = (params) => [params.owner, params.operator];
    let isApprovedForAll_call = async (params) => {
      let result = await this.call("isApprovedForAll", isApprovedForAllParams(params));
      return result;
    };
    this.isApprovedForAll = isApprovedForAll_call;
    let isPermitted_call = async (param1) => {
      let result = await this.call("isPermitted", [param1]);
      return result;
    };
    this.isPermitted = isPermitted_call;
    let isValidNFT_call = async (param1) => {
      let result = await this.call("isValidNFT", [param1]);
      return result;
    };
    this.isValidNFT = isValidNFT_call;
    let lastStakeDate_call = async (param1) => {
      let result = await this.call("lastStakeDate", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract4.BigNumber(result);
    };
    this.lastStakeDate = lastStakeDate_call;
    let listValidNFTs_call = async (param1) => {
      let result = await this.call("listValidNFTs", [this.wallet.utils.toString(param1)]);
      return result;
    };
    this.listValidNFTs = listValidNFTs_call;
    let maximumValidNFTs_call = async () => {
      let result = await this.call("maximumValidNFTs");
      return new import_eth_contract4.BigNumber(result);
    };
    this.maximumValidNFTs = maximumValidNFTs_call;
    let minimumStake_call = async () => {
      let result = await this.call("minimumStake");
      return new import_eth_contract4.BigNumber(result);
    };
    this.minimumStake = minimumStake_call;
    let minted_call = async (param1) => {
      let result = await this.call("minted", [param1]);
      return result;
    };
    this.minted = minted_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let newOwner_call = async () => {
      let result = await this.call("newOwner");
      return result;
    };
    this.newOwner = newOwner_call;
    let nftsEquippedParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
    let nftsEquipped_call = async (params) => {
      let result = await this.call("nftsEquipped", nftsEquippedParams(params));
      return new import_eth_contract4.BigNumber(result);
    };
    this.nftsEquipped = nftsEquipped_call;
    let owner_call = async () => {
      let result = await this.call("owner");
      return result;
    };
    this.owner = owner_call;
    let ownerOf_call = async (tokenId) => {
      let result = await this.call("ownerOf", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.ownerOf = ownerOf_call;
    let protocolFee_call = async () => {
      let result = await this.call("protocolFee");
      return new import_eth_contract4.BigNumber(result);
    };
    this.protocolFee = protocolFee_call;
    let protocolFeeBalance_call = async () => {
      let result = await this.call("protocolFeeBalance");
      return new import_eth_contract4.BigNumber(result);
    };
    this.protocolFeeBalance = protocolFeeBalance_call;
    let protocolFeeTo_call = async () => {
      let result = await this.call("protocolFeeTo");
      return result;
    };
    this.protocolFeeTo = protocolFeeTo_call;
    let requireApproval_call = async () => {
      let result = await this.call("requireApproval");
      return result;
    };
    this.requireApproval = requireApproval_call;
    let stakeToken_call = async () => {
      let result = await this.call("stakeToken");
      return result;
    };
    this.stakeToken = stakeToken_call;
    let stakingBalance_call = async (param1) => {
      let result = await this.call("stakingBalance", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract4.BigNumber(result);
    };
    this.stakingBalance = stakingBalance_call;
    let supportsInterface_call = async (interfaceId) => {
      let result = await this.call("supportsInterface", [interfaceId]);
      return result;
    };
    this.supportsInterface = supportsInterface_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let tokenByIndex_call = async (index) => {
      let result = await this.call("tokenByIndex", [this.wallet.utils.toString(index)]);
      return new import_eth_contract4.BigNumber(result);
    };
    this.tokenByIndex = tokenByIndex_call;
    let tokenOfOwnerByIndexParams = (params) => [params.owner, this.wallet.utils.toString(params.index)];
    let tokenOfOwnerByIndex_call = async (params) => {
      let result = await this.call("tokenOfOwnerByIndex", tokenOfOwnerByIndexParams(params));
      return new import_eth_contract4.BigNumber(result);
    };
    this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
    let tokenURI_call = async (tokenId) => {
      let result = await this.call("tokenURI", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.tokenURI = tokenURI_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_contract4.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let trollOwnedNFTsParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
    let trollOwnedNFTs_call = async (params) => {
      let result = await this.call("trollOwnedNFTs", trollOwnedNFTsParams(params));
      return new import_eth_contract4.BigNumber(result);
    };
    this.trollOwnedNFTs = trollOwnedNFTs_call;
    let validNFTsLength_call = async () => {
      let result = await this.call("validNFTsLength");
      return new import_eth_contract4.BigNumber(result);
    };
    this.validNFTsLength = validNFTsLength_call;
    let addStakesParams = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount)];
    let addStakes_send = async (params) => {
      let result = await this.send("addStakes", addStakesParams(params));
      return result;
    };
    let addStakes_call = async (params) => {
      let result = await this.call("addStakes", addStakesParams(params));
      return;
    };
    this.addStakes = Object.assign(addStakes_send, {
      call: addStakes_call
    });
    let addValidNFTs_send = async (nfts) => {
      let result = await this.send("addValidNFTs", [nfts]);
      return result;
    };
    let addValidNFTs_call = async (nfts) => {
      let result = await this.call("addValidNFTs", [nfts]);
      return;
    };
    this.addValidNFTs = Object.assign(addValidNFTs_send, {
      call: addValidNFTs_call
    });
    let approveParams = (params) => [params.to, this.wallet.utils.toString(params.tokenId)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let batchApprove_send = async (stakers) => {
      let result = await this.send("batchApprove", [stakers]);
      return result;
    };
    let batchApprove_call = async (stakers) => {
      let result = await this.call("batchApprove", [stakers]);
      return;
    };
    this.batchApprove = Object.assign(batchApprove_send, {
      call: batchApprove_call
    });
    let deny_send = async (user) => {
      let result = await this.send("deny", [user]);
      return result;
    };
    let deny_call = async (user) => {
      let result = await this.call("deny", [user]);
      return;
    };
    this.deny = Object.assign(deny_send, {
      call: deny_call
    });
    let equipNFTParams = (params) => [this.wallet.utils.toString(params.trollId), params.nft, this.wallet.utils.toString(params.nftId)];
    let equipNFT_send = async (params) => {
      let result = await this.send("equipNFT", equipNFTParams(params));
      return result;
    };
    let equipNFT_call = async (params) => {
      let result = await this.call("equipNFT", equipNFTParams(params));
      return;
    };
    this.equipNFT = Object.assign(equipNFT_send, {
      call: equipNFT_call
    });
    let permit_send = async (user) => {
      let result = await this.send("permit", [user]);
      return result;
    };
    let permit_call = async (user) => {
      let result = await this.call("permit", [user]);
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
    let safeTransferFrom_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
      call: safeTransferFrom_call
    });
    let safeTransferFrom_1Params = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId), this.wallet.utils.stringToBytes(params.data)];
    let safeTransferFrom_1_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_1_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
      call: safeTransferFrom_1_call
    });
    let setApprovalForAllParams = (params) => [params.operator, params.approved];
    let setApprovalForAll_send = async (params) => {
      let result = await this.send("setApprovalForAll", setApprovalForAllParams(params));
      return result;
    };
    let setApprovalForAll_call = async (params) => {
      let result = await this.call("setApprovalForAll", setApprovalForAllParams(params));
      return;
    };
    this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
      call: setApprovalForAll_call
    });
    let setApprovedStakerParams = (params) => [params.staker, params.allow];
    let setApprovedStaker_send = async (params) => {
      let result = await this.send("setApprovedStaker", setApprovedStakerParams(params));
      return result;
    };
    let setApprovedStaker_call = async (params) => {
      let result = await this.call("setApprovedStaker", setApprovedStakerParams(params));
      return;
    };
    this.setApprovedStaker = Object.assign(setApprovedStaker_send, {
      call: setApprovedStaker_call
    });
    let setBaseURI_send = async (baseURI) => {
      let result = await this.send("setBaseURI", [baseURI]);
      return result;
    };
    let setBaseURI_call = async (baseURI) => {
      let result = await this.call("setBaseURI", [baseURI]);
      return;
    };
    this.setBaseURI = Object.assign(setBaseURI_send, {
      call: setBaseURI_call
    });
    let setCap_send = async (cap) => {
      let result = await this.send("setCap", [this.wallet.utils.toString(cap)]);
      return result;
    };
    let setCap_call = async (cap) => {
      let result = await this.call("setCap", [this.wallet.utils.toString(cap)]);
      return;
    };
    this.setCap = Object.assign(setCap_send, {
      call: setCap_call
    });
    let setCustomAttributeParams = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.attribute)];
    let setCustomAttribute_send = async (params) => {
      let result = await this.send("setCustomAttribute", setCustomAttributeParams(params));
      return result;
    };
    let setCustomAttribute_call = async (params) => {
      let result = await this.call("setCustomAttribute", setCustomAttributeParams(params));
      return;
    };
    this.setCustomAttribute = Object.assign(setCustomAttribute_send, {
      call: setCustomAttribute_call
    });
    let setMinimumStake_send = async (minimumStake) => {
      let result = await this.send("setMinimumStake", [this.wallet.utils.toString(minimumStake)]);
      return result;
    };
    let setMinimumStake_call = async (minimumStake) => {
      let result = await this.call("setMinimumStake", [this.wallet.utils.toString(minimumStake)]);
      return;
    };
    this.setMinimumStake = Object.assign(setMinimumStake_send, {
      call: setMinimumStake_call
    });
    let setProtocolFeeParams = (params) => [this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo];
    let setProtocolFee_send = async (params) => {
      let result = await this.send("setProtocolFee", setProtocolFeeParams(params));
      return result;
    };
    let setProtocolFee_call = async (params) => {
      let result = await this.call("setProtocolFee", setProtocolFeeParams(params));
      return;
    };
    this.setProtocolFee = Object.assign(setProtocolFee_send, {
      call: setProtocolFee_call
    });
    let stake_send = async (amount) => {
      let result = await this.send("stake", [this.wallet.utils.toString(amount)]);
      return result;
    };
    let stake_call = async (amount) => {
      let result = await this.call("stake", [this.wallet.utils.toString(amount)]);
      return new import_eth_contract4.BigNumber(result);
    };
    this.stake = Object.assign(stake_send, {
      call: stake_call
    });
    let takeOwnership_send = async () => {
      let result = await this.send("takeOwnership");
      return result;
    };
    let takeOwnership_call = async () => {
      let result = await this.call("takeOwnership");
      return;
    };
    this.takeOwnership = Object.assign(takeOwnership_send, {
      call: takeOwnership_call
    });
    let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
    let transferOwnership_send = async (newOwner) => {
      let result = await this.send("transferOwnership", [newOwner]);
      return result;
    };
    let transferOwnership_call = async (newOwner) => {
      let result = await this.call("transferOwnership", [newOwner]);
      return;
    };
    this.transferOwnership = Object.assign(transferOwnership_send, {
      call: transferOwnership_call
    });
    let transferProtocolFee_send = async () => {
      let result = await this.send("transferProtocolFee");
      return result;
    };
    let transferProtocolFee_call = async () => {
      let result = await this.call("transferProtocolFee");
      return;
    };
    this.transferProtocolFee = Object.assign(transferProtocolFee_send, {
      call: transferProtocolFee_call
    });
    let unequipNFTParams = (params) => [this.wallet.utils.toString(params.trollId), params.nft, this.wallet.utils.toString(params.nftId)];
    let unequipNFT_send = async (params) => {
      let result = await this.send("unequipNFT", unequipNFTParams(params));
      return result;
    };
    let unequipNFT_call = async (params) => {
      let result = await this.call("unequipNFT", unequipNFTParams(params));
      return;
    };
    this.unequipNFT = Object.assign(unequipNFT_send, {
      call: unequipNFT_call
    });
    let unstake_send = async (tokenId) => {
      let result = await this.send("unstake", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    let unstake_call = async (tokenId) => {
      let result = await this.call("unstake", [this.wallet.utils.toString(tokenId)]);
      return;
    };
    this.unstake = Object.assign(unstake_send, {
      call: unstake_call
    });
  }
};

// src/contracts/TrollNFT_VRF.ts
var import_eth_contract5 = __toModule(require("@ijstech/eth-contract"));

// src/contracts/TrollNFT_VRF.json.ts
var TrollNFT_VRF_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "__baseURI", "type": "string" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_stakeToken", "type": "address" }, { "internalType": "bool", "name": "_requireApproval", "type": "bool" }, { "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }, { "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }, { "internalType": "address[2]", "name": "vrfAddresses", "type": "address[2]" }, { "internalType": "bytes32[2]", "name": "vrfParams", "type": "bytes32[2]" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "allow", "type": "bool" }], "name": "ApprovedStaker", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "Attribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "baseURI", "type": "string" }], "name": "BaseURI", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cap", "type": "uint256" }], "name": "Cap", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "CustomAttribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minimumStake", "type": "uint256" }], "name": "MinimumStake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "protocolFeeTo", "type": "address" }], "name": "ProtocolFee", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Stake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstake", "type": "event" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_attributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_customAttributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "approvedStaker", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address[]", "name": "stakers", "type": "address[]" }], "name": "batchApprove", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "counter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "creationTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256", "name": "offset", "type": "uint256" }, { "internalType": "uint256", "name": "digits", "type": "uint256" }], "name": "getAttributes1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256[]", "name": "digits", "type": "uint256[]" }], "name": "getAttributes2", "outputs": [{ "internalType": "uint256[]", "name": "params", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "protocolFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "requestId", "type": "bytes32" }, { "internalType": "uint256", "name": "randomness", "type": "uint256" }], "name": "rawFulfillRandomness", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "requireApproval", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }, { "internalType": "bool", "name": "allow", "type": "bool" }], "name": "setApprovedStaker", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "__baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_cap", "type": "uint256" }], "name": "setCap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "setCustomAttribute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }], "name": "setMinimumStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "name": "setProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "_vrfKeyHash", "type": "bytes32" }, { "internalType": "uint256", "name": "_vrfFee", "type": "uint256" }], "name": "setVrfParams", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "stakeToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakingBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "transferProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawLink", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60e06040523480156200001157600080fd5b50604051620051043803806200510483398101604081905262000034916200053b565b8151602080840151600080546001600160a01b0319163317905560016003558d5190918e918e918e918e918e918e918e918e918e918a918a916200007f91600491908501906200032a565b508051620000959060059060208401906200032a565b505050818311620000ed5760405162461bcd60e51b815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c4665650000000060448201526064015b60405180910390fd5b8115806200010357506001600160a01b03811615155b620001515760405162461bcd60e51b815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f000000000000006044820152606401620000e4565b86516200016690600f9060208a01906200032a565b50600e869055606085901b6001600160601b0319166080526010805460ff191685151517905560118390556012829055601380546001600160a01b0319166001600160a01b0383161790556040517f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea7290620001e490600f9062000656565b60405180910390a17fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b600e546040516200022091815260200190565b60405180910390a17f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d6011546040516200025c91815260200190565b60405180910390a1601254601354604080519283526001600160a01b0390911660208301527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050506001600160601b0319606098891b811660c0529690971b90951660a05250620002f6945085935060009250620002e3915050565b6020020151826001602002015162000307565b5050505050505050505050620007ce565b6000546001600160a01b031633146200031f57600080fd5b601d91909155601e55565b828054620003389062000762565b90600052602060002090601f0160209004810192826200035c5760008555620003a7565b82601f106200037757805160ff1916838001178555620003a7565b82800160010185558215620003a7579182015b82811115620003a75782518255916020019190600101906200038a565b50620003b5929150620003b9565b5090565b5b80821115620003b55760008155600101620003ba565b8051620003dd81620007b5565b919050565b600082601f830112620003f3578081fd5b620003fd62000704565b8083856040860111156200040f578384fd5b835b60028110156200043e5781516200042881620007b5565b8452602093840193919091019060010162000411565b509095945050505050565b600082601f8301126200045a578081fd5b6200046462000704565b80838560408601111562000476578384fd5b835b60028110156200043e57815184526020938401939091019060010162000478565b80518015158114620003dd57600080fd5b600082601f830112620004bb578081fd5b81516001600160401b03811115620004d757620004d76200079f565b6020620004ed601f8301601f191682016200072f565b828152858284870101111562000501578384fd5b835b838110156200052057858101830151828201840152820162000503565b838111156200053157848385840101525b5095945050505050565b60008060008060008060008060008060006101a08c8e0312156200055d578687fd5b8b516001600160401b0381111562000573578788fd5b620005818e828f01620004aa565b60208e0151909c5090506001600160401b038111156200059f578788fd5b620005ad8e828f01620004aa565b60408e0151909b5090506001600160401b03811115620005cb578788fd5b620005d98e828f01620004aa565b99505060608c01519750620005f160808d01620003d0565b96506200060160a08d0162000499565b955060c08c0151945060e08c01519350620006206101008d01620003d0565b9250620006328d6101208e01620003e2565b9150620006448d6101608e0162000449565b90509295989b509295989b9093969950565b6000602080835281845483600182811c9150808316806200067857607f831692505b8583108114156200069757634e487b7160e01b87526022600452602487fd5b878601838152602001818015620006b75760018114620006c957620006f5565b60ff19861682528782019650620006f5565b60008b815260209020895b86811015620006ef57815484820152908501908901620006d4565b83019750505b50949998505050505050505050565b604080519081016001600160401b03811182821017156200072957620007296200079f565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200075a576200075a6200079f565b604052919050565b600181811c908216806200077757607f821691505b602082108114156200079957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620007cb57600080fd5b50565b60805160601c60a05160601c60c05160601c6148d3620008316000396000818161176e0152612ee701526000818161169c015281816119b50152612eab01526000818161050401528181610e3e0152818161171f0152612dac01526148d36000f3fe608060405234801561001057600080fd5b50600436106103575760003560e01c806370a08231116101c8578063b0e21e8a11610104578063e985e9c5116100a2578063ec5ffac21161007c578063ec5ffac2146107ae578063ef369252146107b7578063f0ab14ed146107d7578063f2fde38b146107f757600080fd5b8063e985e9c51461073f578063ea289d0014610788578063ea5ed3db1461079b57600080fd5b8063c87b56dd116100de578063c87b56dd146106cc578063d4ee1d90146106df578063d5ae33e2146106ff578063d79300661461071f57600080fd5b8063b0e21e8a14610690578063b13db57614610699578063b88d4fde146106b957600080fd5b80638da5cb5b116101715780639c52a7f11161014b5780639c52a7f114610644578063a22cb46514610657578063a2f55ae51461066a578063a694fc3a1461067d57600080fd5b80638da5cb5b1461060957806394985ddd1461062957806395d89b411461063c57600080fd5b806381fdc72b116101a257806381fdc72b146105d457806382d5ea6c146105dc5780638c8c8a50146105e957600080fd5b806370a082311461058b5780637776a0e51461059e5780637a8042bd146105c157600080fd5b80633fd8cc4e116102975780635452f3691161024057806361bc221a1161021a57806361bc221a146105545780636352211e1461055d57806368c1c088146105705780636c0360eb1461058357600080fd5b80635452f3691461052657806355f804b314610539578063605361721461054c57600080fd5b806347786d371161027157806347786d37146104d95780634f6ccce7146104ec57806351ed6a30146104ff57600080fd5b80633fd8cc4e1461049057806342842e0e146104b3578063476f2d5c146104c657600080fd5b80631e7269c5116103045780632457c8ea116102de5780632457c8ea1461044e5780632e17de78146104615780632f745c5914610474578063355274ea1461048757600080fd5b80631e7269c514610405578063233e99031461042857806323b872dd1461043b57600080fd5b8063095ea7b311610335578063095ea7b3146103d15780630a22d68c146103e657806318160ddd146103fd57600080fd5b806301ffc9a71461035c57806306fdde0314610384578063081812fc14610399575b600080fd5b61036f61036a36600461432b565b61080a565b60405190151581526020015b60405180910390f35b61038c610866565b60405161037b91906145d4565b6103ac6103a73660046143a9565b6108f8565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161037b565b6103e46103df366004614285565b61092c565b005b6103ef60145481565b60405190815260200161037b565b600c546103ef565b61036f61041336600461414f565b601b6020526000908152604090205460ff1681565b6103e46104363660046143a9565b610abe565b6103e461044936600461419b565b610b89565b6103e461045c36600461430a565b610c2a565b6103e461046f3660046143a9565b610d90565b6103ef610482366004614285565b610eaa565b6103ef600e5481565b61036f61049e36600461414f565b60026020526000908152604090205460ff1681565b6103e46104c136600461419b565b610f79565b6103ef6104d436600461444c565b610f94565b6103e46104e73660046143a9565b610fd8565b6103ef6104fa3660046143a9565b61109c565b6103ac7f000000000000000000000000000000000000000000000000000000000000000081565b6103e461053436600461430a565b611181565b6103e4610547366004614363565b6111b0565b6103e4611218565b6103ef60155481565b6103ac61056b3660046143a9565b611342565b6103e461057e36600461424f565b6113ce565b61038c611517565b6103ef61059936600461414f565b6115a5565b61036f6105ac36600461414f565b601a6020526000908152604090205460ff1681565b6103e46105cf3660046143a9565b611673565b6103e46116c2565b60105461036f9060ff1681565b6103ef6105f73660046143a9565b60166020526000908152604090205481565b6000546103ac9073ffffffffffffffffffffffffffffffffffffffff1681565b6103e461063736600461430a565b611756565b61038c611803565b6103e461065236600461414f565b611812565b6103e461066536600461424f565b6118b2565b6103e461067836600461414f565b6118bd565b6103ef61068b3660046143a9565b611960565b6103ef60125481565b6103ef6106a73660046143a9565b60176020526000908152604090205481565b6103e46106c73660046141d6565b611abe565b61038c6106da3660046143a9565b611b66565b6001546103ac9073ffffffffffffffffffffffffffffffffffffffff1681565b6103ef61070d3660046143a9565b60196020526000908152604090205481565b61073261072d3660046143fb565b611bcd565b60405161037b9190614590565b61036f61074d366004614169565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260096020908152604080832093909416825291909152205460ff1690565b6103e46107963660046143d9565b611d6e565b6103e46107a93660046142ae565b611f0b565b6103ef60115481565b6013546103ac9073ffffffffffffffffffffffffffffffffffffffff1681565b6103ef6107e53660046143a9565b60186020526000908152604090205481565b6103e461080536600461414f565b6120bf565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d63000000000000000000000000000000000000000000000000000000001480610860575061086082612156565b92915050565b60606004805461087590614733565b80601f01602080910402602001604051908101604052809291908181526020018280546108a190614733565b80156108ee5780601f106108c3576101008083540402835291602001916108ee565b820191906000526020600020905b8154815290600101906020018083116108d157829003601f168201915b5050505050905090565b600061090382612239565b5060009081526008602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061093782611342565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82161480610a235750610a23813361074d565b610aaf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016109f1565b610ab983836122c4565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ae257600080fd5b6012548111610b4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c4665650000000060448201526064016109f1565b60118190556040518181527f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d906020015b60405180910390a150565b610b933382612364565b610c1f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f7665640000000000000000000000000000000000000060648201526084016109f1565b610ab9838383612423565b3360009081526002602052604090205460ff16610cc9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016109f1565b60008281526018602052604090205415610d3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f41747472696275746520616c726561647920736574000000000000000000000060448201526064016109f1565b600082815260186020526040908190208290555182907fe73a9e48f41e228034f18c54b3f003b3de0b3bf1069ffd0c352543431b8a86a390610d849084815260200190565b60405180910390a25050565b610d9861272b565b610da23382612364565b610e08576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a656400000000000000000000000000000000000060448201526064016109f1565b610e118161279f565b60008181526016602052604081208054919055610e6573ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163383612885565b604051818152829033907ff960dbf9e5d0682f7a298ed974e33a28b4464914b7a2bfac12ae419a9afeb2809060200160405180910390a350610ea76001600355565b50565b6000610eb5836115a5565b8210610f43576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e647300000000000000000000000000000000000000000060648201526084016109f1565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600a60209081526040808320938352929052205490565b610ab983838360405180602001604052806000815250611abe565b6000610fa08483612959565b610faa8585612959565b600087815260176020526040902054610fc391906146dc565b610fcd91906147c0565b90505b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ffc57600080fd5b600e548111611067576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f43617020616c726561647920657863656564656400000000000000000000000060448201526064016109f1565b600e8190556040518181527fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b90602001610b7e565b60006110a7600c5490565b8210611135576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e6473000000000000000000000000000000000000000060648201526084016109f1565b600c828154811061116f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146111a557600080fd5b601d91909155601e55565b60005473ffffffffffffffffffffffffffffffffffffffff1633146111d457600080fd5b80516111e790600f906020840190613fb4565b507f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f604051610b7e91906145e7565b60015473ffffffffffffffffffffffffffffffffffffffff1633146112bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016109f1565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610860576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016109f1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146113f257600080fd5b60105460ff1661142857601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b80156114815773ffffffffffffffffffffffffffffffffffffffff82166000908152601a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556114cd565b73ffffffffffffffffffffffffffffffffffffffff82166000908152601a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b8173ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52382604051610d84911515815260200190565b600f805461152490614733565b80601f016020809104026020016040519081016040528092919081815260200182805461155090614733565b801561159d5780601f106115725761010080835404028352916020019161159d565b820191906000526020600020905b81548152906001019060200180831161158057829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff821661164a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016109f1565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205490565b60005473ffffffffffffffffffffffffffffffffffffffff16331461169757600080fd5b610ea77f00000000000000000000000000000000000000000000000000000000000000003383612885565b6116ca61272b565b60135473ffffffffffffffffffffffffffffffffffffffff16158015906116f357506000601454115b1561174a576014805460009091556013546117489073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116911683612885565b505b6117546001600355565b565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146117f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c0060448201526064016109f1565b6117ff82826129eb565b5050565b60606005805461087590614733565b60005473ffffffffffffffffffffffffffffffffffffffff16331461183657600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610b7e565b6117ff338383612a41565b60005473ffffffffffffffffffffffffffffffffffffffff1633146118e157600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610b7e565b600061196b82612b6f565b601e546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529192509073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b1580156119f757600080fd5b505afa158015611a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a2f91906143c1565b1015611a97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f7420656e6f756768204c494e4b000000000000000000000000000000000060448201526064016109f1565b6000611aa7601d54601e54612ea7565b6000908152601f6020526040902082905550919050565b611ac83383612364565b611b54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f7665640000000000000000000000000000000000000060648201526084016109f1565b611b608484848461303f565b50505050565b6060611b7182612239565b6000611b7b6130e2565b90506000815111611b9b5760405180602001604052806000815250611bc6565b80611ba5846130f1565b604051602001611bb69291906144e3565b6040516020818303038152906040525b9392505050565b6060818067ffffffffffffffff811115611c10577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015611c39578160200160208202803683370190505b5060008781526017602052604081205491935090815b83811015611d6257611ca088888884818110611c94577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135612959565b611caa8985612959565b611cb490846146dc565b611cbe91906147c0565b858281518110611cf7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050868682818110611d3c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013583611d4e91906146c4565b925080611d5a81614787565b915050611c4f565b50505050949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611d9257600080fd5b8160115411611dfd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c4665650000000060448201526064016109f1565b811580611e1f575073ffffffffffffffffffffffffffffffffffffffff811615155b611e85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f0000000000000060448201526064016109f1565b6012829055601380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040805184815260208101929092527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611f2f57600080fd5b601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558060005b81811015611b60576001601a6000868685818110611fa5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190611fba919061414f565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055838382818110612046577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201602081019061205b919061414f565b73ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52360016040516120a5911515815260200190565b60405180910390a2806120b781614787565b915050611f5e565b60005473ffffffffffffffffffffffffffffffffffffffff1633146120e357600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610b7e565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806121e957507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061086057507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610860565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff16610ea7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016109f1565b600081815260086020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155819061231e82611342565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061237083611342565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806123de575073ffffffffffffffffffffffffffffffffffffffff80821660009081526009602090815260408083209388168352929052205460ff165b80610fd057508373ffffffffffffffffffffffffffffffffffffffff16612404846108f8565b73ffffffffffffffffffffffffffffffffffffffff1614949350505050565b8273ffffffffffffffffffffffffffffffffffffffff1661244382611342565b73ffffffffffffffffffffffffffffffffffffffff16146124e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016109f1565b73ffffffffffffffffffffffffffffffffffffffff8216612588576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016109f1565b61259583838360016131e0565b8273ffffffffffffffffffffffffffffffffffffffff166125b582611342565b73ffffffffffffffffffffffffffffffffffffffff1614612658576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016109f1565b600081815260086020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff8781168086526007855283862080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01905590871680865283862080546001019055868652600690945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60026003541415612798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109f1565b6002600355565b60006127aa82611342565b90506127ba8160008460016131e0565b6127c382611342565b600083815260086020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff85168085526007845282852080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190558785526006909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610ab99084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152613390565b60008280156129cd5760018316801561297457849250612979565b600192505b506002830492505b82156129c857838402848582041461299857600080fd5b935060018316156129bd5783820282858204141585151516156129ba57600080fd5b91505b600283049250612981565b6129e4565b8280156129dd57600092506129e2565b600192505b505b5092915050565b6000828152601f602090815260408083205480845260178352928190208490555183815282917f1e6edca497f4aff07b388b2c8af55371a16eb956ed650861cb45f11758e4a65b910160405180910390a2505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612ad7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016109f1565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526009602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6000612b7961272b565b601054339060ff161580612b9c5750336000908152601a602052604090205460ff165b612c02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a656400000000000000000000000000000000000060448201526064016109f1565b60125483118015612c215750601154601254612c1e90856146f0565b10155b612c87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d696e696e756d207374616b65206e6f74206d6574000000000000000000000060448201526064016109f1565b600e54600c5410612cf4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f436170206578636565646564000000000000000000000000000000000000000060448201526064016109f1565b60105460ff161580612d165750336000908152601b602052604090205460ff16155b612d7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f596f752063616e206f6e6c79207374616b65206f6e636500000000000000000060448201526064016109f1565b601560008154612d8b90614787565b91829055509150612dd473ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001682308661349c565b601254612de190846146f0565b6000838152601660205260408120919091556012546014805491929091612e099084906146c4565b9091555050336000908152601b6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905584835260199091529020429055612e6081836134fa565b604051838152829033907f5af417134f72a9d41143ace85b0a26dce6f550f894f2cbc1eeee8810603d91b69060200160405180910390a350612ea26001600355565b919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f000000000000000000000000000000000000000000000000000000000000000084866000604051602001612f24929190918252602082015260400190565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401612f519392919061455b565b602060405180830381600087803b158015612f6b57600080fd5b505af1158015612f7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fa391906142ee565b506000838152601c6020818152604080842054815180840189905280830186905230606082015260808082018390528351808303909101815260a090910190925281519183019190912093879052919052612fff9060016146c4565b6000858152601c6020526040902055610fd08482604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b61304a848484612423565b61305684848484613514565b611b60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016109f1565b6060600f805461087590614733565b606060006130fe83613710565b600101905060008167ffffffffffffffff811115613145577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561316f576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846131d3576131d8565b613179565b509392505050565b6131ec848484846137f2565b600181111561327d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e736563757469766520747260448201527f616e7366657273206e6f7420737570706f72746564000000000000000000000060648201526084016109f1565b8173ffffffffffffffffffffffffffffffffffffffff85166132e6576132e181600c80546000838152600d60205260408120829055600182018355919091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70155565b613323565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146133235761332385826138ae565b73ffffffffffffffffffffffffffffffffffffffff841661334c5761334781613965565b613389565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614613389576133898482613a89565b5050505050565b60006133f2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16613ada9092919063ffffffff16565b805190915015610ab9578080602001905181019061341091906142ee565b610ab9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016109f1565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611b609085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016128d7565b6117ff828260405180602001604052806000815250613ae9565b600073ffffffffffffffffffffffffffffffffffffffff84163b15613708576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a029061358b903390899088908890600401614512565b602060405180830381600087803b1580156135a557600080fd5b505af19250505080156135f3575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526135f091810190614347565b60015b6136bd573d808015613621576040519150601f19603f3d011682016040523d82523d6000602084013e613626565b606091505b5080516136b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016109f1565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610fd0565b506001610fd0565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613759577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310613785576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106137a357662386f26fc10000830492506010015b6305f5e10083106137bb576305f5e100830492506008015b61271083106137cf57612710830492506004015b606483106137e1576064830492506002015b600a83106108605760010192915050565b6001811115611b605773ffffffffffffffffffffffffffffffffffffffff8416156138525773ffffffffffffffffffffffffffffffffffffffff84166000908152600760205260408120805483929061384c9084906146f0565b90915550505b73ffffffffffffffffffffffffffffffffffffffff831615611b605773ffffffffffffffffffffffffffffffffffffffff8316600090815260076020526040812080548392906138a39084906146c4565b909155505050505050565b600060016138bb846115a5565b6138c591906146f0565b6000838152600b60205260409020549091508082146139255773ffffffffffffffffffffffffffffffffffffffff84166000908152600a602090815260408083208584528252808320548484528184208190558352600b90915290208190555b506000918252600b6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600a81528383209183525290812055565b600c54600090613977906001906146f0565b6000838152600d6020526040812054600c80549394509092849081106139c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080600c8381548110613a0e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255828152600d9091526040808220849055858252812055600c805480613a6d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000613a94836115a5565b73ffffffffffffffffffffffffffffffffffffffff9093166000908152600a602090815260408083208684528252808320859055938252600b9052919091209190915550565b6060610fd08484600085613b8c565b613af38383613ca5565b613b006000848484613514565b610ab9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016109f1565b606082471015613c1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016109f1565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051613c4791906144c7565b60006040518083038185875af1925050503d8060008114613c84576040519150601f19603f3d011682016040523d82523d6000602084013e613c89565b606091505b5091509150613c9a87838387613ed8565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216613d22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016109f1565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1615613dae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016109f1565b613dbc6000838360016131e0565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1615613e48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016109f1565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260076020908152604080832080546001019055848352600690915280822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60608315613f6b578251613f645773ffffffffffffffffffffffffffffffffffffffff85163b613f64576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109f1565b5081610fd0565b610fd08383815115613f805781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f191906145d4565b828054613fc090614733565b90600052602060002090601f016020900481019282613fe25760008555614028565b82601f10613ffb57805160ff1916838001178555614028565b82800160010185558215614028579182015b8281111561402857825182559160200191906001019061400d565b50614034929150614038565b5090565b5b808211156140345760008155600101614039565b600067ffffffffffffffff8084111561406857614068614832565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156140ae576140ae614832565b816040528093508581528686860111156140c757600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612ea257600080fd5b60008083601f840112614116578081fd5b50813567ffffffffffffffff81111561412d578182fd5b6020830191508360208260051b850101111561414857600080fd5b9250929050565b600060208284031215614160578081fd5b611bc6826140e1565b6000806040838503121561417b578081fd5b614184836140e1565b9150614192602084016140e1565b90509250929050565b6000806000606084860312156141af578081fd5b6141b8846140e1565b92506141c6602085016140e1565b9150604084013590509250925092565b600080600080608085870312156141eb578081fd5b6141f4856140e1565b9350614202602086016140e1565b925060408501359150606085013567ffffffffffffffff811115614224578182fd5b8501601f81018713614234578182fd5b6142438782356020840161404d565b91505092959194509250565b60008060408385031215614261578182fd5b61426a836140e1565b9150602083013561427a81614861565b809150509250929050565b60008060408385031215614297578182fd5b6142a0836140e1565b946020939093013593505050565b600080602083850312156142c0578182fd5b823567ffffffffffffffff8111156142d6578283fd5b6142e285828601614105565b90969095509350505050565b6000602082840312156142ff578081fd5b8151611bc681614861565b6000806040838503121561431c578182fd5b50508035926020909101359150565b60006020828403121561433c578081fd5b8135611bc68161486f565b600060208284031215614358578081fd5b8151611bc68161486f565b600060208284031215614374578081fd5b813567ffffffffffffffff81111561438a578182fd5b8201601f8101841361439a578182fd5b610fd08482356020840161404d565b6000602082840312156143ba578081fd5b5035919050565b6000602082840312156143d2578081fd5b5051919050565b600080604083850312156143eb578182fd5b82359150614192602084016140e1565b60008060008060608587031215614410578182fd5b8435935060208501359250604085013567ffffffffffffffff811115614434578283fd5b61444087828801614105565b95989497509550505050565b60008060008060808587031215614461578182fd5b5050823594602084013594506040840135936060013592509050565b60008151808452614495816020860160208601614707565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082516144d9818460208701614707565b9190910192915050565b600083516144f5818460208801614707565b835190830190614509818360208801614707565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152614551608083018461447d565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff84168152826020820152606060408201526000610fcd606083018461447d565b6020808252825182820181905260009190848201906040850190845b818110156145c8578351835292840192918401916001016145ac565b50909695505050505050565b602081526000611bc6602083018461447d565b6000602080835281845483600182811c91508083168061460857607f831692505b85831081141561463f577f4e487b710000000000000000000000000000000000000000000000000000000087526022600452602487fd5b87860183815260200181801561465c576001811461468b576146b5565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616825287820196506146b5565b60008b815260209020895b868110156146af57815484820152908501908901614696565b83019750505b50949998505050505050505050565b600082198211156146d7576146d76147d4565b500190565b6000826146eb576146eb614803565b500490565b600082821015614702576147026147d4565b500390565b60005b8381101561472257818101518382015260200161470a565b83811115611b605750506000910152565b600181811c9082168061474757607f821691505b60208210811415614781577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156147b9576147b96147d4565b5060010190565b6000826147cf576147cf614803565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114610ea757600080fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610ea757600080fdfea2646970667358221220fc585890847f9b2bd14110ca7165b31282c27c8534076410b402260453e8c0dd64736f6c63430008040033"
};

// src/contracts/TrollNFT_VRF.ts
var TrollNFT_VRF = class extends import_eth_contract5.Contract {
  constructor(wallet, address) {
    super(wallet, address, TrollNFT_VRF_json_default.abi, TrollNFT_VRF_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol, params.baseURI, this.wallet.utils.toString(params.cap), params.stakeToken, params.requireApproval, this.wallet.utils.toString(params.minimumStake), this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo, params.vrfAddresses, this.wallet.utils.stringToBytes32(params.vrfParams)]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_contract5.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
  }
  decodeApprovalForAllEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      operator: result.operator,
      approved: result.approved,
      _event: event
    };
  }
  parseApprovedStakerEvent(receipt) {
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
  }
  decodeApprovedStakerEvent(event) {
    let result = event.data;
    return {
      staker: result.staker,
      allow: result.allow,
      _event: event
    };
  }
  parseAttributeEvent(receipt) {
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_contract5.BigNumber(result.tokenId),
      attribute: new import_eth_contract5.BigNumber(result.attribute),
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      baseURI: result.baseURI,
      _event: event
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      cap: new import_eth_contract5.BigNumber(result.cap),
      _event: event
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_contract5.BigNumber(result.tokenId),
      attribute: new import_eth_contract5.BigNumber(result.attribute),
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      minimumStake: new import_eth_contract5.BigNumber(result.minimumStake),
      _event: event
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      protocolFee: new import_eth_contract5.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo,
      _event: event
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_contract5.BigNumber(result.tokenId),
      amount: new import_eth_contract5.BigNumber(result.amount),
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_contract5.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_contract5.BigNumber(result.tokenId),
      amount: new import_eth_contract5.BigNumber(result.amount),
      _event: event
    };
  }
  assign() {
    let _attributes_call = async (param1) => {
      let result = await this.call("_attributes", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract5.BigNumber(result);
    };
    this._attributes = _attributes_call;
    let _customAttributes_call = async (param1) => {
      let result = await this.call("_customAttributes", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract5.BigNumber(result);
    };
    this._customAttributes = _customAttributes_call;
    let approvedStaker_call = async (param1) => {
      let result = await this.call("approvedStaker", [param1]);
      return result;
    };
    this.approvedStaker = approvedStaker_call;
    let balanceOf_call = async (owner) => {
      let result = await this.call("balanceOf", [owner]);
      return new import_eth_contract5.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let baseURI_call = async () => {
      let result = await this.call("baseURI");
      return result;
    };
    this.baseURI = baseURI_call;
    let cap_call = async () => {
      let result = await this.call("cap");
      return new import_eth_contract5.BigNumber(result);
    };
    this.cap = cap_call;
    let counter_call = async () => {
      let result = await this.call("counter");
      return new import_eth_contract5.BigNumber(result);
    };
    this.counter = counter_call;
    let creationTime_call = async (param1) => {
      let result = await this.call("creationTime", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract5.BigNumber(result);
    };
    this.creationTime = creationTime_call;
    let getApproved_call = async (tokenId) => {
      let result = await this.call("getApproved", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.getApproved = getApproved_call;
    let getAttributes1Params = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.base), this.wallet.utils.toString(params.offset), this.wallet.utils.toString(params.digits)];
    let getAttributes1_call = async (params) => {
      let result = await this.call("getAttributes1", getAttributes1Params(params));
      return new import_eth_contract5.BigNumber(result);
    };
    this.getAttributes1 = getAttributes1_call;
    let getAttributes2Params = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.base), this.wallet.utils.toString(params.digits)];
    let getAttributes2_call = async (params) => {
      let result = await this.call("getAttributes2", getAttributes2Params(params));
      return result.map((e) => new import_eth_contract5.BigNumber(e));
    };
    this.getAttributes2 = getAttributes2_call;
    let isApprovedForAllParams = (params) => [params.owner, params.operator];
    let isApprovedForAll_call = async (params) => {
      let result = await this.call("isApprovedForAll", isApprovedForAllParams(params));
      return result;
    };
    this.isApprovedForAll = isApprovedForAll_call;
    let isPermitted_call = async (param1) => {
      let result = await this.call("isPermitted", [param1]);
      return result;
    };
    this.isPermitted = isPermitted_call;
    let minimumStake_call = async () => {
      let result = await this.call("minimumStake");
      return new import_eth_contract5.BigNumber(result);
    };
    this.minimumStake = minimumStake_call;
    let minted_call = async (param1) => {
      let result = await this.call("minted", [param1]);
      return result;
    };
    this.minted = minted_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let newOwner_call = async () => {
      let result = await this.call("newOwner");
      return result;
    };
    this.newOwner = newOwner_call;
    let owner_call = async () => {
      let result = await this.call("owner");
      return result;
    };
    this.owner = owner_call;
    let ownerOf_call = async (tokenId) => {
      let result = await this.call("ownerOf", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.ownerOf = ownerOf_call;
    let protocolFee_call = async () => {
      let result = await this.call("protocolFee");
      return new import_eth_contract5.BigNumber(result);
    };
    this.protocolFee = protocolFee_call;
    let protocolFeeBalance_call = async () => {
      let result = await this.call("protocolFeeBalance");
      return new import_eth_contract5.BigNumber(result);
    };
    this.protocolFeeBalance = protocolFeeBalance_call;
    let protocolFeeTo_call = async () => {
      let result = await this.call("protocolFeeTo");
      return result;
    };
    this.protocolFeeTo = protocolFeeTo_call;
    let requireApproval_call = async () => {
      let result = await this.call("requireApproval");
      return result;
    };
    this.requireApproval = requireApproval_call;
    let stakeToken_call = async () => {
      let result = await this.call("stakeToken");
      return result;
    };
    this.stakeToken = stakeToken_call;
    let stakingBalance_call = async (param1) => {
      let result = await this.call("stakingBalance", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract5.BigNumber(result);
    };
    this.stakingBalance = stakingBalance_call;
    let supportsInterface_call = async (interfaceId) => {
      let result = await this.call("supportsInterface", [interfaceId]);
      return result;
    };
    this.supportsInterface = supportsInterface_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let tokenByIndex_call = async (index) => {
      let result = await this.call("tokenByIndex", [this.wallet.utils.toString(index)]);
      return new import_eth_contract5.BigNumber(result);
    };
    this.tokenByIndex = tokenByIndex_call;
    let tokenOfOwnerByIndexParams = (params) => [params.owner, this.wallet.utils.toString(params.index)];
    let tokenOfOwnerByIndex_call = async (params) => {
      let result = await this.call("tokenOfOwnerByIndex", tokenOfOwnerByIndexParams(params));
      return new import_eth_contract5.BigNumber(result);
    };
    this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
    let tokenURI_call = async (tokenId) => {
      let result = await this.call("tokenURI", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.tokenURI = tokenURI_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_contract5.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let approveParams = (params) => [params.to, this.wallet.utils.toString(params.tokenId)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let batchApprove_send = async (stakers) => {
      let result = await this.send("batchApprove", [stakers]);
      return result;
    };
    let batchApprove_call = async (stakers) => {
      let result = await this.call("batchApprove", [stakers]);
      return;
    };
    this.batchApprove = Object.assign(batchApprove_send, {
      call: batchApprove_call
    });
    let deny_send = async (user) => {
      let result = await this.send("deny", [user]);
      return result;
    };
    let deny_call = async (user) => {
      let result = await this.call("deny", [user]);
      return;
    };
    this.deny = Object.assign(deny_send, {
      call: deny_call
    });
    let permit_send = async (user) => {
      let result = await this.send("permit", [user]);
      return result;
    };
    let permit_call = async (user) => {
      let result = await this.call("permit", [user]);
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let rawFulfillRandomnessParams = (params) => [this.wallet.utils.stringToBytes32(params.requestId), this.wallet.utils.toString(params.randomness)];
    let rawFulfillRandomness_send = async (params) => {
      let result = await this.send("rawFulfillRandomness", rawFulfillRandomnessParams(params));
      return result;
    };
    let rawFulfillRandomness_call = async (params) => {
      let result = await this.call("rawFulfillRandomness", rawFulfillRandomnessParams(params));
      return;
    };
    this.rawFulfillRandomness = Object.assign(rawFulfillRandomness_send, {
      call: rawFulfillRandomness_call
    });
    let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
    let safeTransferFrom_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
      call: safeTransferFrom_call
    });
    let safeTransferFrom_1Params = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId), this.wallet.utils.stringToBytes(params.data)];
    let safeTransferFrom_1_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_1_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
      call: safeTransferFrom_1_call
    });
    let setApprovalForAllParams = (params) => [params.operator, params.approved];
    let setApprovalForAll_send = async (params) => {
      let result = await this.send("setApprovalForAll", setApprovalForAllParams(params));
      return result;
    };
    let setApprovalForAll_call = async (params) => {
      let result = await this.call("setApprovalForAll", setApprovalForAllParams(params));
      return;
    };
    this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
      call: setApprovalForAll_call
    });
    let setApprovedStakerParams = (params) => [params.staker, params.allow];
    let setApprovedStaker_send = async (params) => {
      let result = await this.send("setApprovedStaker", setApprovedStakerParams(params));
      return result;
    };
    let setApprovedStaker_call = async (params) => {
      let result = await this.call("setApprovedStaker", setApprovedStakerParams(params));
      return;
    };
    this.setApprovedStaker = Object.assign(setApprovedStaker_send, {
      call: setApprovedStaker_call
    });
    let setBaseURI_send = async (baseURI) => {
      let result = await this.send("setBaseURI", [baseURI]);
      return result;
    };
    let setBaseURI_call = async (baseURI) => {
      let result = await this.call("setBaseURI", [baseURI]);
      return;
    };
    this.setBaseURI = Object.assign(setBaseURI_send, {
      call: setBaseURI_call
    });
    let setCap_send = async (cap) => {
      let result = await this.send("setCap", [this.wallet.utils.toString(cap)]);
      return result;
    };
    let setCap_call = async (cap) => {
      let result = await this.call("setCap", [this.wallet.utils.toString(cap)]);
      return;
    };
    this.setCap = Object.assign(setCap_send, {
      call: setCap_call
    });
    let setCustomAttributeParams = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.attribute)];
    let setCustomAttribute_send = async (params) => {
      let result = await this.send("setCustomAttribute", setCustomAttributeParams(params));
      return result;
    };
    let setCustomAttribute_call = async (params) => {
      let result = await this.call("setCustomAttribute", setCustomAttributeParams(params));
      return;
    };
    this.setCustomAttribute = Object.assign(setCustomAttribute_send, {
      call: setCustomAttribute_call
    });
    let setMinimumStake_send = async (minimumStake) => {
      let result = await this.send("setMinimumStake", [this.wallet.utils.toString(minimumStake)]);
      return result;
    };
    let setMinimumStake_call = async (minimumStake) => {
      let result = await this.call("setMinimumStake", [this.wallet.utils.toString(minimumStake)]);
      return;
    };
    this.setMinimumStake = Object.assign(setMinimumStake_send, {
      call: setMinimumStake_call
    });
    let setProtocolFeeParams = (params) => [this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo];
    let setProtocolFee_send = async (params) => {
      let result = await this.send("setProtocolFee", setProtocolFeeParams(params));
      return result;
    };
    let setProtocolFee_call = async (params) => {
      let result = await this.call("setProtocolFee", setProtocolFeeParams(params));
      return;
    };
    this.setProtocolFee = Object.assign(setProtocolFee_send, {
      call: setProtocolFee_call
    });
    let setVrfParamsParams = (params) => [this.wallet.utils.stringToBytes32(params.vrfKeyHash), this.wallet.utils.toString(params.vrfFee)];
    let setVrfParams_send = async (params) => {
      let result = await this.send("setVrfParams", setVrfParamsParams(params));
      return result;
    };
    let setVrfParams_call = async (params) => {
      let result = await this.call("setVrfParams", setVrfParamsParams(params));
      return;
    };
    this.setVrfParams = Object.assign(setVrfParams_send, {
      call: setVrfParams_call
    });
    let stake_send = async (amount) => {
      let result = await this.send("stake", [this.wallet.utils.toString(amount)]);
      return result;
    };
    let stake_call = async (amount) => {
      let result = await this.call("stake", [this.wallet.utils.toString(amount)]);
      return new import_eth_contract5.BigNumber(result);
    };
    this.stake = Object.assign(stake_send, {
      call: stake_call
    });
    let takeOwnership_send = async () => {
      let result = await this.send("takeOwnership");
      return result;
    };
    let takeOwnership_call = async () => {
      let result = await this.call("takeOwnership");
      return;
    };
    this.takeOwnership = Object.assign(takeOwnership_send, {
      call: takeOwnership_call
    });
    let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
    let transferOwnership_send = async (newOwner) => {
      let result = await this.send("transferOwnership", [newOwner]);
      return result;
    };
    let transferOwnership_call = async (newOwner) => {
      let result = await this.call("transferOwnership", [newOwner]);
      return;
    };
    this.transferOwnership = Object.assign(transferOwnership_send, {
      call: transferOwnership_call
    });
    let transferProtocolFee_send = async () => {
      let result = await this.send("transferProtocolFee");
      return result;
    };
    let transferProtocolFee_call = async () => {
      let result = await this.call("transferProtocolFee");
      return;
    };
    this.transferProtocolFee = Object.assign(transferProtocolFee_send, {
      call: transferProtocolFee_call
    });
    let unstake_send = async (tokenId) => {
      let result = await this.send("unstake", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    let unstake_call = async (tokenId) => {
      let result = await this.call("unstake", [this.wallet.utils.toString(tokenId)]);
      return;
    };
    this.unstake = Object.assign(unstake_send, {
      call: unstake_call
    });
    let withdrawLink_send = async (amount) => {
      let result = await this.send("withdrawLink", [this.wallet.utils.toString(amount)]);
      return result;
    };
    let withdrawLink_call = async (amount) => {
      let result = await this.call("withdrawLink", [this.wallet.utils.toString(amount)]);
      return;
    };
    this.withdrawLink = Object.assign(withdrawLink_send, {
      call: withdrawLink_call
    });
  }
};

// src/contracts/TrollNFT_VRFV2.ts
var import_eth_contract6 = __toModule(require("@ijstech/eth-contract"));

// src/contracts/TrollNFT_VRFV2.json.ts
var TrollNFT_VRFV2_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "__baseURI", "type": "string" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_stakeToken", "type": "address" }, { "internalType": "bool", "name": "_requireApproval", "type": "bool" }, { "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }, { "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }, { "components": [{ "internalType": "contract IERC721[]", "name": "listValidNFTs", "type": "address[]" }, { "internalType": "uint256", "name": "maximumValidNFTs", "type": "uint256" }], "internalType": "struct TrollNFTV2.NFTInfo", "name": "_nftInfo", "type": "tuple" }, { "components": [{ "internalType": "address[2]", "name": "vrfAddresses", "type": "address[2]" }, { "internalType": "bytes32[2]", "name": "vrfParams", "type": "bytes32[2]" }], "internalType": "struct TrollNFT_VRFV2.VRFInfo", "name": "_vrfInfo", "type": "tuple" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountAdded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newAmount", "type": "uint256" }], "name": "AddStakes", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }], "name": "AddValidNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "allow", "type": "bool" }], "name": "ApprovedStaker", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "Attribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "baseURI", "type": "string" }], "name": "BaseURI", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cap", "type": "uint256" }], "name": "Cap", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "CustomAttribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "EquipNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minimumStake", "type": "uint256" }], "name": "MinimumStake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "protocolFeeTo", "type": "address" }], "name": "ProtocolFee", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Stake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "StakesApproval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "toTokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "StakesTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "UnequipNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstake", "type": "event" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_attributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_customAttributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "_stakesTransferAllowances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "addStakes", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721[]", "name": "nfts", "type": "address[]" }], "name": "addValidNFTs", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "approvedStaker", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address[]", "name": "stakers", "type": "address[]" }], "name": "batchApprove", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "counter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "creationDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "destoryDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "equipNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "extraStakes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256", "name": "offset", "type": "uint256" }, { "internalType": "uint256", "name": "digits", "type": "uint256" }], "name": "getAttributes1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256[]", "name": "digits", "type": "uint256[]" }], "name": "getAttributes2", "outputs": [{ "internalType": "uint256[]", "name": "params", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "name": "isValidNFT", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lastStakeDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "listValidNFTs", "outputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "maximumValidNFTs", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftsEquipped", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "protocolFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "requestId", "type": "bytes32" }, { "internalType": "uint256", "name": "randomness", "type": "uint256" }], "name": "rawFulfillRandomness", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "requireApproval", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }, { "internalType": "bool", "name": "allow", "type": "bool" }], "name": "setApprovedStaker", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "__baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_cap", "type": "uint256" }], "name": "setCap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "setCustomAttribute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }], "name": "setMinimumStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "name": "setProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "_vrfKeyHash", "type": "bytes32" }, { "internalType": "uint256", "name": "_vrfFee", "type": "uint256" }], "name": "setVrfParams", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "stakeToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakingBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "transferProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "contract IERC721", "name": "", "type": "address" }], "name": "trollOwnedNFTs", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "unequipNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "validNFTsLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawLink", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60e06040523480156200001157600080fd5b506040516200648f3803806200648f83398101604081905262000034916200081f565b80518051602091820151600080546001600160a01b0319163317905560016003558d51919290918e918e918e918e918e918e918e918e918e918e918b918b91620000859160049190850190620004f2565b5080516200009b906005906020840190620004f2565b5050508260001480620000b657506001600160a01b03821615155b620001085760405162461bcd60e51b815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f0000000000000060448201526064015b60405180910390fd5b602081015181515111156200015b5760405162461bcd60e51b8152602060048201526024808201526000805160206200646f8339815191526044820152634e46547360e01b6064820152608401620000ff565b87516200017090600f9060208b0190620004f2565b50600e879055606086901b6001600160601b0319166080526010805460ff191686151517905560118490556012839055601380546001600160a01b0319166001600160a01b03841617905560208101516016558051620001d09062000319565b7f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f60405162000202919062000954565b60405180910390a17fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b600e546040516200023e91815260200190565b60405180910390a17f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d6011546040516200027a91815260200190565b60405180910390a1601254601354604080519283526001600160a01b0390911660208301527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050505050606096871b6001600160601b031990811660c0529590961b90941660a052505050506020828101518051910151620003089250620004cf565b505050505050505050505062000b1b565b6000546001600160a01b031633146200033157600080fd5b601654815160155462000345919062000a60565b1115620003905760405162461bcd60e51b8152602060048201526024808201526000805160206200646f8339815191526044820152634e46547360e01b6064820152608401620000ff565b60005b8151811015620004cb576000828281518110620003c057634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b038116600090815291805260409091205490915060ff16156200042d5760405162461bcd60e51b815260206004820152601160248201527013919508185b1c9958591e481859191959607a1b6044820152606401620000ff565b6001600160a01b0381166000818152602080526040808220805460ff1916600190811790915560158054918201815583527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec4750180546001600160a01b03191684179055517f6f0f8cee3d9c2f167393540bc77d82ef43045c19beafd62240a7e45f2519171a9190a25080620004c28162000ab8565b91505062000393565b5050565b6000546001600160a01b03163314620004e757600080fd5b602691909155602755565b828054620005009062000a7b565b90600052602060002090601f0160209004810192826200052457600085556200056f565b82601f106200053f57805160ff19168380011785556200056f565b828001600101855582156200056f579182015b828111156200056f57825182559160200191906001019062000552565b506200057d92915062000581565b5090565b5b808211156200057d576000815560010162000582565b8051620005a58162000b02565b919050565b600082601f830112620005bb578081fd5b620005c562000a02565b808385604086011115620005d7578384fd5b835b6002811015620005fa578151845260209384019390910190600101620005d9565b509095945050505050565b80518015158114620005a557600080fd5b600082601f83011262000627578081fd5b81516001600160401b0381111562000643576200064362000aec565b602062000659601f8301601f1916820162000a2d565b82815285828487010111156200066d578384fd5b835b838110156200068c5785810183015182820184015282016200066f565b838111156200069d57848385840101525b5095945050505050565b600060408284031215620006b9578081fd5b620006c362000a02565b82519091506001600160401b0380821115620006de57600080fd5b818401915084601f830112620006f357600080fd5b81516020828211156200070a576200070a62000aec565b8160051b92506200071d81840162000a2d565b8281528181019085830185870184018a10156200073957600080fd5b600096505b848710156200076c5780519550620007568662000b02565b858352600196909601959183019183016200073e565b50808752505080860151818601525050505092915050565b60006080828403121562000796578081fd5b620007a062000a02565b905082601f830112620007b257600080fd5b620007bc62000a02565b80836040850186811115620007d057600080fd5b60005b600281101562000800578251620007ea8162000b02565b85526020948501949290920191600101620007d3565b50828552620008108782620005aa565b60208601525050505092915050565b60008060008060008060008060008060006101c08c8e03121562000841578687fd5b8b516001600160401b0381111562000857578788fd5b620008658e828f0162000616565b60208e0151909c5090506001600160401b0381111562000883578788fd5b620008918e828f0162000616565b60408e0151909b5090506001600160401b03811115620008af578788fd5b620008bd8e828f0162000616565b99505060608c01519750620008d560808d0162000598565b9650620008e560a08d0162000605565b955060c08c0151945060e08c01519350620009046101008d0162000598565b6101208d01519093506001600160401b0381111562000921578283fd5b6200092f8e828f01620006a7565b925050620009428d6101408e0162000784565b90509295989b509295989b9093969950565b6000602080835281845483600182811c9150808316806200097657607f831692505b8583108114156200099557634e487b7160e01b87526022600452602487fd5b878601838152602001818015620009b55760018114620009c757620009f3565b60ff19861682528782019650620009f3565b60008b815260209020895b86811015620009ed57815484820152908501908901620009d2565b83019750505b50949998505050505050505050565b604080519081016001600160401b038111828210171562000a275762000a2762000aec565b60405290565b604051601f8201601f191681016001600160401b038111828210171562000a585762000a5862000aec565b604052919050565b6000821982111562000a765762000a7662000ad6565b500190565b600181811c9082168062000a9057607f821691505b6020821081141562000ab257634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141562000acf5762000acf62000ad6565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811462000b1857600080fd5b50565b60805160601c60a05160601c60c05160601c6158ea62000b85600039600081816125640152613dcd015260008181612492015281816127a70152613d9101526000818161061f0152818161101d0152818161251501528181612c380152613c9501526158ea6000f3fe608060405234801561001057600080fd5b50600436106104215760003560e01c806378511f6111610235578063b88d4fde11610135578063e7201063116100c8578063ec5ffac211610097578063f0ab14ed1161007c578063f0ab14ed146109f4578063f2fde38b14610a14578063f43d958414610a2757600080fd5b8063ec5ffac2146109cb578063ef369252146109d457600080fd5b8063e720106314610949578063e985e9c51461095c578063ea289d00146109a5578063ea5ed3db146109b857600080fd5b8063d4ee1d9011610104578063d4ee1d90146108e1578063d793006614610901578063d8f8504f14610921578063da1bbcf61461094157600080fd5b8063b88d4fde14610890578063baba73a5146108a3578063c287e806146108ac578063c87b56dd146108ce57600080fd5b806395d89b41116101c8578063a694fc3a11610197578063b13db5761161017c578063b13db5761461083d578063b1bc99161461085d578063b55e58471461087057600080fd5b8063a694fc3a14610821578063b0e21e8a1461083457600080fd5b806395d89b41146107e05780639c52a7f1146107e8578063a22cb465146107fb578063a2f55ae51461080e57600080fd5b806382d5ea6c1161020457806382d5ea6c146107805780638c8c8a501461078d5780638da5cb5b146107ad57806394985ddd146107cd57600080fd5b806378511f611461071a5780637a8042bd1461073a5780637e09858e1461074d57806381fdc72b1461077857600080fd5b806342842e0e116103405780635981f75a116102d357806368c1c088116102a25780636e660ab1116102875780636e660ab1146106b957806370a08231146106e45780637776a0e5146106f757600080fd5b806368c1c0881461069e5780636c0360eb146106b157600080fd5b80635981f75a14610667578063605361721461067a57806361bc221a146106825780636352211e1461068b57600080fd5b80635174df051161030f5780635174df051461060757806351ed6a301461061a5780635452f3691461064157806355f804b31461065457600080fd5b806342842e0e146105bb578063476f2d5c146105ce57806347786d37146105e15780634f6ccce7146105f457600080fd5b8063233e9903116103b85780632f745c59116103875780632f745c5914610569578063355274ea1461057c5780633a2f5511146105855780633fd8cc4e1461059857600080fd5b8063233e99031461051d57806323b872dd146105305780632457c8ea146105435780632e17de781461055657600080fd5b80630a22d68c116103f45780630a22d68c146104b057806318160ddd146104c75780631864bbc9146104cf5780631e7269c5146104fa57600080fd5b806301ffc9a71461042657806306fdde031461044e578063081812fc14610463578063095ea7b31461049b575b600080fd5b6104396104343660046152a9565b610a47565b60405190151581526020015b60405180910390f35b610456610aa3565b604051610445919061557a565b610476610471366004615327565b610b35565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610445565b6104ae6104a936600461514d565b610b69565b005b6104b960145481565b604051908152602001610445565b600c546104b9565b6104b96104dd36600461514d565b602260209081526000928352604080842090915290825290205481565b610439610508366004614ff3565b601f6020526000908152604090205460ff1681565b6104ae61052b366004615327565b610cfb565b6104ae61053e366004615063565b610d5b565b6104ae610551366004615288565b610dfc565b6104ae610564366004615327565b610f62565b6104b961057736600461514d565b611175565b6104b9600e5481565b6104ae6105933660046151b8565b611244565b6104396105a6366004614ff3565b60026020526000908152604090205460ff1681565b6104ae6105c9366004615063565b6114ce565b6104b96105dc3660046153f2565b6114e9565b6104ae6105ef366004615327565b61152d565b6104b9610602366004615327565b6115f1565b6104ae61061536600461537b565b6116d6565b6104767f000000000000000000000000000000000000000000000000000000000000000081565b6104ae61064f366004615288565b611b2a565b6104ae6106623660046152e1565b611b59565b6104ae61067536600461537b565b611bc1565b6104ae61200e565b6104b960175481565b610476610699366004615327565b612138565b6104ae6106ac366004615120565b6121c4565b61045661230d565b6104b96106c7366004615357565b602460209081526000928352604080842090915290825290205481565b6104b96106f2366004614ff3565b61239b565b610439610705366004614ff3565b601e6020526000908152604090205460ff1681565b6104b9610728366004615327565b60236020526000908152604090205481565b6104ae610748366004615327565b612469565b6104b961075b366004615357565b602160209081526000928352604080842090915290825290205481565b6104ae6124b8565b6010546104399060ff1681565b6104b961079b366004615327565b60186020526000908152604090205481565b6000546104769073ffffffffffffffffffffffffffffffffffffffff1681565b6104ae6107db366004615288565b61254c565b6104566125f5565b6104ae6107f6366004614ff3565b612604565b6104ae610809366004615120565b6126a4565b6104ae61081c366004614ff3565b6126af565b6104b961082f366004615327565b612752565b6104b960125481565b6104b961084b366004615327565b60196020526000908152604090205481565b61047661086b366004615327565b6128b0565b6104b961087e366004615327565b601d6020526000908152604090205481565b6104ae61089e3660046150a3565b6128e7565b6104b960165481565b6104396108ba366004614ff3565b602080526000908152604090205460ff1681565b6104566108dc366004615327565b61298f565b6001546104769073ffffffffffffffffffffffffffffffffffffffff1681565b61091461090f3660046153a1565b6129f6565b6040516104459190615536565b6104b961092f366004615327565b601c6020526000908152604090205481565b6015546104b9565b6104ae610957366004615288565b612b97565b61043961096a36600461502b565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260096020908152604080832093909416825291909152205460ff1690565b6104ae6109b3366004615357565b612cd3565b6104ae6109c6366004615178565b612e05565b6104b960115481565b6013546104769073ffffffffffffffffffffffffffffffffffffffff1681565b6104b9610a02366004615327565b601a6020526000908152604090205481565b6104ae610a22366004614ff3565b612fb9565b6104b9610a35366004615327565b601b6020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d63000000000000000000000000000000000000000000000000000000001480610a9d5750610a9d82613050565b92915050565b606060048054610ab290615728565b80601f0160208091040260200160405190810160405280929190818152602001828054610ade90615728565b8015610b2b5780601f10610b0057610100808354040283529160200191610b2b565b820191906000526020600020905b815481529060010190602001808311610b0e57829003601f168201915b5050505050905090565b6000610b4082613133565b5060009081526008602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6000610b7482612138565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82161480610c605750610c60813361096a565b610cec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610c2e565b610cf683836131be565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d1f57600080fd5b60118190556040518181527f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d906020015b60405180910390a150565b610d65338261325e565b610df1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f766564000000000000000000000000000000000000006064820152608401610c2e565b610cf683838361331d565b3360009081526002602052604090205460ff16610e9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610c2e565b6000828152601a602052604090205415610f11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f41747472696275746520616c72656164792073657400000000000000000000006044820152606401610c2e565b6000828152601a6020526040908190208290555182907fe73a9e48f41e228034f18c54b3f003b3de0b3bf1069ffd0c352543431b8a86a390610f569084815260200190565b60405180910390a25050565b610f6a613625565b610f74338261325e565b610fda576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610c2e565b610fe381613699565b6000818152601c6020908152604080832042905560189091528120805491905561104473ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016338361377f565b60005b60155481101561112f5760006015828154811061108d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600091825260208083209091015486835260218252604080842073ffffffffffffffffffffffffffffffffffffffff90921680855291909252912054909150801561111a5773ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832083905588835260218252808320938352929052908120555b505080806111279061577c565b915050611047565b50604051818152829033907ff960dbf9e5d0682f7a298ed974e33a28b4464914b7a2bfac12ae419a9afeb2809060200160405180910390a3506111726001600355565b50565b60006111808361239b565b821061120e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e64730000000000000000000000000000000000000000006064820152608401610c2e565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600a60209081526040808320938352929052205490565b60005473ffffffffffffffffffffffffffffffffffffffff16331461126857600080fd5b601654815160155461127a91906156b9565b1115611307576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45786365656473206d6178696d756d206e756d626572206f662076616c69642060448201527f4e465473000000000000000000000000000000000000000000000000000000006064820152608401610c2e565b60005b81518110156114ca57600082828151811061134e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff8116600090815291805260409091205490915060ff16156113ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e465420616c72656164792061646465640000000000000000000000000000006044820152606401610c2e565b73ffffffffffffffffffffffffffffffffffffffff8116600081815260208052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915560158054918201815583527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec4750180547fffffffffffffffffffffffff00000000000000000000000000000000000000001684179055517f6f0f8cee3d9c2f167393540bc77d82ef43045c19beafd62240a7e45f2519171a9190a250806114c28161577c565b91505061130a565b5050565b610cf6838383604051806020016040528060008152506128e7565b60006114f58483613853565b6114ff8585613853565b60008781526019602052604090205461151891906156d1565b61152291906157b5565b90505b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461155157600080fd5b600e5481116115bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f43617020616c72656164792065786365656465640000000000000000000000006044820152606401610c2e565b600e8190556040518181527fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b90602001610d50565b60006115fc600c5490565b821061168a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e647300000000000000000000000000000000000000006064820152608401610c2e565b600c82815481106116c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208052604090205460ff16611764576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f742076616c6964204e4654000000000000000000000000000000000000006044820152606401610c2e565b3361176e84612138565b73ffffffffffffffffffffffffffffffffffffffff1614611811576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f596f7520617265206e6f7420746865206f776e6572206f66207468697320747260448201527f6f6c6c00000000000000000000000000000000000000000000000000000000006064820152608401610c2e565b6040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101829052339073ffffffffffffffffffffffffffffffffffffffff841690636352211e9060240160206040518083038186803b15801561187957600080fd5b505afa15801561188d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118b1919061500f565b73ffffffffffffffffffffffffffffffffffffffff1614611954576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f596f7520617265206e6f7420746865206f776e6572206f662074686973204e4660448201527f54000000000000000000000000000000000000000000000000000000000000006064820152608401610c2e565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602260209081526040808320848452909152902054156119ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e465420616c72656164792065717569707065640000000000000000000000006044820152606401610c2e565b600083815260216020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915290205415611aa9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f456163682074726f6c6c2063616e206f6e6c79206571756970206f6e6520746f60448201527f6b656e20706572204e46540000000000000000000000000000000000000000006064820152608401610c2e565b73ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832087905586835260218252808320848452825291829020849055905183815285917f5f3e52a313d16d3e3d13ea422592abcdf8484958442b5d977890b64c53523e2391015b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b4e57600080fd5b602691909155602755565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b7d57600080fd5b8051611b9090600f906020840190614e9a565b507f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f604051610d50919061558d565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208052604090205460ff16611c4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f742076616c6964204e4654000000000000000000000000000000000000006044820152606401610c2e565b33611c5984612138565b73ffffffffffffffffffffffffffffffffffffffff1614611cfc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f596f7520617265206e6f7420746865206f776e6572206f66207468697320747260448201527f6f6c6c00000000000000000000000000000000000000000000000000000000006064820152608401610c2e565b6040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101829052339073ffffffffffffffffffffffffffffffffffffffff841690636352211e9060240160206040518083038186803b158015611d6457600080fd5b505afa158015611d78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d9c919061500f565b73ffffffffffffffffffffffffffffffffffffffff1614611e3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f596f7520617265206e6f7420746865206f776e6572206f662074686973204e4660448201527f54000000000000000000000000000000000000000000000000000000000000006064820152608401610c2e565b73ffffffffffffffffffffffffffffffffffffffff821660009081526022602090815260408083208484529091529020548314611efe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f54686973204e465420646f6573206e6f742062656c6f6e6720746f207468697360448201527f2074726f6c6c00000000000000000000000000000000000000000000000000006064820152608401610c2e565b600083815260216020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020548114611f96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f546869732074726f6c6c20646f6573206e6f74206f776e2074686973204e46546044820152606401610c2e565b73ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832083905586835260218252808320848452825280832092909255905183815285917f209edba55054a6d25cdb7cd481d568e6a0fbe2ecc48276caee30a061cb1f744f9101611b1d565b60015473ffffffffffffffffffffffffffffffffffffffff1633146120b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610c2e565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610a9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610c2e565b60005473ffffffffffffffffffffffffffffffffffffffff1633146121e857600080fd5b60105460ff1661221e57601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b80156122775773ffffffffffffffffffffffffffffffffffffffff82166000908152601e6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556122c3565b73ffffffffffffffffffffffffffffffffffffffff82166000908152601e6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b8173ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52382604051610f56911515815260200190565b600f805461231a90615728565b80601f016020809104026020016040519081016040528092919081815260200182805461234690615728565b80156123935780601f1061236857610100808354040283529160200191612393565b820191906000526020600020905b81548152906001019060200180831161237657829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff8216612440576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e657200000000000000000000000000000000000000000000006064820152608401610c2e565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205490565b60005473ffffffffffffffffffffffffffffffffffffffff16331461248d57600080fd5b6111727f0000000000000000000000000000000000000000000000000000000000000000338361377f565b6124c0613625565b60135473ffffffffffffffffffffffffffffffffffffffff16158015906124e957506000601454115b156125405760148054600090915560135461253e9073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811691168361377f565b505b61254a6001600355565b565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146125eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c006044820152606401610c2e565b6114ca82826138e5565b606060058054610ab290615728565b60005473ffffffffffffffffffffffffffffffffffffffff16331461262857600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610d50565b6114ca33838361393b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146126d357600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610d50565b600061275d82613a61565b6027546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529192509073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b1580156127e957600080fd5b505afa1580156127fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612821919061533f565b1015612889576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f7420656e6f756768204c494e4b00000000000000000000000000000000006044820152606401610c2e565b6000612899602654602754613d8d565b600090815260286020526040902082905550919050565b601581815481106128c057600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b6128f1338361325e565b61297d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f766564000000000000000000000000000000000000006064820152608401610c2e565b61298984848484613f25565b50505050565b606061299a82613133565b60006129a4613fc8565b905060008151116129c457604051806020016040528060008152506129ef565b806129ce84613fd7565b6040516020016129df929190615489565b6040516020818303038152906040525b9392505050565b6060818067ffffffffffffffff811115612a39577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015612a62578160200160208202803683370190505b5060008781526019602052604081205491935090815b83811015612b8b57612ac988888884818110612abd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135613853565b612ad38985613853565b612add90846156d1565b612ae791906157b5565b858281518110612b20577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050868682818110612b65577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013583612b7791906156b9565b925080612b838161577c565b915050612a78565b50505050949350505050565b33612ba183612138565b73ffffffffffffffffffffffffffffffffffffffff1614612c1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610c2e565b612c6073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163330846140c6565b60008281526018602052604081208054839290612c7e9084906156b9565b90915550506000828152601d6020908152604080832042905560188252918290205482518481529182015283917f9dd9373946c68e9420a62b36f888feb3e769b907bb535e27af7f59f2886337499101610f56565b60005473ffffffffffffffffffffffffffffffffffffffff163314612cf757600080fd5b811580612d19575073ffffffffffffffffffffffffffffffffffffffff811615155b612d7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f000000000000006044820152606401610c2e565b6012829055601380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040805184815260208101929092527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff163314612e2957600080fd5b601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558060005b81811015612989576001601e6000868685818110612e9f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190612eb49190614ff3565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055838382818110612f40577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190612f559190614ff3565b73ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c5236001604051612f9f911515815260200190565b60405180910390a280612fb18161577c565b915050612e58565b60005473ffffffffffffffffffffffffffffffffffffffff163314612fdd57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610d50565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806130e357507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80610a9d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610a9d565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff16611172576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610c2e565b600081815260086020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155819061321882612138565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061326a83612138565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806132d8575073ffffffffffffffffffffffffffffffffffffffff80821660009081526009602090815260408083209388168352929052205460ff165b8061152557508373ffffffffffffffffffffffffffffffffffffffff166132fe84610b35565b73ffffffffffffffffffffffffffffffffffffffff1614949350505050565b8273ffffffffffffffffffffffffffffffffffffffff1661333d82612138565b73ffffffffffffffffffffffffffffffffffffffff16146133e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610c2e565b73ffffffffffffffffffffffffffffffffffffffff8216613482576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610c2e565b61348f8383836001614124565b8273ffffffffffffffffffffffffffffffffffffffff166134af82612138565b73ffffffffffffffffffffffffffffffffffffffff1614613552576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610c2e565b600081815260086020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff8781168086526007855283862080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01905590871680865283862080546001019055868652600690945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60026003541415613692576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c2e565b6002600355565b60006136a482612138565b90506136b4816000846001614124565b6136bd82612138565b600083815260086020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811690915573ffffffffffffffffffffffffffffffffffffffff85168085526007845282852080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190558785526006909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610cf69084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526142d4565b60008280156138c75760018316801561386e57849250613873565b600192505b506002830492505b82156138c257838402848582041461389257600080fd5b935060018316156138b75783820282858204141585151516156138b457600080fd5b91505b60028304925061387b565b6138de565b8280156138d757600092506138dc565b600192505b505b5092915050565b60008281526028602090815260408083205480845260198352928190208490555183815282917f1e6edca497f4aff07b388b2c8af55371a16eb956ed650861cb45f11758e4a65b910160405180910390a2505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156139d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610c2e565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526009602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319101611b1d565b6000613a6b613625565b60105460ff161580613a8c5750336000908152601e602052604090205460ff165b613af2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610c2e565b600060125483613b0291906156e5565b9050601154811015613b70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d696e696e756d207374616b65206e6f74206d657400000000000000000000006044820152606401610c2e565b600e54600c5410613bdd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f43617020657863656564656400000000000000000000000000000000000000006044820152606401610c2e565b60105460ff161580613bff5750336000908152601f602052604090205460ff16155b613c65576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f596f752063616e206f6e6c79207374616b65206f6e63650000000000000000006044820152606401610c2e565b601760008154613c749061577c565b91829055509150613cbd73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163330866140c6565b60008281526018602052604081208290556012546014805491929091613ce49084906156b9565b9091555050336000818152601f6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055858352601b82528083204290819055601d90925290912055613d4690836143e0565b604051838152829033907f5af417134f72a9d41143ace85b0a26dce6f550f894f2cbc1eeee8810603d91b69060200160405180910390a350613d886001600355565b919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f000000000000000000000000000000000000000000000000000000000000000084866000604051602001613e0a929190918252602082015260400190565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401613e3793929190615501565b602060405180830381600087803b158015613e5157600080fd5b505af1158015613e65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613e89919061526c565b50600083815260256020818152604080842054815180840189905280830186905230606082015260808082018390528351808303909101815260a090910190925281519183019190912093879052919052613ee59060016156b9565b6000858152602560205260409020556115258482604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b613f3084848461331d565b613f3c848484846143fa565b612989576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610c2e565b6060600f8054610ab290615728565b60606000613fe4836145f6565b600101905060008167ffffffffffffffff81111561402b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015614055576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846140b9576140be565b61405f565b509392505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526129899085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016137d1565b614130848484846146d8565b60018111156141c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e736563757469766520747260448201527f616e7366657273206e6f7420737570706f7274656400000000000000000000006064820152608401610c2e565b8173ffffffffffffffffffffffffffffffffffffffff851661422a5761422581600c80546000838152600d60205260408120829055600182018355919091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70155565b614267565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614614267576142678582614794565b73ffffffffffffffffffffffffffffffffffffffff84166142905761428b8161484b565b6142cd565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146142cd576142cd848261496f565b5050505050565b6000614336826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166149c09092919063ffffffff16565b805190915015610cf65780806020019051810190614354919061526c565b610cf6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610c2e565b6114ca8282604051806020016040528060008152506149cf565b600073ffffffffffffffffffffffffffffffffffffffff84163b156145ee576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906144719033908990889088906004016154b8565b602060405180830381600087803b15801561448b57600080fd5b505af19250505080156144d9575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526144d6918101906152c5565b60015b6145a3573d808015614507576040519150601f19603f3d011682016040523d82523d6000602084013e61450c565b606091505b50805161459b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610c2e565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050611525565b506001611525565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061463f577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831061466b576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061468957662386f26fc10000830492506010015b6305f5e10083106146a1576305f5e100830492506008015b61271083106146b557612710830492506004015b606483106146c7576064830492506002015b600a8310610a9d5760010192915050565b60018111156129895773ffffffffffffffffffffffffffffffffffffffff8416156147385773ffffffffffffffffffffffffffffffffffffffff8416600090815260076020526040812080548392906147329084906156e5565b90915550505b73ffffffffffffffffffffffffffffffffffffffff8316156129895773ffffffffffffffffffffffffffffffffffffffff8316600090815260076020526040812080548392906147899084906156b9565b909155505050505050565b600060016147a18461239b565b6147ab91906156e5565b6000838152600b602052604090205490915080821461480b5773ffffffffffffffffffffffffffffffffffffffff84166000908152600a602090815260408083208584528252808320548484528184208190558352600b90915290208190555b506000918252600b6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600a81528383209183525290812055565b600c5460009061485d906001906156e5565b6000838152600d6020526040812054600c80549394509092849081106148ac577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080600c83815481106148f4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255828152600d9091526040808220849055858252812055600c805480614953577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600061497a8361239b565b73ffffffffffffffffffffffffffffffffffffffff9093166000908152600a602090815260408083208684528252808320859055938252600b9052919091209190915550565b60606115258484600085614a72565b6149d98383614b8b565b6149e660008484846143fa565b610cf6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610c2e565b606082471015614b04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610c2e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051614b2d919061546d565b60006040518083038185875af1925050503d8060008114614b6a576040519150601f19603f3d011682016040523d82523d6000602084013e614b6f565b606091505b5091509150614b8087838387614dbe565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216614c08576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610c2e565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1615614c94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610c2e565b614ca2600083836001614124565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1615614d2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610c2e565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260076020908152604080832080546001019055848352600690915280822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60608315614e51578251614e4a5773ffffffffffffffffffffffffffffffffffffffff85163b614e4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c2e565b5081611525565b6115258383815115614e665781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2e919061557a565b828054614ea690615728565b90600052602060002090601f016020900481019282614ec85760008555614f0e565b82601f10614ee157805160ff1916838001178555614f0e565b82800160010185558215614f0e579182015b82811115614f0e578251825591602001919060010190614ef3565b50614f1a929150614f1e565b5090565b5b80821115614f1a5760008155600101614f1f565b600067ffffffffffffffff831115614f4d57614f4d615827565b614f7e60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160161566a565b9050828152838383011115614f9257600080fd5b828260208301376000602084830101529392505050565b60008083601f840112614fba578182fd5b50813567ffffffffffffffff811115614fd1578182fd5b6020830191508360208260051b8501011115614fec57600080fd5b9250929050565b600060208284031215615004578081fd5b81356129ef81615856565b600060208284031215615020578081fd5b81516129ef81615856565b6000806040838503121561503d578081fd5b823561504881615856565b9150602083013561505881615856565b809150509250929050565b600080600060608486031215615077578081fd5b833561508281615856565b9250602084013561509281615856565b929592945050506040919091013590565b600080600080608085870312156150b8578081fd5b84356150c381615856565b935060208501356150d381615856565b925060408501359150606085013567ffffffffffffffff8111156150f5578182fd5b8501601f81018713615105578182fd5b61511487823560208401614f33565b91505092959194509250565b60008060408385031215615132578182fd5b823561513d81615856565b9150602083013561505881615878565b6000806040838503121561515f578182fd5b823561516a81615856565b946020939093013593505050565b6000806020838503121561518a578081fd5b823567ffffffffffffffff8111156151a0578182fd5b6151ac85828601614fa9565b90969095509350505050565b600060208083850312156151ca578182fd5b823567ffffffffffffffff808211156151e1578384fd5b818501915085601f8301126151f4578384fd5b81358181111561520657615206615827565b8060051b915061521784830161566a565b8181528481019084860184860187018a1015615231578788fd5b8795505b8386101561525f578035945061524a85615856565b84835260019590950194918601918601615235565b5098975050505050505050565b60006020828403121561527d578081fd5b81516129ef81615878565b6000806040838503121561529a578182fd5b50508035926020909101359150565b6000602082840312156152ba578081fd5b81356129ef81615886565b6000602082840312156152d6578081fd5b81516129ef81615886565b6000602082840312156152f2578081fd5b813567ffffffffffffffff811115615308578182fd5b8201601f81018413615318578182fd5b61152584823560208401614f33565b600060208284031215615338578081fd5b5035919050565b600060208284031215615350578081fd5b5051919050565b60008060408385031215615369578182fd5b82359150602083013561505881615856565b60008060006060848603121561538f578081fd5b83359250602084013561509281615856565b600080600080606085870312156153b6578182fd5b8435935060208501359250604085013567ffffffffffffffff8111156153da578283fd5b6153e687828801614fa9565b95989497509550505050565b60008060008060808587031215615407578182fd5b5050823594602084013594506040840135936060013592509050565b6000815180845261543b8160208601602086016156fc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000825161547f8184602087016156fc565b9190910192915050565b6000835161549b8184602088016156fc565b8351908301906154af8183602088016156fc565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526154f76080830184615423565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff841681528260208201526060604082015260006115226060830184615423565b6020808252825182820181905260009190848201906040850190845b8181101561556e57835183529284019291840191600101615552565b50909695505050505050565b6020815260006129ef6020830184615423565b6000602080835281845483600182811c9150808316806155ae57607f831692505b8583108114156155e5577f4e487b710000000000000000000000000000000000000000000000000000000087526022600452602487fd5b87860183815260200181801561560257600181146156315761565b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168252878201965061565b565b60008b815260209020895b868110156156555781548482015290850190890161563c565b83019750505b50949998505050505050505050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156156b1576156b1615827565b604052919050565b600082198211156156cc576156cc6157c9565b500190565b6000826156e0576156e06157f8565b500490565b6000828210156156f7576156f76157c9565b500390565b60005b838110156157175781810151838201526020016156ff565b838111156129895750506000910152565b600181811c9082168061573c57607f821691505b60208210811415615776577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156157ae576157ae6157c9565b5060010190565b6000826157c4576157c46157f8565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461117257600080fd5b801515811461117257600080fd5b7fffffffff000000000000000000000000000000000000000000000000000000008116811461117257600080fdfea2646970667358221220d231bc09bc1481f72604a01f1b78f7cf2e75240dea23222f17252847fe8b845664736f6c6343000804003345786365656473206d6178696d756d206e756d626572206f662076616c696420"
};

// src/contracts/TrollNFT_VRFV2.ts
var TrollNFT_VRFV2 = class extends import_eth_contract6.Contract {
  constructor(wallet, address) {
    super(wallet, address, TrollNFT_VRFV2_json_default.abi, TrollNFT_VRFV2_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol, params.baseURI, this.wallet.utils.toString(params.cap), params.stakeToken, params.requireApproval, this.wallet.utils.toString(params.minimumStake), this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo, [params.nftInfo.listValidNFTs, this.wallet.utils.toString(params.nftInfo.maximumValidNFTs)], [params.vrfInfo.vrfAddresses, this.wallet.utils.stringToBytes32(params.vrfInfo.vrfParams)]]);
  }
  parseAddStakesEvent(receipt) {
    return this.parseEvents(receipt, "AddStakes").map((e) => this.decodeAddStakesEvent(e));
  }
  decodeAddStakesEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_contract6.BigNumber(result.tokenId),
      amountAdded: new import_eth_contract6.BigNumber(result.amountAdded),
      newAmount: new import_eth_contract6.BigNumber(result.newAmount),
      _event: event
    };
  }
  parseAddValidNFTEvent(receipt) {
    return this.parseEvents(receipt, "AddValidNFT").map((e) => this.decodeAddValidNFTEvent(e));
  }
  decodeAddValidNFTEvent(event) {
    let result = event.data;
    return {
      nft: result.nft,
      _event: event
    };
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_contract6.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
  }
  decodeApprovalForAllEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      operator: result.operator,
      approved: result.approved,
      _event: event
    };
  }
  parseApprovedStakerEvent(receipt) {
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
  }
  decodeApprovedStakerEvent(event) {
    let result = event.data;
    return {
      staker: result.staker,
      allow: result.allow,
      _event: event
    };
  }
  parseAttributeEvent(receipt) {
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_contract6.BigNumber(result.tokenId),
      attribute: new import_eth_contract6.BigNumber(result.attribute),
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      baseURI: result.baseURI,
      _event: event
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      cap: new import_eth_contract6.BigNumber(result.cap),
      _event: event
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_contract6.BigNumber(result.tokenId),
      attribute: new import_eth_contract6.BigNumber(result.attribute),
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseEquipNFTEvent(receipt) {
    return this.parseEvents(receipt, "EquipNFT").map((e) => this.decodeEquipNFTEvent(e));
  }
  decodeEquipNFTEvent(event) {
    let result = event.data;
    return {
      trollId: new import_eth_contract6.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_contract6.BigNumber(result.nftId),
      _event: event
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      minimumStake: new import_eth_contract6.BigNumber(result.minimumStake),
      _event: event
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      protocolFee: new import_eth_contract6.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo,
      _event: event
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_contract6.BigNumber(result.tokenId),
      amount: new import_eth_contract6.BigNumber(result.amount),
      _event: event
    };
  }
  parseStakesApprovalEvent(receipt) {
    return this.parseEvents(receipt, "StakesApproval").map((e) => this.decodeStakesApprovalEvent(e));
  }
  decodeStakesApprovalEvent(event) {
    let result = event.data;
    return {
      fromTokenId: new import_eth_contract6.BigNumber(result.fromTokenId),
      spender: result.spender,
      amount: new import_eth_contract6.BigNumber(result.amount),
      _event: event
    };
  }
  parseStakesTransferEvent(receipt) {
    return this.parseEvents(receipt, "StakesTransfer").map((e) => this.decodeStakesTransferEvent(e));
  }
  decodeStakesTransferEvent(event) {
    let result = event.data;
    return {
      fromTokenId: new import_eth_contract6.BigNumber(result.fromTokenId),
      toTokenId: new import_eth_contract6.BigNumber(result.toTokenId),
      amount: new import_eth_contract6.BigNumber(result.amount),
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_contract6.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseUnequipNFTEvent(receipt) {
    return this.parseEvents(receipt, "UnequipNFT").map((e) => this.decodeUnequipNFTEvent(e));
  }
  decodeUnequipNFTEvent(event) {
    let result = event.data;
    return {
      trollId: new import_eth_contract6.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_contract6.BigNumber(result.nftId),
      _event: event
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_contract6.BigNumber(result.tokenId),
      amount: new import_eth_contract6.BigNumber(result.amount),
      _event: event
    };
  }
  assign() {
    let _attributes_call = async (param1) => {
      let result = await this.call("_attributes", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract6.BigNumber(result);
    };
    this._attributes = _attributes_call;
    let _customAttributes_call = async (param1) => {
      let result = await this.call("_customAttributes", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract6.BigNumber(result);
    };
    this._customAttributes = _customAttributes_call;
    let _stakesTransferAllowancesParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
    let _stakesTransferAllowances_call = async (params) => {
      let result = await this.call("_stakesTransferAllowances", _stakesTransferAllowancesParams(params));
      return new import_eth_contract6.BigNumber(result);
    };
    this._stakesTransferAllowances = _stakesTransferAllowances_call;
    let approvedStaker_call = async (param1) => {
      let result = await this.call("approvedStaker", [param1]);
      return result;
    };
    this.approvedStaker = approvedStaker_call;
    let balanceOf_call = async (owner) => {
      let result = await this.call("balanceOf", [owner]);
      return new import_eth_contract6.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let baseURI_call = async () => {
      let result = await this.call("baseURI");
      return result;
    };
    this.baseURI = baseURI_call;
    let cap_call = async () => {
      let result = await this.call("cap");
      return new import_eth_contract6.BigNumber(result);
    };
    this.cap = cap_call;
    let counter_call = async () => {
      let result = await this.call("counter");
      return new import_eth_contract6.BigNumber(result);
    };
    this.counter = counter_call;
    let creationDate_call = async (param1) => {
      let result = await this.call("creationDate", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract6.BigNumber(result);
    };
    this.creationDate = creationDate_call;
    let destoryDate_call = async (param1) => {
      let result = await this.call("destoryDate", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract6.BigNumber(result);
    };
    this.destoryDate = destoryDate_call;
    let extraStakes_call = async (param1) => {
      let result = await this.call("extraStakes", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract6.BigNumber(result);
    };
    this.extraStakes = extraStakes_call;
    let getApproved_call = async (tokenId) => {
      let result = await this.call("getApproved", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.getApproved = getApproved_call;
    let getAttributes1Params = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.base), this.wallet.utils.toString(params.offset), this.wallet.utils.toString(params.digits)];
    let getAttributes1_call = async (params) => {
      let result = await this.call("getAttributes1", getAttributes1Params(params));
      return new import_eth_contract6.BigNumber(result);
    };
    this.getAttributes1 = getAttributes1_call;
    let getAttributes2Params = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.base), this.wallet.utils.toString(params.digits)];
    let getAttributes2_call = async (params) => {
      let result = await this.call("getAttributes2", getAttributes2Params(params));
      return result.map((e) => new import_eth_contract6.BigNumber(e));
    };
    this.getAttributes2 = getAttributes2_call;
    let isApprovedForAllParams = (params) => [params.owner, params.operator];
    let isApprovedForAll_call = async (params) => {
      let result = await this.call("isApprovedForAll", isApprovedForAllParams(params));
      return result;
    };
    this.isApprovedForAll = isApprovedForAll_call;
    let isPermitted_call = async (param1) => {
      let result = await this.call("isPermitted", [param1]);
      return result;
    };
    this.isPermitted = isPermitted_call;
    let isValidNFT_call = async (param1) => {
      let result = await this.call("isValidNFT", [param1]);
      return result;
    };
    this.isValidNFT = isValidNFT_call;
    let lastStakeDate_call = async (param1) => {
      let result = await this.call("lastStakeDate", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract6.BigNumber(result);
    };
    this.lastStakeDate = lastStakeDate_call;
    let listValidNFTs_call = async (param1) => {
      let result = await this.call("listValidNFTs", [this.wallet.utils.toString(param1)]);
      return result;
    };
    this.listValidNFTs = listValidNFTs_call;
    let maximumValidNFTs_call = async () => {
      let result = await this.call("maximumValidNFTs");
      return new import_eth_contract6.BigNumber(result);
    };
    this.maximumValidNFTs = maximumValidNFTs_call;
    let minimumStake_call = async () => {
      let result = await this.call("minimumStake");
      return new import_eth_contract6.BigNumber(result);
    };
    this.minimumStake = minimumStake_call;
    let minted_call = async (param1) => {
      let result = await this.call("minted", [param1]);
      return result;
    };
    this.minted = minted_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let newOwner_call = async () => {
      let result = await this.call("newOwner");
      return result;
    };
    this.newOwner = newOwner_call;
    let nftsEquippedParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
    let nftsEquipped_call = async (params) => {
      let result = await this.call("nftsEquipped", nftsEquippedParams(params));
      return new import_eth_contract6.BigNumber(result);
    };
    this.nftsEquipped = nftsEquipped_call;
    let owner_call = async () => {
      let result = await this.call("owner");
      return result;
    };
    this.owner = owner_call;
    let ownerOf_call = async (tokenId) => {
      let result = await this.call("ownerOf", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.ownerOf = ownerOf_call;
    let protocolFee_call = async () => {
      let result = await this.call("protocolFee");
      return new import_eth_contract6.BigNumber(result);
    };
    this.protocolFee = protocolFee_call;
    let protocolFeeBalance_call = async () => {
      let result = await this.call("protocolFeeBalance");
      return new import_eth_contract6.BigNumber(result);
    };
    this.protocolFeeBalance = protocolFeeBalance_call;
    let protocolFeeTo_call = async () => {
      let result = await this.call("protocolFeeTo");
      return result;
    };
    this.protocolFeeTo = protocolFeeTo_call;
    let requireApproval_call = async () => {
      let result = await this.call("requireApproval");
      return result;
    };
    this.requireApproval = requireApproval_call;
    let stakeToken_call = async () => {
      let result = await this.call("stakeToken");
      return result;
    };
    this.stakeToken = stakeToken_call;
    let stakingBalance_call = async (param1) => {
      let result = await this.call("stakingBalance", [this.wallet.utils.toString(param1)]);
      return new import_eth_contract6.BigNumber(result);
    };
    this.stakingBalance = stakingBalance_call;
    let supportsInterface_call = async (interfaceId) => {
      let result = await this.call("supportsInterface", [interfaceId]);
      return result;
    };
    this.supportsInterface = supportsInterface_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let tokenByIndex_call = async (index) => {
      let result = await this.call("tokenByIndex", [this.wallet.utils.toString(index)]);
      return new import_eth_contract6.BigNumber(result);
    };
    this.tokenByIndex = tokenByIndex_call;
    let tokenOfOwnerByIndexParams = (params) => [params.owner, this.wallet.utils.toString(params.index)];
    let tokenOfOwnerByIndex_call = async (params) => {
      let result = await this.call("tokenOfOwnerByIndex", tokenOfOwnerByIndexParams(params));
      return new import_eth_contract6.BigNumber(result);
    };
    this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
    let tokenURI_call = async (tokenId) => {
      let result = await this.call("tokenURI", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    this.tokenURI = tokenURI_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_contract6.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let trollOwnedNFTsParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
    let trollOwnedNFTs_call = async (params) => {
      let result = await this.call("trollOwnedNFTs", trollOwnedNFTsParams(params));
      return new import_eth_contract6.BigNumber(result);
    };
    this.trollOwnedNFTs = trollOwnedNFTs_call;
    let validNFTsLength_call = async () => {
      let result = await this.call("validNFTsLength");
      return new import_eth_contract6.BigNumber(result);
    };
    this.validNFTsLength = validNFTsLength_call;
    let addStakesParams = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount)];
    let addStakes_send = async (params) => {
      let result = await this.send("addStakes", addStakesParams(params));
      return result;
    };
    let addStakes_call = async (params) => {
      let result = await this.call("addStakes", addStakesParams(params));
      return;
    };
    this.addStakes = Object.assign(addStakes_send, {
      call: addStakes_call
    });
    let addValidNFTs_send = async (nfts) => {
      let result = await this.send("addValidNFTs", [nfts]);
      return result;
    };
    let addValidNFTs_call = async (nfts) => {
      let result = await this.call("addValidNFTs", [nfts]);
      return;
    };
    this.addValidNFTs = Object.assign(addValidNFTs_send, {
      call: addValidNFTs_call
    });
    let approveParams = (params) => [params.to, this.wallet.utils.toString(params.tokenId)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let batchApprove_send = async (stakers) => {
      let result = await this.send("batchApprove", [stakers]);
      return result;
    };
    let batchApprove_call = async (stakers) => {
      let result = await this.call("batchApprove", [stakers]);
      return;
    };
    this.batchApprove = Object.assign(batchApprove_send, {
      call: batchApprove_call
    });
    let deny_send = async (user) => {
      let result = await this.send("deny", [user]);
      return result;
    };
    let deny_call = async (user) => {
      let result = await this.call("deny", [user]);
      return;
    };
    this.deny = Object.assign(deny_send, {
      call: deny_call
    });
    let equipNFTParams = (params) => [this.wallet.utils.toString(params.trollId), params.nft, this.wallet.utils.toString(params.nftId)];
    let equipNFT_send = async (params) => {
      let result = await this.send("equipNFT", equipNFTParams(params));
      return result;
    };
    let equipNFT_call = async (params) => {
      let result = await this.call("equipNFT", equipNFTParams(params));
      return;
    };
    this.equipNFT = Object.assign(equipNFT_send, {
      call: equipNFT_call
    });
    let permit_send = async (user) => {
      let result = await this.send("permit", [user]);
      return result;
    };
    let permit_call = async (user) => {
      let result = await this.call("permit", [user]);
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let rawFulfillRandomnessParams = (params) => [this.wallet.utils.stringToBytes32(params.requestId), this.wallet.utils.toString(params.randomness)];
    let rawFulfillRandomness_send = async (params) => {
      let result = await this.send("rawFulfillRandomness", rawFulfillRandomnessParams(params));
      return result;
    };
    let rawFulfillRandomness_call = async (params) => {
      let result = await this.call("rawFulfillRandomness", rawFulfillRandomnessParams(params));
      return;
    };
    this.rawFulfillRandomness = Object.assign(rawFulfillRandomness_send, {
      call: rawFulfillRandomness_call
    });
    let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
    let safeTransferFrom_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
      call: safeTransferFrom_call
    });
    let safeTransferFrom_1Params = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId), this.wallet.utils.stringToBytes(params.data)];
    let safeTransferFrom_1_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_1_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
      call: safeTransferFrom_1_call
    });
    let setApprovalForAllParams = (params) => [params.operator, params.approved];
    let setApprovalForAll_send = async (params) => {
      let result = await this.send("setApprovalForAll", setApprovalForAllParams(params));
      return result;
    };
    let setApprovalForAll_call = async (params) => {
      let result = await this.call("setApprovalForAll", setApprovalForAllParams(params));
      return;
    };
    this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
      call: setApprovalForAll_call
    });
    let setApprovedStakerParams = (params) => [params.staker, params.allow];
    let setApprovedStaker_send = async (params) => {
      let result = await this.send("setApprovedStaker", setApprovedStakerParams(params));
      return result;
    };
    let setApprovedStaker_call = async (params) => {
      let result = await this.call("setApprovedStaker", setApprovedStakerParams(params));
      return;
    };
    this.setApprovedStaker = Object.assign(setApprovedStaker_send, {
      call: setApprovedStaker_call
    });
    let setBaseURI_send = async (baseURI) => {
      let result = await this.send("setBaseURI", [baseURI]);
      return result;
    };
    let setBaseURI_call = async (baseURI) => {
      let result = await this.call("setBaseURI", [baseURI]);
      return;
    };
    this.setBaseURI = Object.assign(setBaseURI_send, {
      call: setBaseURI_call
    });
    let setCap_send = async (cap) => {
      let result = await this.send("setCap", [this.wallet.utils.toString(cap)]);
      return result;
    };
    let setCap_call = async (cap) => {
      let result = await this.call("setCap", [this.wallet.utils.toString(cap)]);
      return;
    };
    this.setCap = Object.assign(setCap_send, {
      call: setCap_call
    });
    let setCustomAttributeParams = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.attribute)];
    let setCustomAttribute_send = async (params) => {
      let result = await this.send("setCustomAttribute", setCustomAttributeParams(params));
      return result;
    };
    let setCustomAttribute_call = async (params) => {
      let result = await this.call("setCustomAttribute", setCustomAttributeParams(params));
      return;
    };
    this.setCustomAttribute = Object.assign(setCustomAttribute_send, {
      call: setCustomAttribute_call
    });
    let setMinimumStake_send = async (minimumStake) => {
      let result = await this.send("setMinimumStake", [this.wallet.utils.toString(minimumStake)]);
      return result;
    };
    let setMinimumStake_call = async (minimumStake) => {
      let result = await this.call("setMinimumStake", [this.wallet.utils.toString(minimumStake)]);
      return;
    };
    this.setMinimumStake = Object.assign(setMinimumStake_send, {
      call: setMinimumStake_call
    });
    let setProtocolFeeParams = (params) => [this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo];
    let setProtocolFee_send = async (params) => {
      let result = await this.send("setProtocolFee", setProtocolFeeParams(params));
      return result;
    };
    let setProtocolFee_call = async (params) => {
      let result = await this.call("setProtocolFee", setProtocolFeeParams(params));
      return;
    };
    this.setProtocolFee = Object.assign(setProtocolFee_send, {
      call: setProtocolFee_call
    });
    let setVrfParamsParams = (params) => [this.wallet.utils.stringToBytes32(params.vrfKeyHash), this.wallet.utils.toString(params.vrfFee)];
    let setVrfParams_send = async (params) => {
      let result = await this.send("setVrfParams", setVrfParamsParams(params));
      return result;
    };
    let setVrfParams_call = async (params) => {
      let result = await this.call("setVrfParams", setVrfParamsParams(params));
      return;
    };
    this.setVrfParams = Object.assign(setVrfParams_send, {
      call: setVrfParams_call
    });
    let stake_send = async (amount) => {
      let result = await this.send("stake", [this.wallet.utils.toString(amount)]);
      return result;
    };
    let stake_call = async (amount) => {
      let result = await this.call("stake", [this.wallet.utils.toString(amount)]);
      return new import_eth_contract6.BigNumber(result);
    };
    this.stake = Object.assign(stake_send, {
      call: stake_call
    });
    let takeOwnership_send = async () => {
      let result = await this.send("takeOwnership");
      return result;
    };
    let takeOwnership_call = async () => {
      let result = await this.call("takeOwnership");
      return;
    };
    this.takeOwnership = Object.assign(takeOwnership_send, {
      call: takeOwnership_call
    });
    let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
    let transferOwnership_send = async (newOwner) => {
      let result = await this.send("transferOwnership", [newOwner]);
      return result;
    };
    let transferOwnership_call = async (newOwner) => {
      let result = await this.call("transferOwnership", [newOwner]);
      return;
    };
    this.transferOwnership = Object.assign(transferOwnership_send, {
      call: transferOwnership_call
    });
    let transferProtocolFee_send = async () => {
      let result = await this.send("transferProtocolFee");
      return result;
    };
    let transferProtocolFee_call = async () => {
      let result = await this.call("transferProtocolFee");
      return;
    };
    this.transferProtocolFee = Object.assign(transferProtocolFee_send, {
      call: transferProtocolFee_call
    });
    let unequipNFTParams = (params) => [this.wallet.utils.toString(params.trollId), params.nft, this.wallet.utils.toString(params.nftId)];
    let unequipNFT_send = async (params) => {
      let result = await this.send("unequipNFT", unequipNFTParams(params));
      return result;
    };
    let unequipNFT_call = async (params) => {
      let result = await this.call("unequipNFT", unequipNFTParams(params));
      return;
    };
    this.unequipNFT = Object.assign(unequipNFT_send, {
      call: unequipNFT_call
    });
    let unstake_send = async (tokenId) => {
      let result = await this.send("unstake", [this.wallet.utils.toString(tokenId)]);
      return result;
    };
    let unstake_call = async (tokenId) => {
      let result = await this.call("unstake", [this.wallet.utils.toString(tokenId)]);
      return;
    };
    this.unstake = Object.assign(unstake_send, {
      call: unstake_call
    });
    let withdrawLink_send = async (amount) => {
      let result = await this.send("withdrawLink", [this.wallet.utils.toString(amount)]);
      return result;
    };
    let withdrawLink_call = async (amount) => {
      let result = await this.call("withdrawLink", [this.wallet.utils.toString(amount)]);
      return;
    };
    this.withdrawLink = Object.assign(withdrawLink_send, {
      call: withdrawLink_call
    });
  }
};

})