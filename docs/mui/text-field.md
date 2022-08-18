---
title: Text field
---

Text fields cho phép người dụng nhập vào text và sửa nó ✨

## Basic TextField

Component bao bọc `TextFiled` là 1 form control đầy đủ bao gồm 1 **label , input, and help text**.

Có 3 biến thể (variants) : outlined (default), filled, and standard.

![!](/img/textfiled-basic.png)

```ts
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
```

## Form props

Các thuộc tính form được hỗ trợ `required`, `disable`, `type` , `helperText`
