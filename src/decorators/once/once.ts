export function once (target: any, prop: string, desc: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
  const key = Symbol(prop)
  const descKey = desc.get ? 'get' : 'value'

  const fn = desc.get || desc.value
  const descValue = function () {
    return key in this ? this[key] : (this[key] = fn.apply(this, arguments))
  }

  return Object.assign(desc, {
    [descKey]: descValue,
  })
}
