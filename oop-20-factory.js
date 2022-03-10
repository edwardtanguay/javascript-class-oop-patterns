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
		super();
		this.employeeNumber = employeeNumber;
	}
	
	displayAsLine() {
		return `${firstName} ${lastName} (empnr. ${this.employeeNumber})`;
	}
}

class Customer extends Person {
	constructor(firstName, lastName, company, salesPerYear) {
		super();
		this.company = company;
		this.salesPerYear = salesPerYear;
	}

	displayAsLine() {
		return `${firstName} ${lastName} from ${this.company} with ${this.salesPerYear} sales per year`;
	}
}


