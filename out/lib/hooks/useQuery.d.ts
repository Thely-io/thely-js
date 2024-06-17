import { type PublicConfiguration } from 'swr/_internal';
export declare const useQuery: <T>(key: string | null, config?: Partial<PublicConfiguration<any, any, any>>) => {
    data: T | undefined;
    mutate: import("swr").KeyedMutator<{
        data: T;
    }>;
    isLoading: boolean;
    error: any;
    isValidating: boolean;
};
//# sourceMappingURL=useQuery.d.ts.map