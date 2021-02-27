const Intern =  require(`../lib/intern`);

describe("Intern", () => {
    describe("Initialization",  () =>  {
        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
            const obj = new Intern();

            expect("school" in obj).toEqual(true);
            }
        );
    });

    describe("getSchool",  () => {
        it("should return the intern's school.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const school = "Plantation High School"
            const obj = new Intern(name, id, email, school);

            expect(obj.getSchool()).toEqual(school);
            }
        );
    });

    describe("getName",  () => {
        it("should return the Intern name.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const school = "Plantation High School"
            const obj = new Intern(name, id, email, school);

            expect(obj.getName()).toEqual(name);
            }
        );
    });

    describe("getID",  () => {
        it("should return the Intern id.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const school = "Plantation High School"
            const obj = new Intern(name, id, email, school);

            expect(obj.getID()).toEqual(id);
            }
        );
    });

    describe("getEmail",  () => {
        it("should return the Intern email address.", () => {
            const name = "Faris Kadir";
            const id = "83";
            const email = "faris.kadir@gmail.com";
            const school = "Plantation High School"
            const obj = new Intern(name, id, email, school);

            expect(obj.getEmail()).toEqual(email);
            }
        );
    });

    describe("getRole",  () => {
        it("should return an role of 'Intern'.", () => {
            const obj = new Intern();

            expect(obj.getRole()).toEqual('Intern');
            }
        );
    });
});