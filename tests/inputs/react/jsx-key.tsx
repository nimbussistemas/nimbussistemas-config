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

CommandPrimitive.Group.displayName = 'CommandGroup';

export const CommandGroup = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({}, ref) => <CommandPrimitive.Group ref={ref} />);

CommandGroup.displayName = 'CommandGroup';

const commands = [
  {
    id: '1',
    name: 'Command 1',
  },
  {
    id: '2',
    name: 'Command 2',
  },
  {
    id: '3',
    name: 'Command 3',
  },
];

export const Command = () => {
  return (
    <div>
      {commands.map((command) => (
        <CommandGroup>{command.name}</CommandGroup>
      ))}
    </div>
  );
};
