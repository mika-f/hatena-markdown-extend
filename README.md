# Refined Hatena Blog

Chrome Extension for Hatena Blog.

> NOTE: This is an experimental project. Please use it at your own risk.

## Features

This extension implements some improvements to Hatena Blog.

### Syntax Highlighting

> NOTE: If you want to use this feature, you have to append CSS to the current theme.

Add a custom grammar in the markdown comments and incorporate the code-block drawn with the latest syntax highlight into your blog post.  
This feature is powered by Prism.js.

#### Preparation

1st, download your favorite Prism.js theme from [here](https://github.com/PrismJS/prism/tree/master/themes).  
...or also create your own theme.

2nd, add `!important` to all css properties.  
This is because the theme side of Hatena Blog may use `!important`.

#### Syntax

Add the your source code into the custom HTML comment block.  
First line of comment block must start `codegen:language` for using this feature.

```html
<!-- codegen:typescript
export type ExtractProps<T> =
  T extends StyledComponent<any, any, infer R, never> ? R
  : unknown;
-->
```

This comment block is generated below content:

```html
<!-- AUTO_GENERATED_START -->
<!-- DO NOT EDIT BELOW CONTENTS DIRECTLY (REPLACED WHEN UPDATED CONTENT) -->
<pre class="language-typescript "><code class="language-typescript"><span class="token keyword">export</span> <span class="token keyword">type</span> ExtractProps<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">StyledComponent</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token punctuation">,</span> infer <span class="token constant">R</span><span class="token punctuation">,</span> <span class="token builtin">never</span><span class="token operator">></span> <span class="token operator">?</span> <span class="token constant">R</span>
  <span class="token punctuation">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span></code></pre>
<!-- AUTO_GENERATED_END -->
```

If you want to update syntax highlighting after posted, please re-post your blog post.  
See [this article](https://mikazuki.hatenablog.jp/entry/2019/09/15/153533) for how it was actually generated.
