import { createBankAccount, deposit, withdraw, getBankAccountInfo } from './models/bankAccount';
import { createUser } from './models/user';

var user = createUser({ name: 'John Doe', age: 21 });

// TODO - pegar usuário criado e passar como parâmetro para a função createBankAccount

var bankAccount = createBankAccount(user, { agency: '0001' });

// TODO - pegar conta criada, realizar um depósito e um saque

deposit(bankAccount, 1000);
withdraw(bankAccount, 200);

var bankAccount2 = getBankAccountInfo({ agency: '0001' });

console.log(bankAccount2);