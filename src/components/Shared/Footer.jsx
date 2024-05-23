import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <h1 className="text-xl font-bold">Fresh Feast</h1>
    <p>We are<br/>Providing good food since 2016</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Top Brands</a>
    <a className="link link-hover">Good Food</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Essential Page</h6> 
    <Link href='/trending-product' className="link link-hover">Trending Products</Link>
    <Link href='/categories' className="link link-hover">Categories</Link>
    <Link href='/about-us' className="link link-hover">About Us</Link>
    <Link href='/contact-us' className="link link-hover">Contact Us</Link>
    <Link href='/customer-care' className="link link-hover">Customer Care</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;