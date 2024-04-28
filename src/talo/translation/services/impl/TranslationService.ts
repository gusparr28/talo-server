import type ICohereClient from "../../../../clients/cohere/ICohereClient";
import CohereClientImpl from "../../../../clients/cohere/impl/CohereClient";
import type ITranslationService from "../ITranslationService";

export default class TranslationService implements ITranslationService {
	private cohereClient: ICohereClient;

	constructor() {
		this.cohereClient = new CohereClientImpl();
	}

	public async translate(message: string): Promise<string> {
		const translatedMessage = await this.cohereClient.processMessageTranslation(message);
		return translatedMessage;
	}
}
