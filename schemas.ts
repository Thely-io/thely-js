'use client';
import { z } from 'zod';
import { EAddressType } from './types.ts';

export const loginUserSchema = z.object({
	email: z
		.string()
		.email({
			message: 'Invalid email',
		})
		.transform((email: string) => email.toLowerCase()),
	password: z
		.string({
			invalid_type_error: 'Password invalid',
			required_error: 'Password is required',
		})
		.min(6, 'Minimum 6 characters'),
});

export const registerUserSchema = z.object({
	email: z
		.string()
		.email('Email is invalid')
		.transform((email: string) => email.toLowerCase()),
	firstname: z.string({
		required_error: 'First name is required',
	}),
	lastname: z.string({
		required_error: 'Last name is required',
	}),
	phone: z.string({
		required_error: 'Phone number is required',
	}),
	password: z
		.string({
			required_error: 'Password is required',
		})
		.min(6, 'Minimum 6 characters'),
	confirmPassword: z.string().min(6, 'Minimum 6 characters'),
});

export const createAddressSchema = z.object({
	name: z.string({
		required_error: 'Full name is required',
	}),
	street1: z.string({
		required_error: 'Street is required',
	}),
	street2: z.string().optional(),
	city: z.string({
		required_error: 'City is required',
	}),
	state: z.string({
		required_error: 'State is required',
	}),
	zip: z.string({
		required_error: 'Zip is required',
	}),
	country: z.string({
		required_error: 'Country is required',
	}),
	phone: z.string({
		required_error: 'Phone number is required',
	}),
	notes: z.string().optional(),
	type: z.nativeEnum(EAddressType).optional(),
});

export const updateItemSchema = z.object({
	id: z.string({
		required_error: 'Id is required',
	}),
	value: z.string({
		required_error: 'Value is required',
	}),
	description: z.string({
		required_error: 'Description is required',
	}),
});
