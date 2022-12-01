# Changelog

## v1.3

### v1.3.1 [![02.12.2022](https://img.shields.io/date/1669934999)](https://github.com/cantinc/utils/tree/v1.3.1)

- fix import bug

### v1.3.0 [![10.11.2022](https://img.shields.io/date/1668601148)](https://github.com/cantinc/utils/tree/v1.3.0)

- improve environment
- add empty string in `optional`

## v1.2

### v1.2.7 [![10.11.2022](https://img.shields.io/date/1668103252)](https://github.com/cantinc/utils/tree/v1.2.7)

- add `placeholder` util

### v1.2.6 [![27.09.2022](https://img.shields.io/date/1667742730)](https://github.com/cantinc/utils/tree/v1.2.6)

- fix `phone` validator

### v1.2.5 [![27.09.2022](https://img.shields.io/date/1667741272)](https://github.com/cantinc/utils/tree/v1.2.5)

- fix `inn` validator

### v1.2.4 [![27.09.2022](https://img.shields.io/date/1664284937)](https://github.com/cantinc/utils/tree/v1.2.4)

- improve `url` validator

### v1.2.3 [![27.09.2022](https://img.shields.io/date/1664283999)](https://github.com/cantinc/utils/tree/v1.2.3)

- add `url` validator

### v1.2.1 [![27.09.2022](https://img.shields.io/date/1664270349)](https://github.com/cantinc/utils/tree/v1.2.1)

- improve types
- change `ValidationErrors` enum values

### v1.2.0 [![22.09.2022](https://img.shields.io/date/1663875454)](https://github.com/cantinc/utils/tree/v1.2.0)

- add `optional` validator
- refactor validation

##### migration

Change any `required` validator usage

before

```typescript
export const validator: ValidationMap<Body> = {
  email: [required, email],
  phone: [required, phone],
  inn: [required, inn],
  name: [required],
}
```

after

```typescript
export const validator: ValidationMap<Body> = {
  email: required([email]),
  phone: required([phone]),
  inn: required([inn]),
  name: required(),
}
```

## v1.1

### v1.1.3 [![16.09.2022](https://img.shields.io/date/1663319502)](https://github.com/cantinc/utils/tree/v1.1.3)

- improve `reg` validator

### v1.1.2 [![16.09.2022](https://img.shields.io/date/1663319084)](https://github.com/cantinc/utils/tree/v1.1.2)

- add `reg` validator

### v1.1.1 [![10.09.2022](https://img.shields.io/date/1662823652)](https://github.com/cantinc/utils/tree/v1.1.1)

- fix inn validation

### v1.1.0 [![31.08.2022](https://img.shields.io/date/1661952279)](https://github.com/cantinc/utils/tree/v1.1.0)

- add validation

## v1.0

### v1.0.1 [![27.02.2022](https://img.shields.io/date/1645962828)](https://github.com/cantinc/utils/tree/v1.0.1)

- fix `once` bug

### v1.0.0 [![22.02.2022](https://img.shields.io/date/1645534218)](https://github.com/cantinc/utils/tree/v1.0.0)

- first implementation
