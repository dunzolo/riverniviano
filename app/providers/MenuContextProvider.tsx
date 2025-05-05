"use client";

import { useParams } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { NavItem } from "../types/types";

interface ContextProps {
  menu_items: NavItem[];
}

const Context = createContext<ContextProps | undefined>(undefined);

export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<NavItem[]>([]);

  const { tournament } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data: NavItem[] = [
        {
          title: "Categorie",
          href: `/${tournament}`,
          icon: "user",
          label: "Categorie",
        },
      ];

      setData(data);
    };

    getData();
  }, [tournament]);

  return (
    <Context.Provider value={{ menu_items: data }}>{children}</Context.Provider>
  );
};

export const useMenuContext = () => {
  const value = useContext(Context);
  if (!value) {
    throw Error(
      "Use menu context can only be used inside a menu context provider"
    );
  }
  return value;
};
