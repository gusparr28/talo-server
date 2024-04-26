import { CohereClient } from "cohere-ai";

class CohereClientSingleton {
	private static instance: CohereClient;

	private static token: string;

	private constructor() {
		CohereClientSingleton.token = process.env.TALO_API_KEY || "";
		if (!CohereClientSingleton.token) {
			throw new Error("TALO_API_KEY is not defined");
		}
	}

	public static getInstance(): CohereClient {
		if (!CohereClientSingleton.instance) {
			CohereClientSingleton.instance = new CohereClient({
				token: CohereClientSingleton.token,
			});
		}

		return CohereClientSingleton.instance;
	}
}

export default CohereClientSingleton;
