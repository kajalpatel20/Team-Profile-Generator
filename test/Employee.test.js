const Employee = require("../lib/Employee");


//Make sure Employee is an object

test("Is employee a Obj?", () =>{
    const e = new Employee;
    expect(typeof(e)).toBe("object");
});
//use constructor to set name, id, email (3 different test cases)
test(" set name using constructor argument", () => {
    const name = "Joey";
    const e = new Employee(name);
    expect(e.name).toBe(name)
});

test(" set id using constructor argument", () => {
    const id = 123;
    const e = new Employee("testName", id);
    expect(e.id).toBe(id)
})


test(" set email using constructor argument", () => {
    const email = "test@test.com";
    const e = new Employee("testName", 1, email);
    expect(e.email).toBe(email)
})

//can get name using getName method
test("get name using getName()", () => {
    const name = "Joey";
    const e = new Employee(name);
    expect(e.getName()).toBe(name)
})

//get id using getId
test("get id using getId()", () => {
    const id = 543;
    const e = new Employee("testName", id);
    expect(e.getId()).toBe(id)
})
//get email using getEmail method
test("get email using getEmail()", () => {
    const email = "test@test.com";   
     const e = new Employee("testName", 345, email);
    expect(e.getEmail()).toBe(email)
})
//getRole method should return "Employee"
test("get role using getRole()", () => {
    const role = "Employee";   
     const e = new Employee("testName", 345, "test@test.com");
    expect(e.getRole()).toBe(role)
})

