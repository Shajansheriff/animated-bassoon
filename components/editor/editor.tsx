import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { AutoFocusPlugin } from "./plugins/AutoFocusPlugin";

function Placeholder() {
  return <div className="editor-placeholder">Enter some plain text...</div>;
}

export default function CustomEditor() {
  return (
    <LexicalComposer
      initialConfig={{ namespace: "CustomEditor", onError: console.error }}
    >
      <PlainTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<Placeholder />}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <AutoFocusPlugin />
    </LexicalComposer>
  );
}
