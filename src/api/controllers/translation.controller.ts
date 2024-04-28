import type { Context } from "hono";
import TranslationService from "../../talo/translation/services/impl/TranslationService";

const translationService = new TranslationService();

export const translate = async (ctx: Context) => {
    const body = await ctx.req.json();

    const { message } = body;

    const translatedMessage = await translationService.translate(message);

    return ctx.json({
        statusCode: 200,
        message: translatedMessage,
    });
}
