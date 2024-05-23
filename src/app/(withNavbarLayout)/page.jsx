import Carousel from "@/components/Carousel/Carousel";
import FlashSaleCard from "@/components/FlashSaleCard";
import Image from "next/image";
import Link from "next/link";

const HomePage = async() => {
    const res = await fetch('https://my-grocery-store-server.vercel.app/products',{
        next: {
            revalidate: 30,
        },
    });
    const flashSales = await res.json();
    
    const top = await fetch('https://my-grocery-store-server.vercel.app/topBrands', {
        next: {
            revalidate: 30,
        },
    });
    const topBrands = await top.json();

    const trending = await fetch('http://localhost:5000/products', {
        next: {
            revalidate: 30,
        },
    });
    const trendingProducts = await trending.json();


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
            
            <div className="my-24">
                <div className="text-center mb-12">
                    <h1 className="mt-8 mb-2 text-2xl font-semibold">Top Brands</h1>
                    <p className="mb-10 md:w-[800px] mx-auto">
                        Top grocery brands like Coca-Cola, Lay's, Danone, Kellogg's, and Birds Eye are renowned for their quality and diverse product ranges, making them popular choices for beverages.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
                    {
                        topBrands.map(top => (
                            <div key={top._id} className="card w-full bg-base-100 shadow-xl">
                                <figure><Image src={top?.image} alt={top.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{top.name}</h2>
                                    <p>{top.description}</p>
                                    <div className="card-actions justify-end">
                                    <button className="bg-[#212121] hover:bg-[#151515] text-white px-6 py-2.5 rounded-md">About Brand</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center mt-12">
                    <button className="bg-[#212121] hover:bg-[#151515] text-white px-6 py-2.5 rounded-md">See All</button>
                </div>
            </div>

            <div className="my-24">
                <div>
                    <h1 className="mt-8 mb-2 text-2xl font-semibold">Trending Product</h1>
                    <p className="mb-10 md:w-[800px]">
                        Trending grocery items include plant-based foods, organic products, ready-to-eat meals, functional beverages, and eco-friendly packaging, reflecting health and sustainability.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {
                        trendingProducts.slice(0,6).map(product => (
                            <div key={product._id} className="card w-full bg-base-100 shadow-xl">
                                <figure><Image src={product?.image} width={405} height={200} alt={product.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p>{product.description}</p>
                                    <div className="flex items-center justify-between">
                                    <p className="font-semibold">${product.price}</p>
                                    <p className="font-semibold">${product.ratings}</p>
                                    </div>
                                    <div className="card-actions justify-center mt-6">
                                    <button className="bg-[#212121] hover:bg-[#151515] text-white px-6 py-2.5 rounded-md">View Product</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center mt-12">
                    <button className="bg-[#212121] hover:bg-[#151515] text-white px-6 py-2.5 rounded-md">See All</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;