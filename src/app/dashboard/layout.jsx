import Head from "next/head";
import Link from "next/link";

const DashboardLayout = ({children}) => {
    const menus = [
        {
            name: 'All Products',
            link: '/dashboard/all-products'
        },
        
    ];
    return (
        <div>
        <Head>
            <title>Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex gap-6">
            <div className={`bg-[#212121] text-gray-100 min-h-screen duration-500 px-4`}>
                
                <div className="mt-4 flex flex-col gap-4 relative">
                    {
                        menus?.map((menu, index) => (
                            <Link 
                                key={index} 
                                href={menu?.link}
                                className={`group flex items-center text- gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                            >
                                
                                <h2 style={{
                                    transitionDelay: `${index + 3}00ms`
                                }} className='whitespace-pre duration-500'>{menu?.name}</h2>
                                <h2 className={`absolute left-48 bg-white font-semibold whitespace-pre text-[#212121] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                    {menu?.name}
                                </h2>
                            </Link>
                        ) )
                    }
                    
                </div>
            </div>
            <div className="flex-[4]">
                {children}
            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;