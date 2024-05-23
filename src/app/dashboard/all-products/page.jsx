
const AllProducts = async() => {
    const res = await fetch('https://my-grocery-store-server.vercel.app/products');
    const products = await res.json();
    return (
        <div>
            <div>
                <h1 className="font-semibold mt-12 text-4xl">This is our All Products</h1>
            </div>
            <div className="mt-12">
                <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Ratings</th>
                        <th>Discount</th>
                        <th>Flash Sale</th>

                    </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => (<tr key={product._id}>
                                <th>{index + 1}</th>
                                <td>{product.title}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.ratings}</td>
                                <td>{product.discount}</td>
                                <td>{product.flashSale}</td>
                            </tr>))
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;



