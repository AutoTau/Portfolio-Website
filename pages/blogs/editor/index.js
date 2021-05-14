
import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage";
import withAuth from '@/hoc/withAuth';

const BlogEditor = ({user, loading}) => {
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage header="Blog Editor">
                <div>Blog Editor page</div>
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(BlogEditor)('admin');