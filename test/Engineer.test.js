const Engineer = require("../lib/Engineer");

// set github username using constructor

test("set github username using constructor argument", () => {
    const name = "GitHubJoey";
    const eng = new Engineer(name);
    expect(eng.name).toBe(name)
});

//getrole method should return "Engineer"

test("get role using getRole()", () => {
    const role = "Engineer";   
     const eng = new Engineer("testName", 123, "test@test.com","GitHubJoey");
    expect(eng.getRole()).toBe(role)
})

//get github username using getGithub method
test("get GitHub username using getGithub() method", () => {
    const name = "GitHubJoey";
    const eng = new Engineer("testName", 123, "test@test.com", name);
    expect(eng.getGithub()).toBe(name);
  });
  