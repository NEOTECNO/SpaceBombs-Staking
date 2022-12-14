const CONTRACT_COL = "0xff1b773A69B9507127c13daACc6a5AF4155b1bEd";
const CONTRACT_STAKE = "0xDc0728D27DCE180B689938cE8BF432395424F0c4";

const ABI_COL = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"HoldersMaxperTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HoldersNftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MaxperTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"parentAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerAddLimit","type":"uint256"}],"name":"setMaxPerAddLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_MaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintperTx","type":"uint256"}],"name":"setMaxperTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_Address","type":"address"}],"name":"setParentAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const ABI_STAKE = [{"inputs":[{"internalType":"contract ERC721A","name":"_nft","type":"address"},{"internalType":"contract TokenRewards","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"NFTUnstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claimForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"earningInfo","outputs":[{"internalType":"uint256[1]","name":"info","type":"uint256[1]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setStakeState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"vault","outputs":[{"internalType":"uint24","name":"tokenId","type":"uint24"},{"internalType":"uint48","name":"timestamp","type":"uint48"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"}]

var account = null;
var wallet = null;
var contract1 = null;
var contract2 = null;
var price = null;

var tokenId = [];
var colTokensArray = [];
var stakedTokensArray = [];
var stakeSelectedTokens = [];
var unstakeSelectedTokens = [];
var totalStaked = "";
var earningInfo = "";
var approved = "";

window.ethereum.on('accountsChanged', function (accounts) {
	document.getElementById("approve").innerHTML = "Authorize Your Wallet";
	connect();
  })

//APPROVE YOUR WALLET
const approve = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		if (account.length > 0) {
			var success = "";
			document.getElementById("approve").innerHTML = "WORKING..."
			try {
	  			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				account = accounts[0];

				document.getElementById("connect_button").innerHTML = account.substr(0,10) + "..." + account.substr(-4);
  
				const web3 = new Web3(window.ethereum);
				contract1 = new web3.eth.Contract(ABI_COL, CONTRACT_COL, { from: account });
				approved = await contract1.methods.isApprovedForAll(account, CONTRACT_STAKE).call();

				if (approved) {
					alert("Already approved!")
					console.log("Already approved!");
					document.getElementById("approve").innerHTML = "WALLET APPROVED";
					}
				else
					{
					await contract1.methods.setApprovalForAll(CONTRACT_STAKE, true).send({from: account});
					alert("Wallet approved!")
					console.log("Wallet approved!");
					success = document.getElementById("approve").innerHTML = "WALLET APPROVED";
					}
				}
			catch(e)
				{
				alert("Error: " + e.message)
				console.log("Error: ",e)
		  		document.getElementById("approve").innerHTML = "Authorize Your Wallet";
		  		}
			}
		}
	}

//CHECK WALLET APPROVAL
const approveState = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		account = accounts[0];
		
		if (account.length > 0) {
			const web3 = new Web3(window.ethereum);
			contract1 = new web3.eth.Contract(ABI_COL, CONTRACT_COL, { from: account });
			approved = await contract1.methods.isApprovedForAll(account, CONTRACT_STAKE).call();

			if (approved) { document.getElementById("approve").innerHTML = "WALLET APPROVED"; }
			}
		}
		return false;
	}

//STAKE ONE TOKEN
const stakeOne = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (tokenId != "") {
			var result = "";
			var success = "";
			document.getElementById(tokenId).innerHTML = "WORKING..."
			try {
			  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  	account = accounts[0];

			  	const web3 = new Web3(window.ethereum);
			  	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  	const gas = Math.round( await contract2.methods.stake(tokenId).estimateGas({from: account, to: CONTRACT_STAKE, }) * 1.1 );
			  	result = await contract2.methods.stake(tokenId).send({from: account, to: CONTRACT_STAKE, gas: gas});

				success = document.getElementById(tokenId).innerHTML = "STAKED!";
			  	} 
		  	catch(e)
			  	{
			  	alert("Error: " + e.message)
			  	console.log("Error: ",e)
				document.getElementById(tokenId).innerHTML = "STAKE";
				}
		  	}
		}
  	}

//UNSTAKE ONE TOKEN
const unstakeOne = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (tokenId != "") {
			var result = "";
			var success = "";
			document.getElementById(tokenId).innerHTML = "WORKING...";
			try {
			  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  	account = accounts[0];

			  	const web3 = new Web3(window.ethereum);
			  	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  	const gas = Math.round( await contract2.methods.unstake(tokenId).estimateGas({from: account, to: CONTRACT_STAKE, }) * 1.1 );
			  	result = await contract2.methods.unstake(tokenId).send({from: account, to: CONTRACT_STAKE, gas: gas});

				success = document.getElementById(tokenId).innerHTML = "UNSTAKED!";
			  	} 
		  catch(e)
			  	{
			  	alert("Error: " + e.message)
			  	console.log("Error: ",e)
				document.getElementById(tokenId).innerHTML = "UNSTAKE";
				}
		  	}
		}
  	}

//STAKE ALL YOUR TOKENS
const stakeAll = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
        if (colTokensArray != "") {
          	var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "WORKING...";
          	try {
            	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				account = accounts[0];

            	const web3 = new Web3(window.ethereum);
            	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

            	const gas = Math.round( await contract2.methods.stake(colTokensArray).estimateGas({value: 0, from: account}) * 1.1 );
            	result = await contract2.methods.stake(colTokensArray).send({value: 0, from: account, gas: gas});

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				} 
			catch(e)
				{
            	alert("Error: " + e.message)
            	console.log("Error: ",e)
				document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 4444 ;
          		}
        	}
		else
			{
			alert("No more SpaceBombs to stake.")
			console.log("No more SpaceBombs to stake.");
			}
  		}
	}

//UNSTAKE ALL YOUR TOKENS
const unstakeAll = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
		if (stakedTokensArray != "") {
          	var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "WORKING...";
          	try {
            	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				account = accounts[0];

            	const web3 = new Web3(window.ethereum);
            	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

            	const gas = Math.round( await contract2.methods.unstake(stakedTokensArray).estimateGas({value: 0, from: account}) * 1.1 );
            	result = await contract2.methods.unstake(stakedTokensArray).send({value: 0, from: account, gas: gas});

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			   	}
			catch(e) 
				{
            	alert("Error: " + e.message)
            	console.log("Error: ",e)
				document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 4444 ;
          		}
        	}
		else
			{
			alert("No tokens staked.")
			console.log("No tokens staked.");
			}
  		}
	}

//CLAIM YOUR REWARDS
const claim = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		if (earningInfo != 0) {
			var result = "";
			var success = "";
			document.getElementById("tokens_available").innerHTML = "CLAIMING...";
			try {
			  	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  	account = accounts[0];
  
			  	const web3 = new Web3(window.ethereum);
			  	contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });
  
			  	const gas = Math.round( await contract2.methods.claim(stakedTokensArray).estimateGas({value: 0, from: account}) * 1.1 );
			  	result = await contract2.methods.claim(stakedTokensArray).send({value: 0, from: account, gas: gas});

				success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
				}
			catch(e) 
				{
            	alert("Error: " + e.message)
            	console.log("Error: ",e)
				document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 4444 ;
          		}
        	}
		else
			{
			alert("No rewards to claim.")
			console.log("No rewards to claim.");
			}
  		}
	}

//SELECT TOKENS
const select = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (tokenId != "") {
			var tString = tokenId.toString();
			var tokenS = tString.slice(0,-4);
			var removeThisToken = stakeSelectedTokens.indexOf(tokenS);
			var removeThisToken2 = unstakeSelectedTokens.indexOf(tokenS);

			if (colTokensArray.indexOf(tokenS) != -1) {
				if (stakeSelectedTokens.indexOf(tokenS) === -1) {
					stakeSelectedTokens.push(tokenS);
					document.getElementById(tokenId).src = 'images/select-btn-1.png';
				}
				else
				{
					stakeSelectedTokens.splice(removeThisToken,1);
					document.getElementById(tokenId).src = 'images/select-btn-2.png';
				}

				if (stakeSelectedTokens.length != 0) {
					document.getElementById("stakeSelected").innerHTML = "STAKE SELECTED " + "(" + stakeSelectedTokens.length + ")";
					}

				if (stakeSelectedTokens.length == 0) {
					document.getElementById("stakeSelected").innerHTML = "STAKE SELECTED";
					}
				}
			else
				{
				if (unstakeSelectedTokens.indexOf(tokenS) === -1) {
					unstakeSelectedTokens.push(tokenS);
					document.getElementById(tokenId).src = 'images/select-btn-1.png';
					}
				else
					{
					unstakeSelectedTokens.splice(removeThisToken2,1);
					document.getElementById(tokenId).src = 'images/select-btn-2.png';
					}
	
				if (unstakeSelectedTokens.length != 0) {
					document.getElementById("unstakeSelected").innerHTML = "UNSTAKE SELECTED " + "(" + unstakeSelectedTokens.length + ")";
					}
	
				if (unstakeSelectedTokens.length == 0) {
					document.getElementById("unstakeSelected").innerHTML = "UNSTAKE SELECTED";
					}
				}
			}
		}
  	}

//STAKE SELECTED TOKENS
const stakeSelected = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (stakeSelectedTokens.length != 0) {
		  	var result = "";
		  	var success = "";
		  	document.getElementById("tokens_available").innerHTML = "WORKING...";
			try {
			  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  account = accounts[0];

			  const web3 = new Web3(window.ethereum);
			  contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  const gas = Math.round( await contract2.methods.stake(stakeSelectedTokens).estimateGas({value: 0, from: account}) * 1.1 );
			  result = await contract2.methods.stake(stakeSelectedTokens).send({value: 0, from: account, gas: gas});

			  success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			  } 
		  	catch(e)
			  {
			  alert("Error: " + e.message)
			  console.log("Error: ",e)
			  document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 4444 ;
			  }
		  	}
	  	else
		  	{
		  	alert("No tokens selected to stake.")
		  	console.log("No tokens selected to stake.");
		  	}
		}
  	}

//UNSTAKE SELECTED TOKENS
const unstakeSelected = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
	  	if (unstakeSelectedTokens.length != 0) {
		  	var result = "";
		  	var success = "";
		  	document.getElementById("tokens_available").innerHTML = "WORKING...";
			try {
			  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			  account = accounts[0];

			  const web3 = new Web3(window.ethereum);
			  contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, { from: account });

			  const gas = Math.round( await contract2.methods.unstake(unstakeSelectedTokens).estimateGas({value: 0, from: account}) * 1.1 );
			  result = await contract2.methods.unstake(unstakeSelectedTokens).send({value: 0, from: account, gas: gas});

			  success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			  } 
		  	catch(e)
			  {
			  alert("Error: " + e.message)
			  console.log("Error: ",e)
			  document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 4444 ;
			  }
		  	}
	  	else
		  	{
			alert("No tokens selected to unstake.")
			console.log("No tokens selected to unstake.");
			}
		}
  	}

//GET YOUR COLLECTION TOKENS IDs
const getTokens = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = accounts[0];
		
    	if (account.length > 0) {
  	  		const web3 = new Web3(window.ethereum);
			contract1 = new web3.eth.Contract(ABI_COL, CONTRACT_COL, {gas: 30000000});
			var getTokensArray = await contract1.methods.walletOfOwner(account).call();
			var NFTamount = await contract1.methods.balanceOf(account).call();

			var colTokensString = String(getTokensArray);
			colTokensArray = Array.from(getTokensArray);

			if (getTokensArray != "") {
				for(var i=0 ; i<NFTamount ; i++) {
					let div = document.createElement('p');
					div.className = 'NFTcard';
        			div.innerHTML = '<img class="card-image" src="https://gateway.pinata.cloud/ipfs/QmVMWSm8jyD1vvxWSaPuTY8FD8UrAPEDHyY13xKFddXcEa/'
					+ colTokensArray[i] + '.png" onerror="this.src=' + "'images/load.png'" + '"> <img class="card-select-btn" src="images/select-btn-2.png" onclick="select(tokenId = [this.id])" id="' 
					+ colTokensArray[i] + "card" + '"> <a class="card-text"> SPACEBOMB #' + colTokensArray[i]
					+ ' </a> <br> <a class="card-text"> Available </a> <br> <button class="card-stk-btn" onclick="stakeOne(tokenId = [this.id])" id="' 
					+ colTokensArray[i] + '"> STAKE </button>';
        		
					const NFTcard = document.getElementById('grid');
					NFTcard.appendChild(div);
			 		}
				}

			if (colTokensArray != "") {
				document.getElementById("unstakeIds").innerHTML = NFTamount ;
				}
			else
				{
				document.getElementById("unstakeIds").innerHTML = "No more SpaceBombs to stake.";
				}
			}
  		}
  		return false;
	}

//GET YOUR STAKED TOKENS IDs
const getTokens2 = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		var account = accounts[0];

    	if (account.length > 0) {
  	  		const web3 = new Web3(window.ethereum);
  	  		contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, {gas: 30000000});
			var tokensStaked = await contract2.methods.tokensOfOwner(account).call();
			var NFTstaked = await contract2.methods.balanceOf(account).call();

			var stakedTokensString = String(tokensStaked);
			stakedTokensArray = Array.from(tokensStaked);

			if (tokensStaked != "") {
				for(var i=0 ; i<NFTstaked ; i++) {
					let div = document.createElement('p');
					div.className = 'NFTcard';
        			div.innerHTML = '<img class="card-image" src="https://gateway.pinata.cloud/ipfs/QmVMWSm8jyD1vvxWSaPuTY8FD8UrAPEDHyY13xKFddXcEa/'
					+ stakedTokensArray[i] + '.png" onerror="this.src=' + "'images/load.png'" + '"> <img class="card-select-btn" src="images/select-btn-2.png" onclick="select(tokenId = [this.id])" id="' 
					+ stakedTokensArray[i] + "card" + '"> <a class="card-text"> SPACEBOMB #' + stakedTokensArray[i]
					+ ' </a> <br> <a class="card-text"> Staked </a> <br> <button class="card-unstk-btn" onclick="unstakeOne(tokenId = [this.id])" id="'
					+ stakedTokensArray[i] + '"> UNSTAKE </button>';

					const NFTcard = document.getElementById('grid');
					NFTcard.appendChild(div);
			 		}
				}

			if (stakedTokensArray != "") {
				document.getElementById("stakeIds").innerHTML = NFTstaked ;
				}
			else
				{
				document.getElementById("stakeIds").innerHTML = "No staked SpaceBombs.";
				}
			}
  		}
  		return false;
	}

//CONNECT YOUR WALLET
const connect = async (e)=> {
  	if (typeof window.ethereum !== 'undefined') {
    	console.log('MetaMask is installed!');
    	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		account = accounts[0];

    	if (account.length != 0) {
        	document.getElementById("connect_button").innerHTML = account.substr(0,10) + "..." + account.substr(-4);

  	  		const web3 = new Web3(window.ethereum);
  	  		contract2 = new web3.eth.Contract(ABI_STAKE, CONTRACT_STAKE, {gas: 300000000});

      		totalStaked = await contract2.methods.totalStaked().call();
			document.getElementById("tokens_available").innerHTML = totalStaked + " / " + 4444;
		
			var tokensStaked = await contract2.methods.tokensOfOwner(account).call();
			stakedTokensArray = Array.from(tokensStaked);
		
		if (stakedTokensArray != 0) {
			earningInfo = await contract2.methods.earningInfo(account,[stakedTokensArray[0]]).call() * stakedTokensArray.length;
			}

		if (earningInfo != 0)
			{
			document.getElementById("rewards").innerHTML = String(earningInfo / 1e18).substr(0,8);
			}
		else
			{
			document.getElementById("rewards").innerHTML = "No rewards to claim.";
			}

		approveState();
		await getTokens();
		getTokens2();
		}
    	else
		{
        document.getElementById("connect_button").innerHTML = "Connect wallet";
		}
  	}
  	return false;
}
  
//BUTTON FUNCTIONS
document.getElementById('connect_button').onclick = connect;
document.getElementById('stakeAll').onclick = stakeAll;
document.getElementById('unstakeAll').onclick = unstakeAll;
document.getElementById('stakeSelected').onclick = stakeSelected;
document.getElementById('unstakeSelected').onclick = unstakeSelected;
document.getElementById('claim').onclick = claim;
document.getElementById('approve').onclick = approve;

//connect();
