import { MarkdownExtender } from "./features/MarkdownExtender";

if (window.location.host === "blog.hatena.ne.jp") {
  const editor = new MarkdownExtender("textarea.editor-body-textarea");
  editor.connect();
}
