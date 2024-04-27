import { describe, expect, test } from "bun:test";
import CohereClientImpl from "../../../../src/clients/cohere/impl/CohereClient";

describe("CohereClient Tests", () => {
    test("it should return 'Hola, mi nombre es Gustavo'", async () => {
        const cohereClient = new CohereClientImpl();

        const incomingMessage = "Hi, my name is Gustavo";

        const translatedMessage = await cohereClient.processMessageTranslation(incomingMessage);

        const expectedResponse = "Hola, mi nombre es Gustavo";

        expect(translatedMessage).toBeDefined();
        expect(translatedMessage).toBeTypeOf("string");
        expect(translatedMessage).toEqual(expectedResponse);
    });

    test("it should return 'I would like to order food'", async () => {
        const cohereClient = new CohereClientImpl();

        const incomingMessage = "Me gustaría ordenar comida";

        const result = await cohereClient.processMessageTranslation(incomingMessage);

        const expectedResponse = "I would like to order food";

        expect(result).toBeDefined();
        expect(result).toBeTypeOf("string");
        expect(result).toEqual(expectedResponse);
    });
});
