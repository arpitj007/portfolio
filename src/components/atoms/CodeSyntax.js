import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeSyntax({ processData }) {
  const SyntaxFeeder = (dataObject) => {
    return Object.keys(dataObject)
      .map((key) => {
        return `const ${key} = ${JSON.stringify(dataObject[key], null, 2)};`;
      })
      .join("\n");
  };
  return processData.map((dataObject, i) => {
    return (
      <SyntaxHighlighter
        wrapLongLines
        showLineNumbers
        language="javascript"
        style={dracula}
        className="code-snippet"
        key={i}
      >
        {SyntaxFeeder(dataObject)}
      </SyntaxHighlighter>
    );
  });
}

export default CodeSyntax;
