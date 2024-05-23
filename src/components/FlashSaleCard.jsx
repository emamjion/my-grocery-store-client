import Image from "next/image";

const FlashSaleCard = ({item}) => {
    
    
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                    <Image src={item.image} width={408} height={400} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                    <div className="badge badge-secondary">{item.ratings}</div>
                    </h2>
                    <p>{item.description}</p>
                    <p className="font-semibold text-lg">$<span>{item.price}</span></p>
                    <div className="card-actions justify-center mt-6">
                        <button className="bg-[#212121] hover:bg-[#151515] text-white w-full block px-6 py-3 rounded-md">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSaleCard;