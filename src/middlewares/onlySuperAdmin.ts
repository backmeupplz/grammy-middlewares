import { Context, NextFunction } from 'grammy'

export const onlySuperAdmin =
  (superAdminId: number) => (ctx: Context, next: NextFunction) => {
    if (ctx.from?.id !== superAdminId) {
      return
    }
    return next()
  }
