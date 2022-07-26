import { useRouter } from 'next/router';
import { useState, useEffect, Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';

const Details = () => {
  const router = useRouter();
  const productId = router.query.id;

  type AdditionalItems = {
    name: string;
    price: number;
  };

  type SelectedOption = {
    component: string;
    option: string;
  };

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [choiceOfComponents, setChoiceOfComponents] = useState(
    [] as SelectedOption[]
  );
  const [accompaniment, setAccompaniment] = useState('');
  const [additionalItems, setAdditionalItems] = useState(
    [] as AdditionalItems[]
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  type Product = {
    name: string;
    price: number;
    productImage: string;
    quantity: number;
    totalPrice: number;
    accompaniment: string;
    additionalItems: AdditionalItems[];
    choiceOfComponents: SelectedOption[];
  };

  useEffect(() => {
    // fetch cart items from local storage
    const myCartItems = JSON.parse(localStorage.getItem('userCart')!);

    const product = myCartItems.find(
      (item: any) => item.productId === productId
    );

    // product will be undefined on the server side during pre-rendering phase. So we use conditions to avoid errors
    if (product) {
      const {
        name,
        productImage,
        quantity,
        totalPrice,
        additionalItems,
        accompaniment,
        choiceOfComponents,
        price,
      }: Product = product;

      setName(name);
      setPrice(price);
      setImage(productImage);
      setChoiceOfComponents(choiceOfComponents);
      setAccompaniment(accompaniment);
      setAdditionalItems(additionalItems);
      setTotalPrice(totalPrice);
      setQuantity(quantity);
    } else {
      console.log('No product found');
    }
  }, [productId]);

  console.log('quantity', quantity);

  return (
    <section>
      <div className='max-w-6xl px-4 py-5 mx-auto md:grid grid-cols-2'>
        <Zoom>
          {/* eslint-disable-next-line */}
          <img
            src={image}
            alt={name}
            className='object-cover h-[50vh] rounded-md w-full'
          />
        </Zoom>
        <div className='mt-10 md:mt-0 md:pt-0 md:px-5'>
          <ProductInfo name={name} price={price} />
            { choiceOfComponents.length >= 1 ? (<ChoiceOfComponents choiceOfComponents={choiceOfComponents} />) : (<div></div>) }
            {accompaniment.length > 0 ? (
              <Accompaniment accompaniment={accompaniment} />
            ) : (<div></div>) }
            { additionalItems.length > 0 ? (
              <Zoom bottom>
                <AdditionalItems additionalItems={additionalItems} />
              </Zoom>
            ) : (<div></div>) }
          <div className='flex items-center'>
            <h4>number of items in cart :</h4>
            <p className='font-medium ml-8'>{quantity}</p>
          </div>
          <div className='flex items-center'>
            <h4>total price of all items :</h4>
            <p className='font-medium ml-8'>{totalPrice}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductInfo = ({ name, price }: { name: string; price: number }) => {
  return (
    <section>
      <div>
        <Roll bottom>
          <h1 className='text-4xl md:text-5xl text-primary-1 tracking-wider'>
            {name}
          </h1>
        </Roll>
        <p className='font-bold text-primary-1 leading-8 tracking-wider text-3xl py-3'>
          ${price}
        </p>
      </div>
    </section>
  );
};

const ChoiceOfComponents = ({ choiceOfComponents }: any) => {
  return (
    <section className='mt-4'>
      <h3>Choice of Components</h3>
      {choiceOfComponents.map(
        (component: { option: string; component: string }) => {
          return (
            <div className='flex py-2'>
              <p className='capitalize mr-5 font-semibold'>
                {component.component} :{' '}
              </p>
              <p className='capitalize'>{component.option}</p>
            </div>
          );
        }
      )}
    </section>
  );
};

const Accompaniment = ({ accompaniment }: any) => {
  console.log('accompaniment', accompaniment);

  return (
    <section className='flex py-2'>
      <p className='capitalize mr-5 font-semibold'>Accompaniment :</p>
      <p className='capitalize font-medium'>{accompaniment}</p>
    </section>
  );
};

const AdditionalItems = ({ additionalItems }: any) => {
  return (
    <section>
      <h3 className='uppercase md:text-xl mb-1 tracking-wider'>
        Additional Items
      </h3>
      <div className='flex justify-between my-4'>
        {additionalItems.map(
          (additionalItem: { name: string; price: number }) => {
            return (
              <div className='flex py-2'>
                <p className='capitalize mr-5 font-semibold'>
                  {additionalItem.name} :{' '}
                </p>
                <p className='capitalize'>${additionalItem.price}</p>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Details;
