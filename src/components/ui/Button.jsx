import React from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Button = forwardRef(
  (
    {
      as = "button",
      variant = "primary",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as === "link" ? Link : as;

    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      outline:
        "border border-gray-400 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-800",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2 text-sm",
    };

    return (
      <Component
        ref={ref}
        className={clsx(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);


Button.displayName = "Button";

export default Button;