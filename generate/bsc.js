const { ethers } = require("ethers");

function main() {  
	newWallet()
}

main();

async function newWallet() {
	var privateKey = ethers.utils.randomBytes(32);
	var wallet = new ethers.Wallet(privateKey);

	let keyNumber = ethers.BigNumber.from(privateKey);
	if (keyNumber._hex.length != 66){
		console.log("key length fail,请重新执行")
		return
	}

	console.log("账号地址:  "+wallet.address);
	console.log("账号私钥:  "+keyNumber._hex);

}
