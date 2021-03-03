const Intern = require("../lib/Intern");

// set school using constructor

test("set school using constructor argument", () => {
    const name = "Penn";
    const int = new Intern(name);
    expect(int.name).toBe(name)
});

//getrole method should return "Intern"

test("get role using getRole()", () => {
    const role = "Intern";   
     const int = new Intern("testName", 123, "test@test.com","Penn");
    expect(int.getRole()).toBe(role)
})

//get school using getSchool method
test("get School using getSchool() method", () => {
    const name = "Penn";
    const int = new Intern("testName", 123, "test@test.com", name);
    expect(int.getSchool()).toBe(name);
  });
  