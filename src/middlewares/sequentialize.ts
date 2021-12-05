import { Context } from 'grammy'
import { sequentialize as baseSequentialize } from '@grammyjs/runner'

function getSessionKey(ctx: Context) {
  return ctx.chat?.id.toString()
}

export const sequentialize = baseSequentialize(getSessionKey)
