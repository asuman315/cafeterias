This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

 {/* overlay under text so it looks cleaner */}
      {/* <div className="absolute w-screen h-screen top-0 left-0 bg-gradient-to-l from-primary-9 opacity-80 z-10"></div> */}
      {/* <Text /> */}

        const productId = meal.id;
          console.log("productId", productId);

          return (
            <div
              key={index}
              className="bg-white shadow-xl rounded-md overflow-hidden flex flex-col justify-between"
            >
              <div className="relative w-full h-[40vh]">
                <Image
                  src={mealImage}
                  alt={mealName}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col h-full justify-between py-10 px-5">
                <div className="space-y-5">
                  <h3 className="text-2xl uppercase">{mealName}</h3>
                  <p className="font-semibold text-primary-1">{mealPrice}</p>
                </div>
                <div className="-mt-32">
                  <button
                    className="uppercase w-full py-2 rounded-md"
                    onClick={() => router.push(`/product/${productId}`)}
                  >
                    order now
                  </button>
                </div>
              </div>