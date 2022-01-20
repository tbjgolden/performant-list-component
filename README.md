# Instructions

```sh
npm i # yarn
npm run dev # yarn dev
```

# API

```ts
type JSONObject = { [key: string]: JSONValue } | JSONValue[];
type JSONValue = string | number | boolean | JSONObject;

export const PerformantList = <T extends JSONObject, U = number | string>({
  items: {
    uid: U;
    value: T;
  }[];
  renderItem: (item: T, index: number) => JSX.Element;
}) => JSX.Element
```
