import {JsonSchema} from "../../../../src/common/jsonschema/class/JsonSchema";
import {Any} from "../../../../src/common/jsonschema/decorators/any";
import {stubSchemaDecorator} from "./utils";

describe("Any", () => {
    before(() => {
        this.decoratorStub = stubSchemaDecorator();
        this.schema = new JsonSchema();
        Any();
        this.decoratorStub.getCall(0).args[0](this.schema);
    });
    after(() => {
        this.decoratorStub.restore();
    });

    it("should store data", () => {
        this.schema.type.should.deep.eq(["integer", "number", "string", "boolean", "array", "object", "null"]);
    });
});