import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';

const Cv = () => {
      const { user, error, loading } = useUser();
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <div>I am the CV page</div>
            </BasePage>
        </BaseLayout>
    )
}
export default Cv