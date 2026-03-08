import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={className ?? "text-sm font-medium text-slate-200"} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;
