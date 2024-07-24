import type { Translate } from "../../../domain/translate.entity";

export interface IAIClient {
	translate(message: string): Promise<Translate["message"]>;
}
