import { Context, NextFunction } from 'grammy'

export const onlyAdmin =
  <T extends Context>(errorHandler?: (ctx: T) => unknown) =>
  async (ctx: T, next: NextFunction) => {
    // No chat = no service
    if (!ctx.chat) {
      return
    }
    // Channels and private chats are only postable by admins
    if (['channel', 'private'].includes(ctx.chat.type)) {
      return next()
    }
    // Anonymous users are always admins
    if (ctx.from?.username === 'GroupAnonymousBot') {
      return next()
    }
    // Surely not an admin
    if (!ctx.from?.id) {
      return
    }
    // Check the member status
    const chatMember = await ctx.getChatMember(ctx.from.id)
    if (['creator', 'administrator'].includes(chatMember.status)) {
      return next()
    }
    // Not an admin
    return errorHandler?.(ctx)
  }
