import { describe, expect, test } from "bun:test";
import { CohereClient } from "../../../src/infrastructure/clients/cohere.client";

describe("CohereClient Tests", () => {
    test("it should return 'Hola, mi nombre es Gustavo'", async () => {
        const cohereClient = new CohereClient();

        const incomingMessage = "Hi, my name is Gustavo";

        const translatedMessage = await cohereClient.translate(incomingMessage);

        const expectedResponse = "Hola, mi nombre es Gustavo";

        expect(translatedMessage).toBeDefined();
        expect(translatedMessage).toBeTypeOf("string");
        expect(translatedMessage).toEqual(expectedResponse);
    });

    test("it should return 'I would like to order food'", async () => {
        const cohereClient = new CohereClient();

        const incomingMessage = "Me gustaría ordenar comida";

        const result = await cohereClient.translate(incomingMessage);

        const expectedResponse = "I would like to order food";

        expect(result).toBeDefined();
        expect(result).toBeTypeOf("string");
        expect(result).toEqual(expectedResponse);
    });
});
