export function errorsToString (errors: any) {
  const msg = Object.keys(errors.messages).map(e => e)
  // const messages = [...errors.messages]
  // console.log(messages)
  return msg.join(', ')
}
