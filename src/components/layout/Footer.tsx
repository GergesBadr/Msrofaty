import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import flyingMoney from "../../assets/flying-money.svg";

export default function Footer() {
  return (
    <div className="responsive-container relative mt-32 space-y-10 py-8">
      <div className="space-y-2 text-center">
        <p>"مصروفاتي" موقع عربي بسيط هيساعدك تراقب مدخراتك ومصروفاتك بسهولة.</p>
        <p>
          منتظر رأيك، استفساراتك، أو أفكار لتحسين الموقع، أو ببساطة، خلينا
          نتناقش:
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/gergesbadr"
          target="_blank"
          className="flex items-center gap-2 rounded-xl border-2 px-3 py-1 duration-200 hover:-translate-y-1 dark:border-gray-700"
        >
          <span>LinkedIn</span>
          <FaLinkedinIn className="size-6" />
        </a>
        <a
          href="https://wa.me/201156728649"
          target="_blank"
          className="flex items-center gap-2 rounded-xl border-2 px-3 py-1 duration-200 hover:-translate-y-1 dark:border-gray-700"
        >
          <span>Whatsapp</span>
          <FaWhatsapp className="size-6" />
        </a>
        <a
          href="https://www.gergesbadr.com/home"
          target="_blank"
          className="flex items-center gap-2 rounded-xl border-2 px-3 py-1 duration-200 hover:-translate-y-1 dark:border-gray-700"
        >
          Portfolio
        </a>
      </div>

      <div className="absolute -top-28 left-1/2 -translate-x-1/2 md:-top-32 md:left-14">
        <img
          src={flyingMoney}
          alt="Green cash money with flying white wings, illustration."
          className="size-24 md:size-32 lg:size-36 xl:size-40"
        />
      </div>
    </div>
  );
}
