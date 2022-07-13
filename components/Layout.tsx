import MainNavigation from './Navigation/MainNavigation';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// this component is used to render the general layout of the website

const Layout = (props: any) => {
  const [showNavigation, setShowNavigation] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === '/';

  useEffect(() => {
    //hide navigation and footer on home page
    if (isHome) {
      setShowNavigation(false);
      setShowFooter(true);
    } else {
      setShowNavigation(true);
      setShowFooter(true);
    }
    //eslint-disable-next-line
  }, [pathname]);

  return (
    <main>
      {showNavigation && <MainNavigation />}
      <section>{props.children}</section>
      {showFooter && <Footer />}
    </main>
  );
};

export default Layout;
