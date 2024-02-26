import React from "react";
import Header from "../UI/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <section className="content-container">{children}</section>
    </>
  );
}
