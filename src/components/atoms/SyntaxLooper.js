import React from "react";
import CodeSyntax from "./CodeSyntax";

function SyntaxLooper({ currentTabData }) {
  return <CodeSyntax processData={currentTabData} />;
}

export default SyntaxLooper;
