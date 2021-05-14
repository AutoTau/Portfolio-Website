import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useUser } from '@auth0/nextjs-auth0';
import withAuth from '@/hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio, useUpdatePortfolio } from '@/actions/portfolios';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';
import { toast, ToastContainer } from 'react-toastify';


const PortfolioEdit = () => {
    const { user, error: errorU, loading: loadingU } = useUser();
    const router = useRouter();
    const [updatePortfolio, { error }] = useUpdatePortfolio();
    const { data: initialData } = useGetPortfolio(router.query.id);

    const _updatePortfolio = async (data) => {
        try {
            await updatePortfolio(router.query.id, data);
            toast.success('🦄 Portfolio has been updated!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (e) {
            toast.error(`Error updating portfolio: ${e}`, {
                position: "top-right",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <BaseLayout user={user} loading={loadingU}>
            <BasePage header="Portfolio Edit">
                <Row>
                    <Col md="8">
                        {initialData &&
                            <PortfolioForm
                                onSubmit={_updatePortfolio}
                                initialData={initialData}
                            />
                        }
                        {errorU && <div className="alert alert-danger mt-2">{error}</div>}
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(PortfolioEdit)('admin');