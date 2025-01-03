import Head from "next/head"
import { siteMeta } from "@/lib/constants"
import { useRouter } from "next/router";
import siteImg from "@/images/ogp.jpg";

// const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta;
const { siteTitle, siteDesc, siteUrl, siteType, siteLocale, siteIcon } = siteMeta;

type Props = {
    pageTitle?: string,
    pageDesc?: string,
    pageImg?: string,
    pageImgW?: number,
    pageImgH?: number
}

export default function Meta(props: Props) {
    const title = props.pageTitle ? `${props.pageTitle} | ${siteTitle}` : siteTitle;
    const desc = props.pageDesc ?? siteDesc;

    const router = useRouter();
    const url = `${siteUrl}${router.asPath}`;

    const img = props.pageImg || siteImg.src;
    const imgW = props.pageImgW || siteImg.width;
    const imgH = props.pageImgH || siteImg.height;
    const imgUrl = img.startsWith("https") ? img : `${siteUrl}${img}`;

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title}></meta>
            <meta name="description" content={desc}></meta>
            <meta property="og:description" content={desc}></meta>

            <link rel="canonical" href={url}></link>
            <meta property="og:url" content={url}></meta>

            <meta property="og:site_name" content={siteTitle}></meta>
            <meta property="og:type" content={siteType}></meta>
            <meta property="og:locale" content={siteLocale}></meta>

            <link rel="icon" href={siteIcon}></link>
            <link rel="apple-touch-icon" href={siteIcon}></link>

            <meta property="og:image" content={imgUrl}></meta>
            <meta property="og:image:width" content={imgW.toString()}></meta>
            <meta property="og:image:height" content={imgH.toString()}></meta>
            <meta name="twitter:card" content="summary_large_image"></meta>
        </Head>
    )
}