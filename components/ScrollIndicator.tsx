import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <ChevronDown
      className="w-8 h-8 text-primary-light dark:text-purple-400 animate-bounce"
      aria-hidden="true"
    />
  );
};

export default ScrollIndicator;
