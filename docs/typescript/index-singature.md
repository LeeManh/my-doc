# Index Signatures

Được sử dụng khi không biết tên của tất cả thuộc tính trước, nhưng biết shape của values

Thuộc tính (property) type bắt buộc phải là **string | number**

**Ví dụ**

```ts
// tọa 1 object type có property là number, value là string
interface StringArray {
  [index: number]: string;
}

declare function getStringArray(): StringArray;

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
// const secondItem: string
```
