

//This component displays the menu screee

const Menu = ({ categoryData }: any) => {
  console.log(categoryData);
  
  return (
    <section>
      <div>
        { categoryData.map((category: any) => { 
          const id = category.id;
          const name = category.attributes.name;
          const imageUrl = category.attributes.image.data[0].attributes.url;
          return (
            <div
              key={id}
              className='flex flex-col items-center bg-white shadow-xl relative rounded-md lg:cursor-pointer'>
              <img
                src={imageUrl}
                alt={`image of ${name}`}
                className='rounded-t-md cursor-zoom-in'
              />
            </div>
          );
        }
        )}
      </div>
    </section>
  )
}

export default Menu