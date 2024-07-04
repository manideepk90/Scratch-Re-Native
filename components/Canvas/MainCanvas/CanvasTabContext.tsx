import React, { createContext, useContext, useState } from "react";
export const canvasTabContext = createContext({
  active: "preview",
  paths: { preview: "Preview", actions: "Actions" },
  setPath: (path: string) => {},
});

export default function CanvasTabProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState("preview");

  return (
    <canvasTabContext.Provider
      value={{
        active,
        paths: { preview: "Preview", actions: "Actions" },
        setPath: setActive,
      }}
    >
      {children}
    </canvasTabContext.Provider>
  );
}

export const getTabContext = () => useContext(canvasTabContext);
