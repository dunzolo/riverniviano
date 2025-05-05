import { Icons } from "../../components/icons";

export interface Children {
  children: React.ReactNode;
}

export interface MetaPagination {
  current_page: number;
  per_page: number;
  total: number;
  last_page?: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Values = Record<string, any>;

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}