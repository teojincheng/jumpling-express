const request = require("supertest");
const app = require("./app");

const expectedData = [
  {
    id: 1,
    name: "Steve"
  },
  {
    id: 2,
    name: "Peter"
  },
  {
    id: 3,
    name: "Susan"
  }
];

describe("app.js", () => {
  it("ensure testing with jest work", () => {
    expect(1).toBe(1);
  });

  it("GET /jumplings should respond with status 200 and retrive all the jumplings ", async () => {
    const response = await request(app)
      .get("/jumplings")
      .expect(200);

    expect(response.body).toStrictEqual(expectedData);
  });

  it("POST /jumplings should respond with status 201 and return the jumpling object", async () => {
    const jumpling = { id: 3, name: "Tommy" };
    const response = await request(app)
      .post("/jumplings")
      .expect(201)
      .send(jumpling);

    expect(response.body).toStrictEqual([jumpling]);
  });
});
