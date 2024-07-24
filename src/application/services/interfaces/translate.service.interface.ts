import type { Translate } from "../../../domain/translate.entity";

export interface ITranslateService {
	translate(message: string): Promise<Translate["message"]>;
}
