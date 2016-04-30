var account = {
	balance: 0
};

function deposit(account,amount) {
	account.balance += amount;
}

function withdraw(account,amount) {
	account.balance -= amount;
}

function getbalance(account) {
	return account.balance;
}

deposit(account, 1000);
console.log(getbalance(account));

withdraw(account, 121);
console.log(getbalance(account));