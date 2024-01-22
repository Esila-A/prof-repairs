import { createContext, useState } from "react";

// based on https://stackoverflow.com/a/69675545

export const HeaderIsOpenContext = createContext(null);

export function HeaderIsOpenContextProvider(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderIsOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </HeaderIsOpenContext.Provider>
  );
}
