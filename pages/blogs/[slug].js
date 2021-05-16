
import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';

const BlogDetail = () => {
    const { user, error, loading } = useUser();
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <div>I am the Blog Detail Page</div>
            </BasePage>
        </BaseLayout>
    )
}
export default BlogDetail;