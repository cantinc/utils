import { url } from '.'

describe('url', () => {
  it('error', () => {
    expect(url('123', 'test')).toEqual({
      data: {
        key: 'test',
      },
      error: 'url',
    })
  })
  it('success', () => {
    expect(url('https://cantinc.com', 'test')).toBe(undefined)
  })
})
