const Employee =  require(`../lib/employee`);

describe("Employee", () => {
    describe("Initialization",  () =>  {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
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