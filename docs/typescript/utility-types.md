---
sidebar_position: 1

title: Utility Types
---

# Utility Types

TypeSript cung cấp 1 vài type có sẵn để tạo điều kiện cho các biến đổi type phổ biến.
Những utilities này có sẵn globally

## <a name="partial" >`Partial<Type>`</a>

Partial có nghĩa là 1 phần. Tạo 1 type với tất cả properties của `Type` đặt về **optional**.

**Example**

```ts
interface Todo {
  title: string;
  description: string;
}

// type fieldsToUpdate = {
//     title?: string;
//     description?: string;
//   }

function handleUpdate(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const oldTodo = {
  title: "organize desk",
  description: "clear clutter",
};

const update = handleUpdate(oldTodo, {
  description: "throw out trash",
});
```

---

## `Required<Type>`

Tạo 1 type bao gồm tất cả properties của `Type` được set về **required**. Đối lập với [Partial](#partial)

**Example**

```ts
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };

//highlight-next-line
Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'
```

---

## `Readonly<Type>`

Tạo 1 type với tất cả properties của `Type` được set về `readonly`, nghĩa là tất cả properties của type không thể được gán lại

**Example**

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";

//highlight-next-line
Cannot assign to 'title' because it is a read-only property.
```

---

## `Record<Keys, Type>`

Tạo 1 object type có các keys là `Keys` và giá trị property là Type.
Cái Utility này có thể được sử dụng để map qua toàn bộ properties của 1 type cho 1 type khác

**Example**

```ts
interface CatInfo {
  age: number;
  breed: string;
}

//các keys được sử dụng
type CatName = "miffy" | "boris" | "mordred";

//new type được tạo ra
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;
//highlight-next-line
//const cats: Record<CatName, CatInfo>;
```

---

## `Pick<Type, Keys>`

Như cái tên của nó Pick 😁. Tạo 1 type bằng cách lấy 1 vài thuộc tính của `Keys` từ `Type` sử dụng

**Example**

```ts
//Type sử dụng
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
// Tạo type mới bằng từ Type Todo và chỉ 'pick' lấy ra thuộc tính title và completed
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

---

## `Omit<Type, Keys>`

Tạo 1 type bằng cánh lấy tất cả thuộc tính từ `Type` sau đó bỏ tất cả thuộc tính `Keys`

**Example**

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
// Lấy tất cả thuộc tính từ Type Todo, sau đó bỏ ra thuộc tính `description`
type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

// Lấy tất cả thuộc tính từ Type Todo, sau đó bỏ ra thuộc tính `completed` và `createdAt`
type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
```

---

## `ReturnType<Type>`

Tạo 1 type bao gồm type được trả về của function `Type`

**Example**

```ts
function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
// type T0 = string

type T1 = ReturnType<(s: string) => void>;
// type T1 = void

type T2 = ReturnType<<T>() => T>;
// type T2 = unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T3 = number[]

type T4 = ReturnType<typeof f1>;
// type T4 = {
//     a: number;
//     b: string;
// }

type T5 = ReturnType<any>;
// type T5 = any

type T6 = ReturnType<never>;
// type T6 = never

type T7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T7 = any

type T8 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
// type T8 = any
```
