import React from 'react';
import { cn } from '~/utils/cn';

export function AuroraBackground({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        'relative h-full w-full bg-black flex items-center justify-center overflow-hidden',
        containerClassName,
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full absolute">
          {/* Aurora 1 */}
          <div className="absolute top-[-30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[100px]" />
          {/* Aurora 2 */}
          <div className="absolute top-[-15%] right-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[100px]" />
          {/* Aurora 3 */}
          <div className="absolute bottom-[-20%] left-[20%] h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[100px]" />
          {/* Aurora 4 */}
          <div className="absolute bottom-[-10%] right-[20%] h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[100px]" />
        </div>
      </div>

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
}
