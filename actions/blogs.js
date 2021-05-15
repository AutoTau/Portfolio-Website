import axios from "axios";
import useSWR from 'swr';
import { useApiHandler, fetcher } from 'actions';

const createBlog = data => axios.post('/api/v1/blogs', data, {timeout: 10000});

export const useCreateBlog = () => useApiHandler(createBlog);