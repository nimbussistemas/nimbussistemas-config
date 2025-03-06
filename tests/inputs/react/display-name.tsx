import React from 'react';

type CommandGroupProps = React.ComponentPropsWithoutRef<'div'>;

const CommandPrimitive = {
  Group: React.forwardRef<HTMLDivElement, CommandGroupProps>(({ children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )),
};

export const CommandGroup = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({}, ref) => <CommandPrimitive.Group ref={ref} />);
