import { omit } from "@/lib/utils";
import { expect, test } from "vitest";

test("omits object property from new object", () => {
    // Arrange
    const testObject = {
        foo: "bar",
        buzz: "fizz",
    };

    // Act
    const result = omit(testObject, ["buzz"]);

    // Assert
    expect(result).toStrictEqual({
        foo: "bar",
    });
});
