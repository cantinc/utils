import {
  email,
  inn,
  maxLength,
  minLength,
  optional,
  phone,
  required,
  url,
  validation,
  ValidationErrors,
  ValidationMap,
} from '..'

describe('validation', () => {
  describe('any', () => {
    describe('required', () => {
      it('should return error', () => {
        const map: ValidationMap<{test1: number, test2: string}> = {
          test1: required(),
          test2: required(),
        }

        // @ts-ignore
        expect(validation(map, {})).toEqual({
          error: ValidationErrors.required,
          data: {
            key: 'test1',
          },
        })
        // @ts-ignore
        expect(validation(map, { test2: 'test2' })).toEqual({
          error: ValidationErrors.required,
          data: {
            key: 'test1',
          },
        })
        // @ts-ignore
        expect(validation(map, { test1: 123 })).toEqual({
          error: ValidationErrors.required,
          data: {
            key: 'test2',
          },
        })
      })
      it('should return undefined', () => {
        const map: ValidationMap<{test1: number, test2: string}> = {
          test1: required(),
          test2: required(),
        }

        expect(validation(map, { test1: 1, test2: '2' })).toBe(undefined)

        expect(validation(map, { test1: 0, test2: '2' })).toBe(undefined)

        expect(validation(map, { test1: 0, test2: '' })).toEqual({
          error: ValidationErrors.required,
          data: {
            key: 'test2',
          },
        })
      })
    })
  })
  describe('string', () => {
    describe('email', () => {
      it('should skip empty', () => {
        const map: ValidationMap<{test?: string}> = {
          test: optional([email]),
        }

        expect(validation(map, {})).toBe(undefined)
      })
      it('should return error', () => {
        const map: ValidationMap<{test: string}> = {
          test: [email],
        }

        expect(validation(map, { test: '123' })).toEqual({
          error: ValidationErrors.email,
          data: {
            key: 'test',
          },
        })

        expect(validation(map, { test: 'test.ru' })).toEqual({
          error: ValidationErrors.email,
          data: {
            key: 'test',
          },
        })

        expect(validation(map, { test: 'test@asd.123' })).toEqual({
          error: ValidationErrors.email,
          data: {
            key: 'test',
          },
        })
      })
      it('should return undefined', () => {
        const map: ValidationMap<{test: string}> = {
          test: [email],
        }

        expect(validation(map, { test: 'd8@cantinc.com' })).toBe(undefined)
      })
    })
    describe('inn', () => {
      it('should skip empty', () => {
        const map: ValidationMap<{test?: string}> = {
          test: optional([inn]),
        }

        expect(validation(map, {})).toBe(undefined)
      })
      it('should return error', () => {
        const map: ValidationMap<{test: string}> = {
          test: [inn],
        }

        expect(validation(map, { test: '123' })).toEqual({
          error: ValidationErrors.innLength,
          data: {
            key: 'test',
          },
        })

        expect(validation(map, { test: '6732213993' })).toEqual({
          error: ValidationErrors.inn,
          data: {
            key: 'test',
          },
        })

        expect(validation(map, { test: 'asdasda' })).toEqual({
          error: ValidationErrors.innNumber,
          data: {
            key: 'test',
          },
        })
      })
      it('should return success', () => {
        const map: ValidationMap<{test: string}> = {
          test: [inn],
        }

        expect(validation(map, { test: '7704340310' })).toEqual(undefined)
      })
      it('should return undefined', () => {
        const map: ValidationMap<{test: string}> = {
          test: [inn],
        }

        expect(validation(map, { test: '6732213992' })).toBe(undefined)
      })
      it('should work with 12 symbols', () => {
        const map: ValidationMap<{test: string}> = {
          test: [inn],
        }

        expect(validation(map, { test: '671501505502' })).toBe(undefined)
      })
    })
    describe('phone', () => {
      it('should skip empty', () => {
        const map: ValidationMap<{test?: string}> = {
          test: optional([phone]),
        }

        expect(validation(map, {})).toBe(undefined)
      })
      it('should return error', () => {
        const map: ValidationMap<{test: string}> = {
          test: [phone],
        }

        expect(validation(map, { test: '123' })).toEqual({
          error: ValidationErrors.phone,
          data: {
            key: 'test',
          },
        })
      })
      it('should return undefined', () => {
        const map: ValidationMap<{test: string}> = {
          test: [phone],
        }

        expect(validation(map, { test: '+7 (999) 123-12-34' })).toBe(undefined)
        expect(validation(map, { test: '+7 (481) 266-66-66' })).toBe(undefined)
      })
    })
    describe('minLength', () => {
      it('should skip empty', () => {
        const map: ValidationMap<{test?: string}> = {
          test: optional([minLength(3)]),
        }

        expect(validation(map, {})).toBe(undefined)
      })
      it('should return error', () => {
        const map: ValidationMap<{test: string}> = {
          test: [minLength(3)],
        }

        expect(validation(map, { test: 'a' })).toEqual({
          error: ValidationErrors.minLength,
          data: {
            key: 'test',
            min: 3,
          },
        })

        expect(validation(map, { test: 'ab' })).toEqual({
          error: ValidationErrors.minLength,
          data: {
            key: 'test',
            min: 3,
          },
        })
      })
      it('should return undefined', () => {
        const map: ValidationMap<{test: string}> = {
          test: [minLength(3)],
        }

        expect(validation(map, { test: 'abc' })).toBe(undefined)
      })
    })
    describe('maxLength', () => {
      it('should skip empty', () => {
        const map: ValidationMap<{test?: string}> = {
          test: optional([maxLength(3)]),
        }

        expect(validation(map, {})).toBe(undefined)
      })
      it('should return error', () => {
        const map: ValidationMap<{test: string}> = {
          test: [maxLength(3)],
        }

        expect(validation(map, { test: '1234' })).toEqual({
          error: ValidationErrors.maxLength,
          data: {
            key: 'test',
            max: 3,
          },
        })
      })
      it('should return undefined', () => {
        const map: ValidationMap<{test: string}> = {
          test: [maxLength(3)],
        }

        expect(validation(map, { test: 'abc' })).toBe(undefined)
      })
    })
    describe('url', () => {
      it('should skip empty', () => {
        const map: ValidationMap<{test?: string}> = {
          test: optional([url]),
        }

        expect(validation(map, {})).toBe(undefined)
      })
      it('should return error', () => {
        const map: ValidationMap<{test: string}> = {
          test: [url],
        }

        expect(validation(map, { test: '1234' })).toEqual({
          error: ValidationErrors.url,
          data: {
            key: 'test',
          },
        })

        expect(validation(map, { test: 'cantinc.com' })).toEqual({
          error: ValidationErrors.url,
          data: {
            key: 'test',
          },
        })
      })
      it('should return undefined', () => {
        const map: ValidationMap<{test: string}> = {
          test: [url],
        }

        expect(validation(map, { test: 'https://cantinc.com' })).toBe(undefined)
      })
    })
  })
})
