# Set of useful middlewares for [grammY](https://grammy.dev/)

Feel free to contribute your middlewares to this repository.

## Installation

`yarn add grammy-middlewares`, duh.

## Usage

All the middleware accessors are factories, even though not all of them have to be. I decided to make API homogeneous.

Some of the factories consume optional or required parameters.

```typescript
import {
  ignoreOld,
  onlyAdmin,
  onlyPublic,
  onlySuperAdmin,
  sequentialize,
} from 'grammy-middlewares'

<...>

bot.use(
  ignoreOld(),
  onlyAdmin(ctx => ctx.reply(
    'Only admins can do this'
  )),
  onlyPublic(ctx => ctx.reply(
    'You can only use public chats'
  )),
  onlySuperAdmin(env.SUPER_ADMIN_ID),
  sequentialize()
)
```

## Middlewares

### `ignoreOld`

Ignores old updates, useful when bot has been down for a while. You can optionaly specify the timeout in seconds which defaults to `5 * 60`.

### `onlyAdmin`

Checks if the user is an admin. You can optionally specify `errorHandler` that is called with the context if the user is not an admin.

### `onlyPublic`

Checks if it is a group chat or a channel. You can optionally specify `errorHandler` that is called with the context if it is not a group chat or a channel.

### `onlySuperAdmin`

Checks if the user is a super admin. You have to provide the super admin id.

### `sequentialize`

The basic [sequentialize](https://grammy.dev/advanced/scaling.html#concurrency-is-hard) middleware that takes the chat id as a sequential identifier.

## Development

1. Clone this repo: `git clone https://github.com/backmeupplz/grammy-middlewares`
2. Run `yarn` in the root folder

And you should be good to go! Feel free to fork and submit pull requests. Thanks!

## License

MIT — use for any purpose. Would be great if you could leave a note about the original developers. Thanks!
