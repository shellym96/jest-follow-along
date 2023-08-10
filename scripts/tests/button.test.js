/**
 * @jest-environment jsdom
 */

const { test } = require("picomatch");
const buttonClick = require("scripts/tests/button.test.js");

beforeEach(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });

    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1)
    });
});