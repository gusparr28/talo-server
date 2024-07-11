import type { Context } from "hono";
import TranslateService from "../../../application/services/translate.service";
import { CohereClient } from "../../clients/cohere.client";

const iAClient = new CohereClient();
const translateService = new TranslateService(iAClient);

export const translate = async (ctx: Context) => {
	const { message } = await ctx.req.json();

	const translatedMessage = await translateService.translate(message);

	return ctx.json({
		statusCode: 200,
		message: translatedMessage,
	});
};
