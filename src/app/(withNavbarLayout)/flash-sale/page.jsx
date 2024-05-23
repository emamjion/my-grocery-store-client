import FlashSaleCard from "@/components/FlashSaleCard";

const FlashSale = async() => {
    const res = await fetch('http://localhost:5000/products',{
        next: {
            revalidate: 30,
        },
    });
    const flashSales = await res.json();
    
    return (
        <div className="my-12 px-2 md:px-0">
            <div className="flex items-center flex-col space-y-10">
                <h1 className="mt-8 mb-2 text-2xl font-semibold">Flash Sale</h1>
                <p className="mb-10 md:w-[800px] text-center">
                    Get ready to seize the moment with our Flash Sale! Limited-time
                    offers on top-quality products await you. Don't miss out – shop now
                    and save big before time runs out!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {
                    flashSales.map(item => <FlashSaleCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default FlashSale;