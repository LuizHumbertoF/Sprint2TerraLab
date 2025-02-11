"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBankAccountInfo = exports.deposit = exports.withdraw = exports.createBankAccount = void 0;
var uuid_1 = require("uuid");
var bankAccounts = [];
function createBankAccount(user, basicInfo) {
    var bankAccount = {
        id: (0, uuid_1.v4)(),
        agency: basicInfo.agency,
        number: basicInfo.number,
        balance: 0,
        user: user
    };
    bankAccounts.push(bankAccount);
    return bankAccount;
}
exports.createBankAccount = createBankAccount;
function withdraw(bankAccount, value) {
    if (value < bankAccount.balance) {
        bankAccount.balance -= value;
    }
    else {
        console.log('Saldo insuficiente');
    }
    return bankAccount.balance;
}
exports.withdraw = withdraw;
function deposit(bankAccount, value) {
    bankAccount.balance += value;
    return bankAccount.balance;
}
exports.deposit = deposit;
function getBankAccountInfo(basicInfo) {
    var bankAccount = bankAccounts.find(function (item) {
        return item.agency === basicInfo.agency && item.number === basicInfo.number;
    });
    return bankAccount;
}
exports.getBankAccountInfo = getBankAccountInfo;
