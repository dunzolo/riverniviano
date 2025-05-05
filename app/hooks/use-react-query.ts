import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Values } from "../types/types"; // importa il tipo

export interface TableParams {
  pagination?: { current: number; pageSize: number };
  sort?: string;
  filters?: Record<string, string | number>;
}

/**
 * Costruisce query string per Spatie Query Builder
 */
const buildQueryString = (params?: TableParams) => {
  const query = new URLSearchParams();

  if (params?.pagination) {
    query.append("page", String(params.pagination.current));
    query.append("per_page", String(params.pagination.pageSize));
  }

  if (params?.sort) {
    query.append("sort", params.sort);
  }

  if (params?.filters) {
    Object.entries(params.filters).forEach(([key, value]) => {
      query.append(`filter[${key}]`, String(value));
    });
  }

  return query.toString() ? `?${query.toString()}` : "";
};

/**
 * Hook dinamico per API interne Next.js con React Query
 * - Include gestione filtri dinamici
 * - Espone updateFilters e setParams
 */
export function useReactQuery<T extends Values>(
  endpoint: string,
  initialParams: TableParams = {},
  enabled: boolean = true,
  initialData?: T,
  // options?: Partial<UseQueryOptions<{ data: T | T[] }, Error>>
) {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const [params, setParams] = useState<TableParams>(initialParams);

  const updateFilters = (newFilters: Record<string, string | number>) => {
    setParams((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...newFilters },
    }));
  };

  const queryString = buildQueryString(params);

  const query = useQuery({
    queryKey: [endpoint, params], // Cache chiave dinamica
    queryFn: async (): Promise<{ data: T }> => {
      const res = await fetch(`${baseUrl}/api/${endpoint}${queryString}`, {
        cache: 'no-store', // <-- opzionale, ma non influenza React Query
      });
      if (!res.ok) throw new Error("Errore fetch");
      return res.json();
    },
    staleTime: 15 * 60 * 1000, // 15 minuti cache "valida"
    gcTime: 30 * 60 * 1000, // 30 minuti in memoria
    enabled,
    initialData: initialData ? { data: initialData } : undefined,
    // ...options,
  });

  return {
    ...query,
    tableParams: params,
    setParams,
    updateFilters,
  };
}