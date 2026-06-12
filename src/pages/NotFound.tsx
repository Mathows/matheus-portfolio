import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CornerBrackets from "@/components/CornerBrackets";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background-panel">
      <CornerBrackets />
      <div className="relative z-10 text-center">
        <h1 className="text-metallic text-8xl font-extralight tracking-tight">404</h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted">
          Page not found
        </p>
        <Link
          to="/"
          className="mt-8 inline-block border-b border-gold/50 pb-0.5 text-[15px] text-foreground transition-colors duration-300 hover:text-gold-light"
        >
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
