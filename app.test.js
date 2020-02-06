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

const expectedListOfEndPoints = {
  "0": "GET    /",
  "1": "GET    /jumplings",
  "2": "POST   /jumplings",
  "3": "GET /jumplings/:id",
  "4": "PUT /jumplings/:id",
  "5": "DELETE /jumplings/:id",
  "6": "-----------------------",
  "7": "POST   /jumplings/presenters",
  "8": "GET    /jumplings/presenters"
};

describe("app.js", () => {
  it("ensure testing with jest work", () => {
    expect(1).toBe(1);
  });

  it("GET / should respond with status 200 and retrieve all the API endpoints", async () => {
    const response = await request(app)
      .get("/")
      .expect(200);

    expect(response.body).toStrictEqual(expectedListOfEndPoints);
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

  it("GET /jumplings/:id should respond with status 200 and return the jumpling object", async () => {
    //const jumpling = { id: 3, name: "Tommy" };
    const response = await request(app)
      .get("/jumplings/1")
      .expect(200);

    expect(response.body).toStrictEqual([expectedData[0]]);
  });

  it("PUT /jumplings/:id should respond with status 200 and return the jumpling object", async () => {
    const jumpling = { name: "Tommy" };
    const expectedJumpling = { id: 1, name: "Tommy" };

    const response = await request(app)
      .put("/jumplings/1")
      .expect(200)
      .send(jumpling);

    expect(response.body).toStrictEqual([expectedJumpling]);
  });

  /*

  it("DELETE /jumpling/:id should respond with status 200 and return a jumpling object", async () => {
    const expectedJumpling = { id: 1, name: "Steve" };

    const response = await request(app)
      .delete("/jumplings/1")
      .expect(200);

    expect(response.body).toStrictEqual(expectedJumpling);
  });
  */
});
