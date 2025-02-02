import { cn } from "../lib/utils";
import { useLocation } from "react-router-dom";

export default function Nav({ children }) {
  return (
    <nav className="text-white bg-transparent text-primary-foreground flex justify-between px-10 sm:py-14 py-4">
      {children}
    </nav>
  );
}

export function NavLink({ href, children, ...props }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <a href={href} {...props}>
      <span
        className={cn(
          "p-4 hover:text-[#FF4553] transition-colors",
          isActive && "text-[#FF4553]"
        )}
      >
        {children}
      </span>
    </a>
  );
}

export function NavLogo({ href, children, ...props }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <a href={href} {...props}>
      <span
        className={cn(
          "sm:text-[1.2em] text-[1em] sm:pe-5 pe-0 hover:text-[#FF4553] transition-colors",
          isActive && "text-[#FF4553]"
        )}
      >
        {children}
      </span>
    </a>
  );
}

export function Login({ href, children, ...props }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <a href={href} {...props}>
      <span
        className={cn(
          "bg-white text-black py-2 px-3 rounded-md text-[1.2em] hover:text-[#FF4553] transition-colors",
          isActive && "text-[#FF4553]"
        )}
      >
        {children}
      </span>
    </a>
  );
}

export function SignUp({ href, children, ...props }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <a href={href} {...props}>
      <span
        className={cn(
          "bg-[#FF4553] text-white py-2 px-3 rounded-md text-[1.2em] hover:bg-white hover:text-black transition-colors",
          isActive && "text-[#FF4553]"
        )}
      >
        {children}
      </span>
    </a>
  );
}
