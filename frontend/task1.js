let account1 = {
    "id": 123456781234567812345678,
    "name": "Kiss Lilla",
    "balance": 3.000,
    "currency": "USA",
    "transactions": [
            {
                "amount": 200,
                "currency": "USA",
                "isSuccessful": true,
                "type": "withdraw",
                "date": 2019
            },
            {
                "amount": 100,
                "currency": "USA",
                "isSuccessful": false,
                "type": "withdraw",
                "date": 2020
            },
            {
                "amount": 500,
                "currency": "USA",
                "isSuccessful": true,
                "type": "deposit",
                "date": 2021
            }
    ]
};

let account2 = {
    "id": 234567892345678923456789,
    "name": "Kiss Gergely",
    "balance": 5.000,
    "currency": "USA",
    "transactions": [
            {
                "amount": 400,
                "currency": "USA",
                "isSuccessful": true,
                "type": "withdraw",
                "date": 2019
            },
            {
                "amount": 500,
                "currency": "USA",
                "isSuccessful": false,
                "type": "withdraw",
                "date": 2020
            },
            {
                "amount": 600,
                "currency": "USA",
                "isSuccessful": true,
                "type": "deposit",
                "date": 2021
            }
    ]
};

let account3 = {
    "id": 345678913456789134567891,
    "name": "Nagy Lajos",
    "balance": 8.000,
    "currency": "USA",
    "transactions": [
            {
                "amount": 100,
                "currency": "USA",
                "isSuccessful": true,
                "type": "withdraw",
                "date": 2019
            },
            {
                "amount": 900,
                "currency": "USA",
                "isSuccessful": true,
                "type": "withdraw",
                "date": 2020
            },
            {
                "amount": 800,
                "currency": "USA",
                "isSuccessful": false,
                "type": "deposit",
                "date": 2021
            }
    ]
};

function getDateOfHighestDeposit(account) {

    let dateOfHighest = null;
    let amountOfHighest = 0; // ide toltjuk bele az erteket

    for (let transaction of account.transactions) {

        let isRelevant = false; //default ertek

        if (transaction.type === "deposit" && transaction.isSuccessful === true) {
            isRelevant = true;
        }   else {
            isRelevant = false;
        };

        if (isRelevant === true && transaction.amount > amountOfHighest) {
            dateOfHighest = transaction.date;
            amountOfHighest = transaction.amount; //ilyenkor felulirjuk
        }

        
    };

    return dateOfHighest;   
}

console.log(getDateOfHighestDeposit(account1));
console.log(getDateOfHighestDeposit(account2));
console.log(getDateOfHighestDeposit(account3));