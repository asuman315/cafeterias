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
 const divStyles = `flex items-center mt-4 mr-4`;
 const headingStyles = `capitalize text-xs tracking-wider`;
 const highlightedHeadingStyles = `${headingStyles} text-primary-1`;
 const iconStyles = `w-5 h-5 mx-2`;
 const numberStyles = 'bg-primary-1 text-white border-none';

 const isProductsListPage = router.pathname === '/products/[productId]';
 const isProductDetailsPage = router.pathname === '/product/[productId]';
 
  return (
    <section className='flex flex-wrap items-center self-start'>
      <div className={divStyles}>
        <p className=' h-5 w-5 border-2 mr-2 text-center text-xs rounded-[50%] font-bold flex justify-center items-center'>
          1
        </p>
        <h3 className={headingStyles}>{categoryName}</h3>
      </div>
      <div className={divStyles}>
        {
          <p
            className={`${
              isProductsListPage && numberStyles
            }  h-5 w-5 border-2 mr-2 text-center text-xs rounded-[50%] font-bold flex justify-center items-center`}>
            2
          </p>
        }
        <h3
          className={
            isProductsListPage ? highlightedHeadingStyles : headingStyles
          }>
          {subcategoryName}
        </h3>
      </div>
      {!isProductDetailsPage ? null : (
        <div className={divStyles}>
          <p
            className={`${
              isProductDetailsPage && numberStyles
            }  h-5 w-5 border-2 mr-2 text-center text-xs rounded-[50%] font-bold flex justify-center items-center`}>
            3
          </p>
          <h3 className={highlightedHeadingStyles}>{productName}</h3>
        </div>
      )}
    </section>
  );
}

export default CurrentPage