# Mapped Types

Được sử dụng khi tạo type dựa trên 1 type khác.

- Mapped Types được xây dựng trên cấu trúc của index signatures,

**Ví dụ**

```ts
type Horse = {};
// tạo 1 object type có property là string, value là boolean | Horse type
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

- A mapped type là 1 generic type , sử dụng union type của `ProppertyKeys` (thường được tạo thông qua keyof opearator) lặp qua các keys để tạo type

**Ví dụ**

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

//highlight-start
// type FeatureOptions = {
//     darkMode: boolean;
//     newUserProfile: boolean;
// }
//highlight-end
```
