"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bankAccount_1 = require("./models/bankAccount");
const user_1 = require("./models/user");
var user = (0, user_1.createUser)({ name: 'John Doe', age: 21 });
// TODO - pegar usuário criado e passar como parâmetro para a função createBankAccount
var bankAccount = (0, bankAccount_1.createBankAccount)(user, { agency: '0001' });
// TODO - pegar conta criada, realizar um depósito e um saque
(0, bankAccount_1.deposit)(bankAccount, 1000);
(0, bankAccount_1.withdraw)(bankAccount, 200);
var bankAccount2 = (0, bankAccount_1.getBankAccountInfo)({ agency: '0001' });
console.log(bankAccount2);
