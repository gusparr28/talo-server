import { CohereClient } from "cohere-ai";
import type ICohereClient from "../ICohereClient";
import type { ChatMessage } from "cohere-ai/api";
import path from "node:path";

export default class CohereClientImpl implements ICohereClient {
	private cohereClient: CohereClient;

	private token: string;

	constructor() {
		this.token = process.env.TALO_API_KEY || "";
		if (!this.token) {
			throw new Error("TALO_API_KEY is not defined");
		}
		this.cohereClient = new CohereClient({
			token: this.token,
		});
	}

	public async processMessageTranslation(message: string): Promise<string> {
		const pathToChatHistory = path.resolve(__dirname, "../utils/chatHistory.json");
		const chatHistoryFile = Bun.file(pathToChatHistory, { type: "application/json" });
		const chatHistoryData: ChatMessage[] = await chatHistoryFile.json();

		const response = await this.cohereClient.chat({
			message,
			preamble:
				"You're an AI that translates text. Your job is to receive a text and respond with the same text but translated into the specified language. You'll only work with two languages: English and Spanish, and you'll perform translations from English to Spanish and from Spanish to English, depending on the incoming message.",
			chatHistory: chatHistoryData,
		});

		return response.text;
	}
}
