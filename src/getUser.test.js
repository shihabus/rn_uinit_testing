import { resolve } from "dns";

import mockAxios from "axios";
import getUser from "./getUser";

describe("Get User", () => {
  it("fetch a user using axios", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: {
        completed: false,
        id: 1,
        title: "delectus aut autem",
        userId: 1
      } })
    );
    const user = await getUser();
    expect(user.id).toBe(1);
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1')
  });
});
