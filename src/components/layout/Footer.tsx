import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 mt-auto relative ">
      <div className="flex gap-4 items-center justify-center">
        <div className="space-x-6">
          <Link href="/seller/login" className="hover:text-blue-400 transition">
            Sell on Nexa-mart
          </Link>
          <Link href="/rider/login" className="hover:text-blue-400 transition">
            Are you a Rider?
          </Link>
        </div>

        <div className="space-x-6">
          <Link href="/privacy" className="hover:text-blue-400 transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-400 transition">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>

      <p className="mb-4 md:mb-0 flex items-center justify-center">
        &copy; {new Date().getFullYear()} Nexa-mart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
