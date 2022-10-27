import React from "react";

export default function Helmet({ title, children }) {
  document.title = "Food ordering app -" + title;
  return <div className="w-100">{children}</div>;
}
