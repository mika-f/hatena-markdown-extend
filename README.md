# Hatena Markdown Extend

Chrome Extension for Hatena Blog.

## Features

This extension append to custom syntax to hatena markdown.

### Syntax Highlighting

> NOTE: If you want to use this feature, you have to append CSS to the current theme.

Add a custom grammar in the markdown comments and incorporate the code-block drawn with the latest syntax highlight into your blog post.  
This feature is powered by Prism.js.

#### Prepare

1st, download your favorite Prism.js theme from [here](https://github.com/PrismJS/prism/tree/master/themes).  
...or also create your own theme.

2nd, add `!important` to all css properties.  
This is because the theme side of Hatena Blog may use `!important`.

#### Syntax

Add the following block into the HTML comment block (<\!-- HERE -->).  
Please note that the extension code block uses two backquotes.

```
``javascript
import colors from "colors.css";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  color: ${props => props.primary ? colors.blue : colors.silver}
`;

export default Button;
``
```

If you want to update syntax highlighting, please re-post your blog post.
