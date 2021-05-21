import Head from 'next/head';
import React from "react";
import { useRouter } from 'next/router';
import { Container } from "reactstrap";


const PageHeader = ({ header }) =>
    <div className="page-header">
        <h1 className="page-header-title">{header}</h1>
    </div>


const BasePage = (props) => {
    const router = useRouter();
    const {
        noWrapper,
        indexPage,
        className = "",
        header,
        title = 'Portfolio - Benjamin Portis',
        children,
        canonicalPath,
        metaDescription = "My name is Ben Portis and I am an experienced software engineer. Throughout my career I have strived to build scalable applications with a minimalistic aesthetic. User experience is always a top priority, and provides a solid foundation to all of my software."
    } = props;

    const pageType = indexPage ? 'index-page' : 'base-page';
    const Wrapper = noWrapper ? React.Fragment : Container;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" key="description" content={`${metaDescription}`} />
                <meta name="title" key="title" content={`${title}`} />
                <meta property="og:title" key="og:title" content={title} />
                <meta property="og:locale" key="og:locale" content="en_US" />
                <meta property="og:url" key="og:url" content={`${process.env.BASE_URL}${router.asPath}`} />
                <meta property="og:type" key="og:type" content="website" />
                <meta property="og:description" key="og:description" content={metaDescription} />
                <meta property="og:image" key="og:image" content={`${process.env.BASE_URL}/images/section-1.png`} />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
                <link rel="canonical" href={`${process.env.BASE_URL}${canonicalPath ? canonicalPath : router.asPath}`} />
            </Head>
            <div className={`${pageType} ${className}`}>
                <Wrapper>
                    {header && <PageHeader header={header} />}
                    {children}
                </Wrapper>
            </div>
        </>
    )
}

export default BasePage