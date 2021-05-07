import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from '@/actions/user';

const Cv = () => {
      const { data, loading } = useGetUser();
    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <div>I am the CV page</div>
            </BasePage>
        </BaseLayout>
    )
}
export default Cv