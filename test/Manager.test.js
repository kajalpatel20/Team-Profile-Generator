const Manager = require("../lib/Manager");

// set office number using constructor

test("set office number using constructor argument", () => {
    const name = 11;
    const m = new Manager(name);
    expect(m.getOfficeNumber).toBe(name)
});

//getrole method should return "Manager"

test("get role using getRole()", () => {
    const role = "Manager";   
     const m = new Manager("testName", 123, "test@test.com",11);
    expect(m.getRole()).toBe(role)
})

//get office number using getOfficeNumber method
test("get office number using getOfficenumber() method", () => {
    const name = 11;
    const m = new Manager("testName", 123, "test@test.com",11);
    expect(m.getOfficeNumber()).toBe(name);
  });
  