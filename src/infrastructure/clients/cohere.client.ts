import { CohereClient as Client } from "cohere-ai";
import type { ChatMessage } from "cohere-ai/api";
import path from "node:path";
import type { IAIClient } from "./interfaces/aI.client.interface";

export class CohereClient implements IAIClient {
	private cohereClient: Client;

	private token: string;

	constructor() {
		this.token = Bun.env.TALO_API_KEY || "";
		if (!this.token) {
			throw new Error("TALO_API_KEY is not defined");
		}
		this.cohereClient = new Client({
			token: this.token,
		});
	}

	public async translate(message: string): Promise<string> {
		const pathToChatHistory = path.resolve(__dirname, "./metadata/chatHistory.json");
		const chatHistoryFile = Bun.file(pathToChatHistory, { type: "application/json" });
		const chatHistoryData: ChatMessage[] = await chatHistoryFile.json();

		const { text } = await this.cohereClient.chat({
			message,
			preamble:
				"You're an AI that translates text. Your job is to receive a text and respond with the same text but translated into the specified language. You'll only work with two languages: English and Spanish, and you'll perform translations from English to Spanish and from Spanish to English, depending on the incoming message.",
			chatHistory: chatHistoryData,
		});

		return text;
	}
}
