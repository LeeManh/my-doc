# Keyof Type Operator

## Toán tử keyof Type

Toán tử `keyof` nhận 1 type obj và trả về 1 string hoặc union các keys của nó.

```ts
type Point = { x: number; y: number };
type P = keyof Point;
// "x" | "y"
```

Nếu type có `string` hoặc `number` index signature , `keyof` sẽ return những type này. (Tức là sẽ trả về number hoặc string | number)

```ts
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
//hihglight-next-light
// type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
//hihglight-next-light
// type M = string | number
```

**Note**: Ở ví dụ trên , **M là string | number** -- bởi vì các keys của Obj Javascript luôn luôn bị ép buộc chuyển thành `string` , vì thế obj[0] giống như obj["0"].

keyof types đặc biệt hữu ích khi kết hợp với mapped types.
