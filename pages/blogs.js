
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from '@/actions/user';

const Blogs = () => {
    const { data, loading } = useGetUser();
    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <div>I am the Blogs page</div>
            </BasePage>
        </BaseLayout>
    )
}

export default Blogs