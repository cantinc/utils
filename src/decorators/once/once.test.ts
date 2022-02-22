import { once } from '.'

describe('once', () => {
  it('works with getter', () => {
    let count = 0

    class Test {
      @once
      get test () {
        count++
        return 'success'
      }
    }

    const test = new Test()

    expect(test.test).toBe('success')
    expect(test.test).toBe('success')
    expect(count).toBe(1)
  })
  it('works with method', () => {
    let count = 0

    class Test {
      @once
      test () {
        count++
        return 'success'
      }
    }

    const test = new Test()

    expect(test.test()).toBe('success')
    expect(test.test()).toBe('success')
    expect(count).toBe(1)
  })
})
