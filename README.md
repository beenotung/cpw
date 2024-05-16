# cpw

Calculate the password entropy, difficulty level (number of alternative combinations), and estimate time needed to crack the password.

Hosted on [cpw.surge.sh](https://cpw.surge.sh)

## Typescript Signature

```typescript
export function cpw(
  text: string,
  options?: {
    tickPerSecond?: number
  },
): CPWResult

export type CPWResult = {
  /** @description number of attempt per second to estimate time to crack the password */
  tickPerSecond: number
  /** @description number of possible characters, e.g. 10 for digits, 26 for lower case alphabets */
  setSize: number
  /** @description length of password */
  length: number
  /** @description number of possible combinations, i.e. setSize^length */
  difficulty: number
  /** @description number of bits, i.e. log(difficulty) / log(2) */
  entropy: number
  /** @description estimated number of seconds to crack the password */
  seconds: number
  /** @description estimated time to crack the password in human readable format, e.g. "12 Hours" */
  durationText: string
}
```

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
