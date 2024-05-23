import FlashSaleCard from "@/components/FlashSaleCard";

const ProductsPage = async() => {
    const res = await fetch('https://my-grocery-store-server.vercel.app/products',{
        next: {
            revalidate: 30,
        },
    });
    const products = await res.json();
    
    
    return (
        <div className="my-12 px-2 md:px-0">
            <div className="flex items-center flex-col">
                <h1 className="mt-8 mb-2 text-2xl font-semibold">All Products</h1>
                <p className="mb-10 md:w-[800px] text-center">
                    Here is our all products.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {
                    products.map(item => <FlashSaleCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;