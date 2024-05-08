import useSWR from "swr";
import { type PublicConfiguration } from "swr/_internal";

// Define SWRConfig in the app root
export const useQuery = <T>(
  key: string | null,
  config?: Partial<PublicConfiguration<any, any, any>>,
) => {
  const { data, mutate, isLoading, error, isValidating } = useSWR<{ data: T }>(
    key ?? null,
    config,
  );
  return { data: data?.data, mutate, isLoading, error, isValidating };
};
