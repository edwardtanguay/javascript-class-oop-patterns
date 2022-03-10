class Employees {
	constructor() {
		if (Employees._instance) {
			return Employees._instance
		}
		Employees._instance = this;

		this.employees = [
			{
				id: 2,
				lastName: "Nordruf",
				firstName: "Andreas"
			},
			{
				id: 3,
				lastName: "Moritor",
				firstName: "Nico"
			},
			{
				id: 4,
				lastName: "Rothchild",
				firstName: "Maria"
			}
		];
		console.log('work done');
	}

	list() {
		return this.employees.map(m => `${m.firstName} ${m.lastName} (${m.id})`);
	}

}

const employees = new Employees();
const emp = new Employees();

console.log(employees.list());
console.log(emp.list());
