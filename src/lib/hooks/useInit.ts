import { useQuery } from './useQuery';

export const useInit = (accountId: string) => {
	const { data, error } = useQuery<string>(`app/init/${accountId}`);
	return {
		data,
		error,
	};
};
