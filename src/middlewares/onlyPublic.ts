import { Context, NextFunction } from 'grammy'

export const onlyPublic =
  <T extends Context>(errorHandler?: (ctx: T) => unknown) =>
  (ctx: T, next: NextFunction) => {
    if (ctx.chat?.type !== 'private') {
      return next()
    }
    return errorHandler?.(ctx)
  }
