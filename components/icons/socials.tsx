import Link from "next/link";

export type CustomSVGLinkProps = {
    children?: React.ReactNode;
    href?: string;
};

export type CustomSVGProps = React.SVGProps<SVGSVGElement> & Omit<CustomSVGLinkProps, "children">;

const CustomSVGLink = (props?: CustomSVGLinkProps) => {
    if (props?.href) return <Link href={props?.href} target="_blank" className="hover:opacity-50">
        {props?.children}
    </Link>;
    return <>{props?.children}</>;
}

export const SocialIcons = {
    Facebook: (props: CustomSVGProps) => {
        const { href, ...rest } = props;
        return <CustomSVGLink href={href}>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" {...rest}>
                <path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2"></path>
            </svg>
        </CustomSVGLink>;
    },
    Instagram: (props: CustomSVGProps) => {
        const { href, ...rest } = props;
        return <CustomSVGLink href={href}>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" {...props}>
                <path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h14c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2M9.984 15.523a5.54 5.54 0 0 0 5.538-5.539c0-.338-.043-.664-.103-.984H17v7.216a.69.69 0 0 1-.693.69H3.693a.69.69 0 0 1-.693-.69V9h1.549c-.061.32-.104.646-.104.984a5.54 5.54 0 0 0 5.539 5.539M6.523 9.984a3.461 3.461 0 1 1 6.922 0a3.461 3.461 0 0 1-6.922 0M16.307 6h-1.615A.694.694 0 0 1 14 5.308V3.691c0-.382.31-.691.691-.691h1.615c.384 0 .694.309.694.691v1.616c0 .381-.31.693-.693.693"></path>
            </svg>
        </CustomSVGLink>;
    },
}