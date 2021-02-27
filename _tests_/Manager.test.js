const Manager =  require(`../lib/manager`);

describe("Manager", () => {
    describe("Initialization",  () =>  {
        it("should return an object containing a 'officeNumber' property when called with the 'new' keyword", () => {
            const obj = new Manager();

            expect("officeNumber" in obj).toEqual(true);
            }
        );
    });

    describe("getOfficeNum",  () => {
        it("should return the Manager's office number.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const officeNumber = "555-786-9541"
            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.getOfficeNum()).toEqual(officeNumber);
            }
        );
    });

    describe("getName",  () => {
        it("should return the Manager name.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const officeNumber = "555-786-9541"
            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.getName()).toEqual(name);
            }
        );
    });

    describe("getID",  () => {
        it("should return the Manager id.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const officeNumber = "555-786-9541"
            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.getID()).toEqual(id);
            }
        );
    });

    describe("getEmail",  () => {
        it("should return the Manager email address.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const officeNumber = "555-786-9541"
            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.getEmail()).toEqual(email);
            }
        );
    });

    describe("getRole",  () => {
        it("should return an role of 'Manager'.", () => {
            const obj = new Manager();

            expect(obj.getRole()).toEqual('Manager');
            }
        );
    });
});