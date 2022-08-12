const Engineer = require('../lib/Engineer');

test("setting up github via constructor", () => {
    const testValue = "mava";
    const employee = new Engineer("Grant", 1, "test@cheese.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Grant", 1, "test@cheese.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "Mavsic";
    const employee = new Engineer("Grant", 1, "test@cheese.com", testValue);
    expect(employee.getGithub()).toBe(testValue);
})