
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const adjustWidth = () => {
      const input = inputRef.current;
      if (input) {
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.whiteSpace = 'pre';
        tempSpan.style.font = window.getComputedStyle(input).font;
        tempSpan.textContent = input.value || input.placeholder || '';
        document.body.appendChild(tempSpan);
        
        const width = tempSpan.getBoundingClientRect().width;
        document.body.removeChild(tempSpan);
        
        input.style.width = `${Math.max(width + 20, 100)}px`;
      }
    };

    React.useEffect(() => {
      adjustWidth();
    }, [props.value]);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      adjustWidth();
      if (props.onInput) {
        props.onInput(e);
      }
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={(el) => {
          inputRef.current = el;
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
        }}
        onInput={handleInput}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
