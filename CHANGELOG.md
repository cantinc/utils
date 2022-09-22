# Changelog

## v1.2

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
