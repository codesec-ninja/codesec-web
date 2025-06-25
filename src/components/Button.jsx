```jsx
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white, size = "md" }) => {
  // Define size variants for responsive design
  const sizeClasses = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm md:px-7 md:text-base",
    lg: "h-12 px-8 text-base md:h-14 md:px-10 md:text-lg",
    xl: "h-14 px-10 text-lg md:h-16 md:px-12 md:text-xl"
  };

  const classes = \`button relative inline-flex items-center justify-center transition-colors hover:text-color-1 ${
    sizeClasses[size]
  } ${px || ""} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  
  const spanClasses = "relative z-10 whitespace-nowrap";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
```