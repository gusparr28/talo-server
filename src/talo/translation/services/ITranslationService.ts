export default interface ITranslationService {
	translate(message: string): Promise<void>;
}
