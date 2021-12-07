import { Context, NextFunction } from 'grammy'

export const onlyMenuAuthor =
  <T extends Context>(errorHandler?: (ctx: T) => unknown) =>
  (ctx: T, next: NextFunction) => {
    // Not enough data to check, just pass through
    if (
      !ctx.msg?.reply_to_message?.message_id ||
      !ctx.from?.id ||
      ctx.msg.reply_to_message.message_id === ctx.from.id
    ) {
      return next()
    }
    // Not the creator of the menu
    return errorHandler?.(ctx)
  }
