var accounts = [];


//create a new Account
function createAccount(account) {
	accounts.push(account);
	return account;
}

//get account
function getAccount(username) {
	var matchedAccount;
	accounts.forEach(function(account){
		if (username === account.username) {
			matchedAccount =  account;
		}
	});
	return matchedAccount;
}

//deposit (account,amount)
function deposit(account, amount) {
	account.balance += amount;
}

//withdraw (account,amount)
function withdraw(account, amount) {
	account.balance -= amount;
}

//getBalance(account)
function getBalance(account) {
	return account.balance;
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