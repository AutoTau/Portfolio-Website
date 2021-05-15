import axios from "axios";
import useSWR from 'swr';
import { useApiHandler, fetcher } from 'actions';

const createBlog = data => axios.post('/api/v1/blogs', data, {timeout: 10000});
const updateBlog = (id, data) => axios.patch(`/api/v1/blogs/${id}`, data, {timeout: 10000});

export const useCreateBlog = () => useApiHandler(createBlog);
export const useUpdateBlog = () => useApiHandler(updateBlog);

export const useGetBlog = id => {
    const {data, error, ...rest} = useSWR(id ? `/api/v1/blogs/${id}` : null, fetcher);
    return {data, error, loading: !data && !error, ...rest};
}  