# Button Group

Component Button Group được sử dụng đế nhóm các button có liên quan với nhau.

## Basic button group

![!](/img/group-btn.png)

```ts
//highlight-next-line
<ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

## Button variants

Tất cả biến thể (variants) của button đều được hỗ trợ.

![!](/img/group-btn-variants.png)

```ts
export default function VariantButtonGroup() {
  return (
    <Box>
      //highlight-next-line
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      //highlight-next-line
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  );
}
```

## Sizes and colors

Props size và color có thể được sử dụng

![!](/img/group-btn-size-colors.png)

```ts
const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export default function GroupSizesColors() {
  return (
    <Box>
      //highlight-next-line
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
      //highlight-next-line
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
      //highlight-next-line
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
```

## Vertical group

Group Button có thể được hiển thị theo chiều dọc sử dụng prop `orientation`

```ts
//highlight-next-line
<ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
  <Button key="one">One</Button>
  <Button key="two">Two</Button>
  <Button key="three">Three</Button>
</ButtonGroup>
```
