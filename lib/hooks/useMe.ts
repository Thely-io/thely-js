import { useQuery } from './useQuery.ts';
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

export const useMe = (disabled = false, strict = false) => {
	const { data, error, mutate, isValidating, isLoading } = useQuery<IUseMe>(
		disabled ? null : 'customer/me',
		{
			revalidateOnFocus: true,
		},
	);

	return { me: error ? null : data, error, mutate, isValidating, isLoading };
};
