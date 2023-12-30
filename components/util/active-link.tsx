import { useRouter } from 'next/router'
import { useMemo } from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
  extraStyles?: string;
};
 
function ActiveLink({ children, href, extraStyles = "" }: Props) {
  const router = useRouter();

  const classNames = useMemo(() => `${router.asPath.includes(href) ? 'text-primary' : ''}`, [router.pathname, href])
 
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
 
  return (
    <a href={href} onClick={handleClick} className={classNames + " " + extraStyles}>
      {children}
    </a>
  )
}
 
export default ActiveLink