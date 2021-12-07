import { Context, NextFunction } from 'grammy'

export const onlySuperAdmin =
  <T extends Context>(superAdminId: number) =>
  (ctx: T, next: NextFunction) => {
    if (ctx.from?.id !== superAdminId) {
      return
    }
    return next()
  }
