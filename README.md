# Future Value ![version](https://img.shields.io/github/v/tag/gajaguar/future-value?label=version) ![license](https://img.shields.io/github/license/gajaguar/future-value)

> By: [G.A.JAGUAR](https://github.com/gajaguar)

A simple calculator for the future value of an investment.

![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![shell-script](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)

## Build Setup

### Docker

#### Fast setup (only linux os)

```bash
# build docker container and install dependencies.
sh install.sh
```

#### Manual

```bash
# create a docker image
docker-compose build
```

```bash
# install dependencies
docker-compose run --rm server pnpm i
```

```bash
# build for production
docker-compose run --rm server yarn build
```

### Local

```bash
# install dependencies
# pnpm (recommended to save disk space)
pnpm i
# or with yarn
yarn
# or native
npm install
```

```bash
# build for production
pnpm build
```

## Installation

Add to your project with next command:

```bash
# npm
npm install @gajaguar/future-value
# yarn
yarn add @gajaguar/future-value
# or pnpm
pnpn add @gajaguar/future-value
```

## Usage

This package contain a function for each element that intervene in the
calculation of the future value of an investment.

Which are `futureValue`, `presentValue`, `interest` (as effective interest),
`nominalInterest` and `periods`.

Only import the desired function from package:

```js
// require format
const { futureValue } = require('@gajaguar/future-value')

// ES5 import
import { futureValue } from '@gajaguar/future-value'
```

### futureValue

#### Formula

![future-value-formula](https://render.githubusercontent.com/render/math?math=V_{f}=V_{p}\cdot(1%2Bi)^{n}&mode=inline)

Where:

V<sub>f</sub>: Future value

V<sub>p</sub>: Present value

i: Interest rate

n: Number of periods

#### Parameters

| Name           | Type             | Default     | Description                                       |
| -------------- | ---------------- | ----------- | ------------------------------------------------- |
| `presentValue` | number \| string | `undefined` | Current or initial value of the investment.       |
| `interest`     | number \| string | `undefined` | Interest rate of the investment.                  |
| `periods`      | number \| string | `12`        | Number of the investment periods (usually moths). |

### presentValue

#### Formula

![formula-present-value](https://render.githubusercontent.com/render/math?math=V_{p}=\frac{V_{f}}{\left(1%2Bi\right)^{n}}&mode=inline)

Where:

V<sub>p</sub>: Present value

V<sub>f</sub>: Future value

i: Interest rate

n: Number of periods

#### Parameters

| Name          | Type             | Default     | Description                                       |
| ------------- | ---------------- | ----------- | ------------------------------------------------- |
| `futureValue` | number \| string | `undefined` | Investment value after specified periods.         |
| `interest`    | number \| string | `undefined` | Interest rate of the investment.                  |
| `periods`     | number \| string | `12`        | Number of the investment periods (usually moths). |

### interest

#### Formula

![formula-present-value](https://render.githubusercontent.com/render/math?math=i=\sqrt[n]{\frac{V_{f}}{V_{p}}}-1&mode=inline)

Where:

i: Interest rate

V<sub>p</sub>: Present value

V<sub>f</sub>: Future value

n: Number of periods

#### Parameters

| Name           | Type             | Default     | Description                                       |
| -------------- | ---------------- | ----------- | ------------------------------------------------- |
| `presentValue` | number \| string | `undefined` | Current or initial value of the investment.       |
| `futureValue`  | number \| string | `undefined` | Investment value after specified periods.         |
| `periods`      | number \| string | `12`        | Number of the investment periods (usually moths). |

### interest

#### Formula

![formula-present-value](https://render.githubusercontent.com/render/math?math=n=log_{(1%2Bi)}\frac{V_{f}}{V_{p}}&mode=inline)

Where:

n: Number of periods

i: Interest rate

V<sub>p</sub>: Present value

V<sub>f</sub>: Future value

#### Parameters

| Name           | Type             | Default     | Description                                       |
| -------------- | ---------------- | ----------- | ------------------------------------------------- |
| `presentValue` | number \| string | `undefined` | Current or initial value of the investment.       |
| `futureValue`  | number \| string | `undefined` | Investment value after specified periods.         |
| `interest`    | number \| string | `undefined` | Interest rate of the investment.                  |

### nominalInterest

#### Formula

![formula-present-value](https://render.githubusercontent.com/render/math?math=i_{n}=i\cdot%20n&mode=inline)

Where:

i<sub>n</sub>: Nominal interest rate

n: Number of periods

i: Interest rate

#### Parameters

| Name           | Type             | Default     | Description                                       |
| -------------- | ---------------- | ----------- | ------------------------------------------------- |
| `interest`    | number \| string | `undefined` | Interest rate of the investment.                  |
| `periods`      | number \| string | `12`        | Number of the investment periods (usually moths). |
