/**
 * @file GetTransLocations.test.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { getTransLocations } from './GetTransLocations';

jest.mock("next-intl/server");

describe("GetTransLocations", () => {

  it("Sample", async () => {
    const t = await getTransLocations("ja");
  })
})