import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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
  const [choiceOfComponents, setChoiceOfComponents] = useState([] as SelectedOption[]);
  const [accompaniment, setAccompaniment] = useState('');
  const [additionalItems, setAdditionalItems] = useState([] as AdditionalItems[]);
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

  return (
    <section>
      <h1>Details of {name}</h1>
    </section>
  );
};

export default Details;
