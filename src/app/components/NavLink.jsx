import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title, className = "" }) => {

  const pathname = usePathname();

  const handleClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
    }
    if (href === '/') {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetId = href.replace("/#", "");
      const targetElement =
        document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
    window.history.pushState({}, "", href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white ${className}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
