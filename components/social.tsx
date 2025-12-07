import { CiPhone, CiFacebook } from "react-icons/ci";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";

export function Social() {
  return (
    <div className="pb-4 flex items-center justify-end gap-4">
      <a
        href="tel:+447738019200"
        className="text-primary hover:text-gray-400 transition"
      >
        <CiPhone className="w-6 h-6" />
      </a>
      <a
        href="mailto:info@thehousekeeper.wales"
        className="text-primary hover:text-gray-400 transition"
      >
        <RxEnvelopeClosed className="w-6 h-6" />
      </a>
      <a
        href="https://www.facebook.com/thehousekeeperwales"
        target="_blank"
        className="text-primary hover:text-gray-400 transition"
      >
        <CiFacebook className="w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/thehousekeeperwales"
        target="_blank"
        className="text-primary hover:text-gray-400 transition"
      >
        <FaInstagram className="w-6 h-6" />
      </a>
    </div>
  );
}
