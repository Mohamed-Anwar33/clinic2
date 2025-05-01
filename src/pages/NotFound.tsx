
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-playfair font-bold mb-4 text-gold">404</h1>
        <p className="text-2xl text-navy-dark mb-6 font-playfair">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <Button
          onClick={() => window.location.href = '/'}
          className="luxury-btn"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
