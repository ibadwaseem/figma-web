import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  return (
    <div>
      
<section
  className="relative h-[60vh] bg-cover bg-center"
  style={{ backgroundImage: "url('/image/bgibad1.jpg')" }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
 
    <div className="mb-4">
      <Image
        src="/image/ibad3.png"
        alt="Shop Icon"
        width={100}
        height={100}
        className="object-cover rounded-full"
      />
    </div>

  
    <h1 className="text-5xl font-bold">Cart</h1>

 
    <p className="text-xl mt-4">
      <Link href="/">Home</Link> &gt; Cart
    </p>
  </div>
</section>


      
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
            <div className="space-y-6 md:w-[60%]">
              <div className="flex gap-4">
              
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Product</button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Price</button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Quantity</button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Subtotal</button>
              </div>

              <div className="grid grid-cols-5 gap-4 mt-6">
         
                <div>
                  </div> 
                <div className="text-gray-700">
                  <h2 className="text-lg font-semibold">Asgaard Sofa</h2>
                </div>
                <div className="text-gray-500">
                  <p>Rs. 250,000.00</p>
                </div>
                <div>
                  <input
                    type="number"
                    value="1"
                    className="w-full p-2 border border-gray-300 rounded-md text-center"
                  />
                </div>
                <div>
                  <p className="font-semibold">Rs. 250,000.00</p>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/image/asgaardsofa.jpeg"
                    alt="Asgaard Sofa"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div></div> 
                <div></div> 
                <div></div> 
                <div></div>
              </div>
            </div>

           
            <div className="space-y-6">
              <h1 className="text-2xl font-bold mb-4 text-center">Cart Totals</h1>

             
              <div className="flex justify-between py-2 border-b">
                <span className="text-lg font-medium">Subtotal</span>
                <span className="text-lg font-medium">Rs. 250,000.00</span>
              </div>

             
              <div className="flex justify-between py-2 border-b">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-xl font-semibold text-yellow-500">Rs. 250,000.00</span>
              </div>

             
              <button className="w-full py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition mt-4">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-amber-100 py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-black font-bold text-3xl mb-4">
                Free Delivery
              </h2>
              <p className="text-lg text-gray-700">
                For all orders over $50, consectetur adipiscing elit.
              </p>
            </div>
           
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-black font-bold text-3xl mb-4">
                90 Days Return
              </h2>
              <p className="text-lg text-gray-700">
                If the product has an issue, consectetur adipiscing elit.
              </p>
            </div>
          
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-black font-bold text-3xl mb-4">
                Secure Payments
              </h2>
              <p className="text-lg text-gray-700">
                100% secure payments, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
