import type { ITranslateService } from "./interfaces/translate.service.interface";
import type { Translate } from "../../domain/translate.entity";
import type { IAIClient } from "../../infrastructure/clients/interfaces/aI.client.interface";

export default class TranslateService implements ITranslateService {
	constructor(private readonly aIClient: IAIClient) {}

	public async translate(message: string): Promise<Translate["message"]> {
		return await this.aIClient.translate(message);
	}
}
