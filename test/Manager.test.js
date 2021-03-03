const Manager = require("../lib/Manager");

// set office number using constructor

test("set office number using constructor argument", () => {
    const officenumber = 1;
    const m = new Manager(officenumber);
    expect(m.officenumber).toBe(officenumber)
});

//getrole method should return "Manager"

test("get role using getRole()", () => {
    const role = "Manager";   
     const m = new Manager("testName", 123, "test@test.com",1);
    expect(m.getRole()).toBe(role)
})

//get office number using getOfficeNumber method
test("get office number using getOfficenumber() method", () => {
    const officenumber = 1;
    const m = new Manager("testName", 123, "test@test.com", 1);
    expect(m.getOfficenumber()).toBe(officenumber);
  });
  