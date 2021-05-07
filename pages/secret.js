
import BaseLayout from "@/components/layouts/BaseLayout"
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';
import Redirect from '@/components/shared/Redirect';

const Secret = () => {
    const { user, error, loading } = useUser();

    if (loading) {
        return <p>Loading...</p>
    }

    if (!user) {
        return <Redirect to="/api/auth/login" />
    } else {
        return (
            <BaseLayout user={user} loading={loading}>
                <BasePage>
                    <h1>I am the Secret page</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Secret;