import type { IAIClient } from "../../domain/interfaces/aI.client.interface";
import type { ITranslateService } from "../../domain/interfaces/translate.service.interface";
import type { Translate } from "../../domain/translate.entity";

export default class TranslateService implements ITranslateService {
	constructor(private readonly aIClient: IAIClient) {}

	public async translate(message: string): Promise<Translate["message"]> {
		return await this.aIClient.translate(message);
	}
}
