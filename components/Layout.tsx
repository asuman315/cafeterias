import MainNavigation from './Navigation/MainNavigation';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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
     setShowFooter(false);
   } else {
      setShowNavigation(true);
      setShowFooter(true);
    }
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
