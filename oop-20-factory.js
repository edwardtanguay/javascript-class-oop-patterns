class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	displayAsLine() {
		return `${firstName} ${lastName}`;
	}
}

class Employee extends Person {
	constructor(firstName, lastName, employeeNumber) {
		super(firstName, lastName);
		this.employeeNumber = employeeNumber;
	}

	displayAsLine() {
		return `${this.firstName} ${this.lastName} (empnr. ${this.employeeNumber})`;
	}
}

class Customer extends Person {
	constructor(firstName, lastName, company, salesPerYear) {
		super(firstName, lastName);
		this.company = company;
		this.salesPerYear = salesPerYear;
	}

	displayAsLine() {
		return `${this.firstName} ${this.lastName} from ${this.company} with ${this.salesPerYear} sales per year`;
	}
}

class PersonFactory {
	constructor() {
		this.personsCreated = [];
	}

	instantiate(kind, obj) {
		switch (kind) {
			case 'employee':
				const employee = new Employee(obj.firstName ?? '(unknown)', obj.lastName ?? '(unknown)', obj.employeeNumber ?? '(unknown)');
				this.personsCreated.push(employee);
				return employee;
			case 'customer':
				const customer = new Customer(obj.firstName ?? '(unknown)', obj.lastName ?? '(unknown)', obj.company ?? '(unknown)', obj.salesPerYear ?? 0);
				this.personsCreated.push(customer);
				return customer;
			default:
				throw new Error(`unrecognized Person kind: "${kind}`);
		}
	}

	getReport() {
		return `
Persons Created:
-----------------------
${this.personsCreated.map(m => m.displayAsLine()). join('\r\n')}`;
	}
}

const factory = new PersonFactory();
factory.instantiate('employee', {firstName: 'Johannes', lastName: 'Roberts', employeeNumber: 728 });
factory.instantiate('customer', {firstName: 'Friedrich', lastName: 'Schanz', company: 'Antwerp Ltd.'});
factory.instantiate('employee', {firstName: 'Angelika', lastName: 'Holzheim', employeeNumber: 234 });

console.log(factory.getReport());