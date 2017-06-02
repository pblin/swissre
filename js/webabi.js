
web3 = new Web3(new Web3.providers.HttpProvider('http://africajmj.eastus.cloudapp.azure.com:8545'));

var county = function(){

  var address = '0x7fe6ef7adbc7fbd7b7cbe1f45714880141fe979c';
  var abi = [{"constant":false,"inputs":[{"name":"countyName","type":"bytes32"}],"name":"getpayout","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"drougtInsurancePayout","outputs":[],"payable":false,"type":"function"}]
  var contract = web3.eth.contract(abi).at(address);
  var county = document.getElementById('counties').value;

  contract.getpayout.call(county, function(e,r){
    console.log(r.toNumber());
    document.getElementById('countyData').innerHTML = r.toNumber();
  })
}
