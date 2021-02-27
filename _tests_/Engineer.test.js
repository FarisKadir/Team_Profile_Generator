const Engineer =  require(`../lib/engineer`);

describe("Engineer", () => {
    describe("Initialization",  () =>  {
        it("should return an object containing a 'gitHub' property when called with the 'new' keyword", () => {
            const obj = new Engineer();

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
            const obj = new Engineer(name, id, email, gitHub);

            expect(obj.getGitHub()).toEqual(gitHub);
            }
        );
    });

    describe("getName",  () => {
        it("should return the Engineer name.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const gitHub = "FarisKadir"
            const obj = new Engineer(name, id, email, gitHub);

            expect(obj.getName()).toEqual(name);
            }
        );
    });

    describe("getID",  () => {
        it("should return the Engineer id.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const gitHub = "FarisKadir"
            const obj = new Engineer(name, id, email, gitHub);

            expect(obj.getID()).toEqual(id);
            }
        );
    });

    describe("getEmail",  () => {
        it("should return the Engineer email address.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const gitHub = "FarisKadir"
            const obj = new Engineer(name, id, email, gitHub);

            expect(obj.getEmail()).toEqual(email);
            }
        );
    });

    describe("getRole",  () => {
        it("should return an role of 'Engineer'.", () => {
            const obj = new Engineer();

            expect(obj.getRole()).toEqual('Engineer');
            }
        );
    });
});