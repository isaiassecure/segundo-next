"use client"
import React, { useEffect } from "react";

function Test() {
  useEffect(() => {
    console.log("Este código solo se ejecuta en el cliente");

    return () => {};
  }, []);

  return <div>Hola desde el cliente</div>;
}

export default Test;
