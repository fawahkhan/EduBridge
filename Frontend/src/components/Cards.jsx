import React from 'react'

function Cards({item}) {

  return (
    <>
    <div className="mt-4 my-3 p-4">
    <div className="card bg-base-100 w-96 shadow-xl  hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}

      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions mb-2 justify-center">
      <div  className=" cursor-pointer mt-4 px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Click here to Proceed</div>
      
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
