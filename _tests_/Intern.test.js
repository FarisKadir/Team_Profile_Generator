const Intern =  require(`../lib/intern`);

describe("Intern", () => {
    describe("Initialization",  () =>  {
        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
            const obj = new Intern();

            expect("gitHub" in obj).toEqual(true);
            }
        );
    });

    describe("getGitHub",  () => {
        it("should return the employee github username.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const gitHub = "FarisKadir"
            const obj = new Intern(name, id, email, gitHub);

            expect(obj.getGitHub()).toBe(gitHub);
            }
        );
    });

    describe("getID",  () => {
        it("should return the employee id.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const gitHub = "FarisKadir";
            const obj = new Intern(name, id, email, gitHub);

            expect(obj.getID()).toEqual(id);
            }
        );
    });

    describe("getEmail",  () => {
        it("should return the employee email address.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const gitHub = "FarisKadir"
            const obj = new Intern(name, id, email, gitHub);

            expect(obj.getEmail()).toEqual(email);
            }
        );
    });

    describe("getRole",  () => {
        it("should return an role of 'Employee'.", () => {
            const obj = new Intern();

            expect(obj.getRole()).toEqual('Intern');
            }
        );
    });
});