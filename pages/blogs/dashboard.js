
import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage";
import withAuth from '@/hoc/withAuth';

const Dashboard = ({user, loading}) => {
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage header="Dashboard">
                <div>Dashboard page</div>
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(Dashboard)('admin');