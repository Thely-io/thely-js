import { z } from 'zod';
import { EAddressType } from './types.ts';
export declare const loginUserSchema: z.ZodObject<{
    email: z.ZodEffects<z.ZodString, string, string>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const registerUserSchema: z.ZodObject<{
    email: z.ZodEffects<z.ZodString, string, string>;
    firstname: z.ZodString;
    lastname: z.ZodString;
    phone: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    confirmPassword: string;
}, {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    confirmPassword: string;
}>;
export declare const createAddressSchema: z.ZodObject<{
    name: z.ZodString;
    street1: z.ZodString;
    street2: z.ZodOptional<z.ZodString>;
    city: z.ZodString;
    state: z.ZodString;
    zip: z.ZodString;
    country: z.ZodString;
    phone: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof EAddressType>>;
}, "strip", z.ZodTypeAny, {
    phone: string;
    name: string;
    street1: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    type?: EAddressType | undefined;
    street2?: string | undefined;
    notes?: string | undefined;
}, {
    phone: string;
    name: string;
    street1: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    type?: EAddressType | undefined;
    street2?: string | undefined;
    notes?: string | undefined;
}>;
export declare const updateItemSchema: z.ZodObject<{
    id: z.ZodString;
    value: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    id: string;
    description: string;
}, {
    value: string;
    id: string;
    description: string;
}>;
//# sourceMappingURL=schemas.d.ts.map