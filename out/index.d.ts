import { type AxiosInstance } from 'axios';
import { z } from 'zod';
import { createAddressSchema, loginUserSchema, registerUserSchema, updateItemSchema } from './schemas';
import { type CreateConsolidationRequest, type CreateShipmentRequest } from './types';
export declare const axiosApiInstance: AxiosInstance;
export declare const saveInternalSessionToken: (data: string) => Promise<void>;
export declare const saveUserSessionToken: (data: string) => Promise<void>;
export declare const loginUser: (data: z.infer<typeof loginUserSchema>) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const registerUser: (data: z.infer<typeof registerUserSchema>) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const createRepack: (id: string) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const createConsolidation: (consolidationReq: CreateConsolidationRequest) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const updateItem: (data: z.infer<typeof updateItemSchema>) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const forgotPassword: (email: string) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const createShipment: (data: CreateShipmentRequest) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const preparePayment: (data: {
    shipmentId: string;
}) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const selectRate: ({ id, rate_id }: {
    id: string;
    rate_id: string;
}) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const createAddress: (data: z.infer<typeof createAddressSchema>) => Promise<import("axios").AxiosResponse<any, any>>;
//# sourceMappingURL=index.d.ts.map