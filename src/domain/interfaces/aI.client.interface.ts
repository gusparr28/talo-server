import type { Translate } from "../translate.entity";

export interface IAIClient {
	translate(message: string): Promise<Translate["message"]>;
}
