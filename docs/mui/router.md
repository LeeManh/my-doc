# Router

Cách sử dụng `Link` react-router-dom với `Button` Mui

Bạn có thể tương tác với các thư viện routing bên thứ 3 với prop `component`.

```ts
import { Link as RouterLink } from "react-router-dom";

//components
import Button from "@mui/material/Button";

//types
import type { ButtonProps } from "@mui/material/Button";

type RouterLinkProps = typeof RouterLink;

type LinkButtonProps = ButtonProps<
  RouterLinkProps,
  { component?: RouterLinkProps }
>;

const LinkButton = (props: LinkButtonProps) => {
  const { to, children, ...rest } = props;

  return (
    <Button
      component={RouterLink}
      to={to}
      size="small"
      variant="outlined"
      {...rest}
    >
      {children}
    </Button>
  );
};
export default LinkButton;
```
