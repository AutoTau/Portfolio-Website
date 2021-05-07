import useSWR from 'swr';
import { fetcher } from '@/actions';

export const useGetUser = () => {
    const {data, error, ...rest} = useSWR(`/api/v1/posts`, fetcher);
    return {data, error, loading: !data && !error, ...rest};
}  