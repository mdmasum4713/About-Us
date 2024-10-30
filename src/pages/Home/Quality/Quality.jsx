
const Quality = () => {


    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-xl text-orange-500 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                    Our Quality Promise
                </h1>
                <h2 className="text-4xl font-semibold text-black">We Developed Products We Need</h2>
            </div>

            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Shipping Information */}
                    <div className="flex flex-col items-center p-4 ">
                        <img className="w-16 " src="https://i.postimg.cc/c1pwykzT/simplicity.jpg" alt="" />
                        <h3 className="my-4 font-semibold">Shipping Worldwide</h3>
                        <p className="text-center">To stores and home</p>
                    </div>



                    {/* Returns Information */}
                    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
                        <img className="w-16" src="https://i.postimg.cc/CLbDFHT0/clothes.jpg" alt="" />
                        <h3 className="my-4  font-semibold">60 - Days Returns</h3>
                        <p className="text-center">60 - days free return policy</p>
                    </div>



                    {/* Payment Security Information */}
                    <div className="flex flex-col items-center p-4 ">
                        <img className="w-16" src="https://i.postimg.cc/TPN5ktmV/nature.jpg" alt="" />
                        <h3 className="my-4 font-semibold">Security Payment</h3>
                        <p className="text-center">We accept all major credit cards</p>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default Quality;