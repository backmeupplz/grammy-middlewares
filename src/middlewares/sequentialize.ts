import { Context } from 'grammy'
import { sequentialize as baseSequentialize } from '@grammyjs/runner'

const getSessionKey = <T extends Context>(ctx: T) => {
  return ctx.chat?.id.toString()
}

export const sequentialize = <T extends Context>() =>
  baseSequentialize<T>(getSessionKey)
