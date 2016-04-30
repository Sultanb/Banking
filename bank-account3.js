var accounts = [];
var i;

//create a new Account
function createAccount(account) {
	accounts.push(account);
	return account;
}

//get account
function getAccount(username) {
	var matchedAccount;
	// for loop or while loop
	//accounts[0], accounts[1], accounts[i]
	for(accounts[i];username===accounts.username;i++) {
		if (accounts[i].username === username) {
			matchedAccount =  accounts[i];
		}
			return matchedAccount;
		}
}

//deposit (account,amount)
function deposit(account, amount) {
	//only accept numbers
	if (typeof amount === 'number'){
		account.balance += amount;
	} else {
		console.log('wrong value');
	}
	
}

//withdraw (account,amount)
function withdraw(account, amount) {
	//only accept numbers
	if (typeof amount === 'number') {
		account.balance -= amount;
	} else {
		console.log('wrong value');
	}
}

//getBalance(account)
function getBalance(account) {
	return account.balance;
}

// createBalanceGetter(account) {
//      return function()
//         account.balance

function createBalanceGetter(account) {
	return function() {
		return account.balance;
	}
}

var sultanAccount = createAccount({
	username: 'Sultan',
	balance: 0
});

deposit(sultanAccount, 100);
console.log(getBalance(sultanAccount));

withdraw(sultanAccount, 10);
console.log(getBalance(sultanAccount));

var existingAccount = getAccount('Sultan');
//console.log(existingAccount);

var lamaAccount = createAccount({
	username: 'Lama',
	balance: 12
});

//console.log(getAccount('Lama'));
console.log(accounts);

withdraw(sultanAccount, 'hello');
