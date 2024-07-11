import type { Translate } from "../translate.entity";

export interface ITranslateService {
	translate(message: string): Promise<Translate["message"]>;
}
