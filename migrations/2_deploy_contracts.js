const TodoList = artifacts.require("./TodoList.sol");
const web3 = require('web3') 
module.exports = function (deployer) {
    deployer.deploy(TodoList);
};
