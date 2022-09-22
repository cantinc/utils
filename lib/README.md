<a href="https://github.com/cantinc">
  <img align="left" width="90" height="90" alt="CANT.store" src="https://raw.githubusercontent.com/cantinc/logger/v1.0.6/img/cant.store.png">
</a>

# &nbsp;utils

&nbsp;

[![NPM](https://img.shields.io/npm/v/@cantinc/utils.svg)](https://www.npmjs.com/package/@cantinc/utils)
[![downloads](https://img.shields.io/npm/dm/@cantinc/utils.svg)](https://www.npmtrends.com/@cantinc/utils)
[![changelog](https://img.shields.io/badge/Changelog-⋮-brightgreen)](https://changelogs.xyz/@cantinc/utils)
[![license](https://img.shields.io/npm/l/@cantinc/utils)](https://github.com/cantinc/utils/blob/main/LICENSE)

## Abstract
Here you can find some utils of CANT inc.

[![stars](https://img.shields.io/github/stars/cantinc/utils?style=social)](https://github.com/cantinc/utils/stargazers)
[![watchers](https://img.shields.io/github/watchers/cantinc/utils?style=social)](https://github.com/cantinc/utils/watchers)

## Install
npm
```bash
npm i @cantinc/utils
```
yarn
```bash
yarn add @cantinc/utils
```

## Decorators
Now it supports old way of decorators, to use it with TypeScript flag `experimentalDecorators`

### once
Run getter or method once

```typescript
import { once } from '@cantinc/utils'

let count = 0

class Test {
  @once
  get value () {
    count++
    return 'success'
  }
}

const test = new Test()

console.log(test.value)
// 'success'

console.log(test.value)
// 'success'

console.log(count)
// 1
```

## Validation

The next utils helps validate a data

### Validation

Use `validation` to make validation of an object

```typescript jsx
import {
  email,
  maxLength,
  minLength,
  required,
  validation,
  ValidationMap,
} from '@cantinc/utils'

interface Data {
  email: string
  password: string
  name: string
  birthday?: string
}

const validationMap: ValidationMap<Data> = {
  email: required([email, maxLength(128)]),
  password: required([minLength(9)]),
  name: required([maxLength(128)]),
}

console.log(validation(validationMap, {}))
console.log(validation(validationMap, { email: 'error'}))
```

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-utils/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-utils)](https://github.com/d8corp/innet-utils/issues)
