import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useRouter } from 'next/router';

type Props = {
  categoryName: string;
  subcategoryName: string;
  productName: string;
};

const CurrentPage = ({ categoryName, subcategoryName, productName }: Props) => {
 const router = useRouter();
 const divStyles = `flex items-center`;
 const headingStyles = `capitalize text-xs lg:text-sm tracking-wider`;
 const highlightedHeadingStyles = `${headingStyles} text-primary-1`;
 const iconStyles = `w-5 h-5 mx-2`;

 const isProductsListPage = router.pathname === '/products/[productId]';
 const isProductDeatailsPage = router.pathname === '/product/[productId]';
 
  return (
    <section className='flex items-center self-start'>
      <div className={divStyles}>
        <h3 className={headingStyles}>Menu</h3>
        <MdKeyboardArrowRight className='w-5 h-5 mx-2' />
      </div>
      <div className={divStyles}>
        <h3 className={headingStyles}>{categoryName}</h3>
        <MdKeyboardArrowRight className={iconStyles} />
      </div>
      <div className={divStyles}>
        <h3
          className={
            isProductsListPage ? highlightedHeadingStyles : headingStyles
          }>
          {subcategoryName}
        </h3>
      </div>
      { isProductDeatailsPage && <MdKeyboardArrowRight className={iconStyles} /> }
     { isProductDeatailsPage && <div className={divStyles}>
        <h3 className={highlightedHeadingStyles}>{productName}</h3>
      </div> }
    </section>
  );
}

export default CurrentPage