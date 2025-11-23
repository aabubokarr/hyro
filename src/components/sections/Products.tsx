import { Vector } from "../icons/vector";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Hyro VR Headset Pro",
    description: "Experience immersive virtual reality with our flagship headset featuring 4K displays and advanced tracking.",
    price: "$599",
    features: ["4K Display", "120Hz Refresh", "Wireless", "Eye Tracking"],
  },
  {
    id: 2,
    name: "Hyro VR Controllers",
    description: "Precision motion controllers with haptic feedback for the most realistic VR interactions.",
    price: "$199",
    features: ["Haptic Feedback", "6DOF Tracking", "Ergonomic Design", "Long Battery"],
  },
  {
    id: 3,
    name: "Hyro VR Base Station",
    description: "Room-scale tracking system that enables you to move freely in your virtual environment.",
    price: "$299",
    features: ["Room-Scale Tracking", "360° Coverage", "Sub-millimeter Accuracy", "Easy Setup"],
  },
  {
    id: 4,
    name: "Hyro VR Gaming Bundle",
    description: "Complete VR gaming setup including headset, controllers, and access to premium games library.",
    price: "$899",
    features: ["Full Setup", "10 Premium Games", "1 Year Warranty", "Free Updates"],
  },
  {
    id: 5,
    name: "Hyro VR Enterprise Suite",
    description: "Professional VR solution for businesses with advanced features and dedicated support.",
    price: "$1,499",
    features: ["Enterprise Features", "Dedicated Support", "Custom Solutions", "Training Included"],
  },
  {
    id: 6,
    name: "Hyro VR Accessories Pack",
    description: "Essential accessories including carrying case, lens protectors, and extra face cushions.",
    price: "$99",
    features: ["Carrying Case", "Lens Protectors", "Face Cushions", "Cleaning Kit"],
  },
];

export default function Products() {
  return (
    <div id="products" className="mt-16 sm:mt-20 md:mt-24 scroll-mt-24 flex flex-col items-center gap-12 sm:gap-16 md:gap-24 relative px-4 md:px-6 lg:px-8">
      <Vector
        variant="about"
        className="hidden lg:block absolute -z-10 top-0 left-0 w-full h-auto opacity-50"
      />
      
      <div className="text-center w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          <span className="bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent">
            OUR
          </span>{" "}
          PRODUCTS
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
          Discover our range of cutting-edge VR products designed to bring you
          the ultimate virtual reality experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#3A3456] rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 md:gap-6 hover:bg-[#4A4466] transition-colors duration-300 border border-transparent hover:border-purple-light/20"
          >
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                <span className="bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent">
                  {product.name}
                </span>
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 line-clamp-3">
                {product.description}
              </p>
              <ul className="space-y-2 mb-4 md:mb-6">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-xs md:text-sm text-purple-light flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-light"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-purple-light/20 gap-3 sm:gap-0">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-light">
                {product.price}
              </span>
              <Link
                href="#contact"
                className={buttonVariants({ variant: "default" }) + " text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 w-full sm:w-auto text-center"}
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center w-full px-4">
        <Link
          href="#contact"
          className={
            buttonVariants({ variant: "default" }) +
            " text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4"
          }
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}