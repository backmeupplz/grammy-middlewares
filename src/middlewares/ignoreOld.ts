import { Context, NextFunction } from 'grammy'

export const ignoreOld =
  (threshold = 5 * 60) =>
  (ctx: Context, next: NextFunction) => {
    if (
      ctx.msg?.date &&
      new Date().getTime() / 1000 - ctx.msg.date > threshold
    ) {
      console.log(
        `Ignoring message from user ${ctx.from?.id} at chat ${ctx.chat?.id} (${
          new Date().getTime() / 1000
        }:${ctx.msg.date})`
      )
      return
    }
    return next()
  }
