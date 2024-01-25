import { getTransLocations } from "./GetTransLocations"

jest.mock("next-intl/server");

describe("GetTransLocations", () => {

  it("Sample", async () => {
    const t = await getTransLocations("ja");
  })
})