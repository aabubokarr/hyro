import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("px-10 py-3 cursor-pointer rounded-lg font-medium", {
  variants: {
    variant: {
      default: "bg-gradient-to-r from-purple-light to-purple-light text-grey",
      outlined:
        "bg-gradient-to-r from-purple-light to-purple-light text-white border-transparent bg-clip-border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className, variant }))}
        {...props}
      />
    );
  }
);

export { Button, buttonVariants };
