class Employees {
	constructor() {
		if (Employees._instance) {
			return Employees._instance
		}
		Employees._instance = this;

		this.employees = [];
		this.url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

		(async () => {
			const response = await fetch(this.url);
			this.employees = await response.json();
			console.log(`work done: got ${this.employees.length} employees`);
		})();

	}

	list() {
		return this.employees.map(m => `${m.firstName} ${m.lastName} (${m.id})`);
	}

}

const employees = new Employees();
const emp = new Employees();

console.log(employees.list());
console.log(emp.list());
