const Employee =  require(`../lib/employee`);

describe("Employee", () => {
    describe("Initialization",  () =>  {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            }
        );
        it("should set a 'name' when created", () => {
            const name = "Faris Kadir";
            const obj = new Employee(name);

            expect(obj.name).toEqual(name);
            }
        );
        it("should set a 'id' when created", () => {
            const name = "Faris Kadir";
            const id = "83";
            const obj = new Employee(name, id);

            expect(obj.id).toEqual(id);
            }
        );
        it("should set a 'email' when created", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const obj = new Employee(name, id, email);

            expect(obj.email).toEqual(email);
            }
        );
    })

    describe("getName",  () => {
        it("should return the employee name.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const obj = new Employee(name, id, email);

            expect(obj.getName()).toEqual(name);
            }
        );
    });

    describe("getID",  () => {
        it("should return the employee id.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const obj = new Employee(name, id, email);

            expect(obj.getID()).toEqual(id);
            }
        );
    });

    describe("getEmail",  () => {
        it("should return the employee email address.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const obj = new Employee(name, id, email);

            expect(obj.getEmail()).toEqual(email);
            }
        );
    });

    describe("getRole",  () => {
        it("should return an role of 'Employee'.", () => {
            const obj = new Employee();

            expect(obj.getRole()).toEqual('Employee');
            }
        );
    });
});