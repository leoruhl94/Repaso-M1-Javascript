const {
    prueba,
} = require("../checkpoint.js");

describe("probando", function () {
    it("debe retornar 'probando' ", function () {
      expect(prueba()).toEqual('probando');
    });
});