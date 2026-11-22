"use client";
import { useState ,useEffect} from "react";
import { useRouter } from "next/router";// Import useRouter
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import "../components/Aboutnav/BrandedProducts.css";
import { ArrowUp } from "lucide-react"; // Arrow Icon
import Footer from "../components/Footer/MainFooter";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  // const pathname = usePathname();
  const pathname = router.pathname;
  const [showButton, setShowButton] = useState(false);
 

 


  const features = [
    {
      image: "/assest/Nuraviq/shilavex.webp"  ,
      title: "Shilavex",
      description: "Ancient Wisdom Modern Science.",
    },
   
    {
      image: "/assest/Nuraviq/AstaNexa.png",
      title: "AstaNexa",
      description: "Astaxanthin Softhels 100% Antioxident Support for the day .",
    },
    {
      image: "/assest/Nuraviq/BerbeVanta.png",
      title: "BerbeVanta",
      description: "Berberine Hcl Softgels. Rooted in Nature. Made for Your Daily Routine.",
    },
    {
      image: "/assest/Nuraviq/Nuraviq_CoQ10.png",
      title: "CoQ10",
      description: "Coenzyme CoQ10 in Extra Virgin Olive Oil.",
    },
   
    {
      image: "/assest/Nuraviq/NMN Resvera.png",
      title: "NMN Resvera",
      description: "NMN + TRANS-Reservatrol Softgels.",
    },
   {
      image: "/assest/Nuraviq/OregaShield.png",
      title: "OregaSheild",
      description: "Oregano Oil + Blackseed Oil Softgels .",
    },
    {
      image: "/assest/Nuraviq/OmegaNerva.png",
      title: "OmegaNerva",
      description: "Calamary + Krill Oil Softgels.",
    },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  useEffect(() => {
         const handleScroll = () => {
           if (window.scrollY > 200) {
             setShowButton(true);
           } else {
             setShowButton(false);
           }
         };
         window.addEventListener("scroll", handleScroll);
         return () => {
           window.removeEventListener("scroll", handleScroll);
         };
       }, []);
     
       const scrollToTop = () => {
         window.scrollTo({ top: 0, behavior: "smooth" });
       };

  return (
    <>
    <div className="background-container67">
      {/* Navbar */}
      <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
            <Link href="/">
            <Image src="/assest/logo12.png" alt="Logo" width={150} height={150} style={{ cursor: "pointer" }} />
          </Link>
            </div>
            <ul className="navbar-menu">
            <li className={router.asPath === "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.asPath === "/about-us" ? "active" : ""}>
            <Link href="/about-us">About Us</Link>
          </li>
          <li className={router.asPath === "/contact" ? "active" : ""}>
            <Link href="/contact">Contact</Link>
          </li>
        
          <li className={router.asPath === "/blog" ? "active" : ""}>
            <Link href="/blog">Blog</Link>
          </li>
    
    
         
          <li className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
      <button
        className={`dropdown-toggle ${
          ["/custom-formulation", "/branded-products","/product-catalog"].includes(pathname) ? "active-dropdown" : ""
        }`}
        onClick={toggleDropdown}
      >
        Services ▼
      </button>
      <ul className="dropdown-menu">
        <li className={pathname === "/custom-formulation" ? "active" : ""}>
          <Link href="/custom-formulation">Custom-Formulation</Link>
        </li>
        <li className={pathname === "/branded-products" ? "active" : ""}>
          <Link href="/branded-products">Branded-Products</Link>
        </li>
        <li className={pathname === "/product-catalog" ? "active" : ""}>
            <Link href="/product-catalog">Product-Catalog</Link>
          </li>
      </ul>
    </li>
    
            </ul>
        {/* Right Side Icons */}
        <div className="navbar-icons">
          <FaSearch className="icon14" />
          <div className="vertical-line"></div>
          <div className="cart-section">
            <FaShoppingCart className="icon1" />
            <span>Cart</span>
            <div className="cart-badge">0</div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
        <ul>
          <li className={router.pathname === "/" ? "active" : ""} onClick={toggleMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname === "/about-us" ? "active" : ""} onClick={toggleMenu}>
            <Link href="/about-us">About Us</Link>
          </li>
          <li className={router.pathname === "/contact" ? "active" : ""} onClick={toggleMenu}>
            <Link href="/contact">Contact</Link>
          </li>
         
          <li className={router.pathname === "/blog" ? "active" : ""} onClick={toggleMenu}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
  <button
    className={`dropdown-toggle ${
      ["/custom-formulation", "/branded-products","/product-catalog"].includes(pathname) ? "active-dropdown" : ""
    }`}
    onClick={toggleDropdown}
  >
    Services ▼
  </button>
  <ul className="dropdown-menu">
    <li className={pathname === "/custom-formulation" ? "active" : ""}>
      <Link href="/custom-formulation">Custom-Formulation</Link>
    </li>
    <li className={pathname === "/branded-products" ? "active" : ""}>
      <Link href="/branded-products">Branded-Products</Link>
    </li>
    <li className={pathname === "/product-catalog" ? "active" : ""}>
      <Link href="/product-catalog">Product-Catalog</Link>
    </li>
  </ul>
</li>
        </ul>
      </div>

      {/* Animated Heading and Button */}
      <div className="hero-content">
        

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="natural-heading1"
        >
           Branded Soft-Gelatin Capsules
          
        </motion.h1>

    
      </div>
    </div>
   
        
    <div className="featureContainer">
      {features.map((feature, index) => (
        <div key={index} className="featureBox">
          <div className="featureImage">
          <Image
  src={feature.image}
  alt={feature.title}
  width={60}
  height={60}
  priority
  unoptimized
/>
          </div>
          <h3 className="featureTitle">{feature.title}</h3>
          <p className="featureDescription">{feature.description}</p>
        </div>
      ))}
    </div>
     <div className="card">
      {/* Title (Top Center) */}
      <h3 className="title66">Providing High Value-Added Products</h3>

     

      {/* Description (Bottom) */}
      <p className="description66">Since our company’s inception, we have built
         a collection of branded products, and we continue to add new types of soft gelatin capsules. 
         The decision to brand a formula is a calculated one. We consider a supplement’s safety and efficacy,
          supporting clinical studies, and points of differentiation before adding it to our portfolio of brands. 
          In addition, we align ourselves with respected raw material suppliers,
         who also invest in their brands and the science supporting their products.</p>
         <br/>
         <p className="description66">
         Our customers can be guaranteed that we promote each of our branded supplements with extensive advertising campaigns, 
         clinical research, educational outreach, and our company’s dedication to its success.
         </p>
         <br/>
        
         
         <p className="description66">
         We are unique in that we have several exclusive branded products that can be used in formulas and customers add synergistic ingredients to make it a custom formula. These branded products usually have scientifically-researched ingredients or intellectual property
          (patent and/or trademark protection) surrounding the ingredients found in the formulas.
         </p>
         <br/>
         <p className="description66">
         We are contract manufacturers who make their own branded product lines too under the name Nuraviq. Please reach out if you are interested in marketing our products. 
         </p>
         
         <br/>
        
    </div>

      <div className="footer-main">
      <Footer />
      </div>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="scroll-to-top"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </>
  );
};

export default Navbar;
