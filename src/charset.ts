namespace charset {
  function range(from: string, to: string) {
    let from_code = from.charCodeAt(0)
    let to_code = to.charCodeAt(0)
    let text = ''
    for (let i = from_code; i <= to_code; i++) {
      let char = String.fromCharCode(i)
      text += char
    }
    return text
  }

  /* 33 symbol is ascii range */
  export let symbols = `!@#$%^&*()_+-={}[]:";'|\\,.<>?/~\` `
  export let digits = range('0', '9')
  export let hex = digits + range('a', 'f')
  export let HEX = digits + range('A', 'F')
  export let a_to_z = range('a', 'z')
  export let A_to_Z = range('A', 'Z')
}

// reference: https://en.wikipedia.org/wiki/List_of_Unicode_characters
export let unicode_charset_size = 149_878

function isBetween(lower: string, char: string, upper: string): boolean {
  return lower <= char && char <= upper
}

function addCharset(possible_chars: Set<string>, charset: string): void {
  for (let char of charset) {
    if (charset.includes(char)) {
      possible_chars.add(char)
    }
  }
}

export function countCharset(text: string): number {
  let has_symbol = false
  let has_digit = false
  let has_a_to_f = false
  let has_A_to_F = false
  let has_g_to_z = false
  let has_G_to_Z = false

  for (let char of text) {
    if (charset.symbols.includes(char)) {
      has_symbol = true
      continue
    }
    if (isBetween('0', char, '9')) {
      has_digit = true
      continue
    }
    if (isBetween('a', char, 'f')) {
      has_a_to_f = true
      continue
    }
    if (isBetween('A', char, 'F')) {
      has_A_to_F = true
      continue
    }
    if (isBetween('g', char, 'z')) {
      has_g_to_z = true
      continue
    }
    if (isBetween('G', char, 'Z')) {
      has_G_to_Z = true
      continue
    }
    // emoji or CJK chars?
    return unicode_charset_size
  }

  let possible_chars = new Set<string>()
  if (has_symbol) {
    addCharset(possible_chars, charset.symbols)
  }
  if (has_digit) {
    addCharset(possible_chars, charset.digits)
  }
  if (has_g_to_z) {
    addCharset(possible_chars, charset.a_to_z)
  }
  if (has_G_to_Z) {
    addCharset(possible_chars, charset.A_to_Z)
  }
  if (has_a_to_f && !has_g_to_z) {
    addCharset(possible_chars, charset.hex)
  }
  if (has_A_to_F && !has_G_to_Z) {
    addCharset(possible_chars, charset.HEX)
  }
  if ((has_A_to_F || has_A_to_F) && (has_g_to_z || has_G_to_Z)) {
    addCharset(possible_chars, charset.a_to_z)
    addCharset(possible_chars, charset.A_to_Z)
  }

  return possible_chars.size
}
