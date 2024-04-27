export default interface ICohereClient {
	processMessageTranslation(message: string): Promise<string>;
}
