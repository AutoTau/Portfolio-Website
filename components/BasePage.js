import { Container } from "reactstrap";
import Head from 'next/head';
import { useRouter } from 'next/router';

const BasePage = (props) => {
    const router = useRouter();
    const {
        indexPage,
        className = "",
        header,
        title = 'Portfolio - Benjamin Portis',
        children,
        metaDescription = "My name is Ben Portis and I am an experienced software engineer. Throughout my career I have strived to build scalable applications with a minimalistic aesthetic. User experience is always a top priority, and provides a solid foundation to all of my software."
    } = props;
    const pageType = indexPage ? 'index-page' : 'base-page'
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" key="description" content={`${metaDescription}`} />
                <meta name="title" key="title" content={`${title}`} />
                <meta property="og:title" key="og:title" content={title} />
                <meta property="og:locale" key="og:locale" content="en_US" />
                <meta property="og:url" key="og:url" content={`${process.env.BASE_URL}${router.asPath}`} />
                <meta property="og:type" key="og:type" content="website" />
                <meta property="og:description" key="og:description" content={metaDescription} />
                <meta property="og:image" key="og:image" content={`${process.env.BASE_URL}/images/section-1.png`} />
            </Head>
            <div className={`${pageType} ${className}`}>
                <Container>
                    {header &&
                        <div className="page-header">
                            <h1 className="page-header-title">{header}</h1>
                        </div>
                    }
                    {children}
                </Container>
            </div>
        </>
    )
}

export default BasePage