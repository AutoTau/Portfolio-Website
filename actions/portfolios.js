import axios from "axios";
import useSWR from 'swr';
import { useApiHandler } from '@/actions';
import { fetcher } from '@/actions';

const createPortfolio = (data) => axios.post('/api/v1/portfolios', data, {timeout: 10000});
const updatePortfolio = (id, data) => axios.patch(`/api/v1/portfolios/${id}`, data, {timeout: 10000});

export const useCreatePortfolio = () => useApiHandler(createPortfolio);
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);

export const useGetPortfolio = (id) => {
    const {data, error, ...rest} = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
    return {data, error, loading: !data && !error, ...rest};
}  