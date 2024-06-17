import { EUnit } from '../../types.ts';
interface IUseMe {
    stripePublishableKey: string;
    serverTime: string;
    merchant: {
        id: string;
        currency: string;
        unit: EUnit;
    };
    billingAddress: any;
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    merchantId: string;
    phone: string;
    company: string | null;
    auth0Id: string;
    role: string[];
    stripeId: string | null;
    iss: string;
    sub: string;
    aud: string[];
    iat: number;
    exp: number;
    azp: string;
    scope: string;
    gty: string;
    permissions: string[];
    claims: {};
}
export declare const useMe: (disabled?: boolean, strict?: boolean) => {
    me: IUseMe | null | undefined;
    error: any;
    mutate: import("swr").KeyedMutator<{
        data: IUseMe;
    }>;
    isValidating: boolean;
    isLoading: boolean;
};
export {};
//# sourceMappingURL=useMe.d.ts.map