import { email, inn, maxLength, minLength, phone, required, validation, ValidationErrors, ValidationMap } from '..'

describe('validation', () => {
  describe('any', () => {
    describe('required', () => {
      it('should return error', async () => {
        const map: ValidationMap<{test1?: number, test2?: string}> = {
          test1: [required],
          test2: [required],
        }

        expect(await validation(map, {})).toEqual({
          error: ValidationErrors.required,
          data: {
            key: 'test1',
          },
        })

        expect(await validation(map, { test2: 'test2' })).toEqual({
          error: ValidationErrors.required,
          data: {
            key: 'test1',
          },
        })

        expect(await validation(map, { test1: 123 })).toEqual({
          error: ValidationErrors.required,
          data: {
            key: 'test2',
          },
        })
      })
      it('should return undefined', async () => {
        const map: ValidationMap<{test1?: number, test2?: string}> = {
          test1: [required],
          test2: [required],
        }

        expect(await validation(map, { test1: 1, test2: '2' })).toBe(undefined)

        expect(await validation(map, { test1: 0, test2: '2' })).toBe(undefined)

        expect(await validation(map, { test1: 0, test2: '' })).toEqual({
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
      it('should skip empty', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [email],
        }

        expect(await validation(map, {})).toBe(undefined)
      })
      it('should return error', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [email],
        }

        expect(await validation(map, { test: '123' })).toEqual({
          error: ValidationErrors.email,
          data: {
            key: 'test',
          },
        })

        expect(await validation(map, { test: 'test.ru' })).toEqual({
          error: ValidationErrors.email,
          data: {
            key: 'test',
          },
        })

        expect(await validation(map, { test: 'test@asd.123' })).toEqual({
          error: ValidationErrors.email,
          data: {
            key: 'test',
          },
        })
      })
      it('should return undefined', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [email],
        }

        expect(await validation(map, { test: 'd8@cantinc.com' })).toBe(undefined)
      })
    })
    describe('inn', () => {
      it('should skip empty', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [inn],
        }

        expect(await validation(map, {})).toBe(undefined)
      })
      it('should return error', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [inn],
        }

        expect(await validation(map, { test: '123' })).toEqual({
          error: ValidationErrors.inn,
          data: {
            key: 'test',
            length: 10,
          },
        })

        expect(await validation(map, { test: '6732213993' })).toEqual({
          error: ValidationErrors.inn,
          data: {
            key: 'test',
          },
        })
      })
      it('should return undefined', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [inn],
        }

        expect(await validation(map, { test: '6732213992' })).toBe(undefined)
      })
    })
    describe('phone', () => {
      it('should skip empty', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [phone],
        }

        expect(await validation(map, {})).toBe(undefined)
      })
      it('should return error', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [phone],
        }

        expect(await validation(map, { test: '123' })).toEqual({
          error: ValidationErrors.phone,
          data: {
            key: 'test',
          },
        })

        expect(await validation(map, { test: '+7 (123) 123-12-34' })).toEqual({
          error: ValidationErrors.phone,
          data: {
            key: 'test',
          },
        })
      })
      it('should return undefined', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [phone],
        }

        expect(await validation(map, { test: '+7 (999) 123-12-34' })).toBe(undefined)
      })
    })
    describe('minLength', () => {
      it('should skip empty', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [minLength(3)],
        }

        expect(await validation(map, {})).toBe(undefined)
      })
      it('should return error', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [minLength(3)],
        }

        expect(await validation(map, { test: 'a' })).toEqual({
          error: ValidationErrors.minLength,
          data: {
            key: 'test',
            min: 3,
          },
        })

        expect(await validation(map, { test: 'ab' })).toEqual({
          error: ValidationErrors.minLength,
          data: {
            key: 'test',
            min: 3,
          },
        })
      })
      it('should return undefined', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [minLength(3)],
        }

        expect(await validation(map, { test: 'abc' })).toBe(undefined)
      })
    })
    describe('maxLength', () => {
      it('should skip empty', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [maxLength(3)],
        }

        expect(await validation(map, {})).toBe(undefined)
      })
      it('should return error', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [maxLength(3)],
        }

        expect(await validation(map, { test: '1234' })).toEqual({
          error: ValidationErrors.maxLength,
          data: {
            key: 'test',
            max: 3,
          },
        })
      })
      it('should return undefined', async () => {
        const map: ValidationMap<{test?: string}> = {
          test: [maxLength(3)],
        }

        expect(await validation(map, { test: 'abc' })).toBe(undefined)
      })
    })
  })
})
