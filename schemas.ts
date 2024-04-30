import {z} from "zod";

export const loginUserSchema = z.object({
    email: z.string().email({
        message:'Invalid email',
    }).transform((email:string) => email.toLowerCase()),
    password: z.string({
        invalid_type_error:'Password invalid',
        required_error:'Password is required',
    }).min(6, 'Minimum 6 characters')
})

export const registerUserSchema = z.object({
    email: z.string().email('Email is invalid'),
    firstname: z.string(),
    lastname: z.string(),
    phone: z.string(),
    password: z.string(),
    confirmPassword: z.string()
})

export const createAddressSchema = z.object({
    name: z.string({
        required_error:'Full name is required'
    }),
    street1: z.string(),
    street2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
    phone: z.string(),
    notes: z.string().optional(),
    type: z.string().optional(),
})

export const updateItemSchema = z.object({
    id: z.string(),
    value: z.string(),
    description: z.string()
})
