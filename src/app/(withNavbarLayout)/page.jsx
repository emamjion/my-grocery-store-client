import Carousel from "@/components/Carousel/Carousel";
import FlashSaleCard from "@/components/FlashSaleCard";
import Link from "next/link";

const HomePage = async() => {
    const res = await fetch('https://my-grocery-store-server.vercel.app/products',{
        next: {
            revalidate: 30,
        },
    });
    const flashSales = await res.json();
    
    return (
        <div>
            <Carousel/>

            <div className="my-12 px-2 md:px-0">
                <div>
                    <div>
                        <h1 className="mt-8 mb-2 text-2xl font-semibold">Flash Sale</h1>
                        <p className="mb-10 md:w-[800px]">
                            Get ready to seize the moment with our Flash Sale! Limited-time
                            offers on top-quality products await you. Don't miss out shop now
                            and save big before time runs out!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {
                            flashSales?.slice(0,6).map(item => <FlashSaleCard key={item._id} item={item} />)
                        }
                    </div>
                    <div className="mt-10 text-center">
                        <Link href='/flash-sale'>
                            <button className="bg-[#212121] hover:bg-[#151515] text-white px-6 py-2.5 rounded-md">See All Products</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;