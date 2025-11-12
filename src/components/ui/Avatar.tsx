import Image from 'next/image';
import { cn } from '@/lib/cn';

const sizeMap = {
  sm: 40,
  md: 80,
  lg: 120,
};

type AvatarProps = {
  src?: string;
  alt: string;
  size?: keyof typeof sizeMap;
  className?: string;
};

export function Avatar({ src, alt, size = 'sm', className }: AvatarProps) {
  const dimension = sizeMap[size];

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center overflow-hidden rounded-full bg-card-light-alt text-text-secondary',
        className,
      )}
      style={{ width: dimension, height: dimension }}
    >
      {src ? (
        <Image src={src} alt={alt} width={dimension} height={dimension} className="h-full w-full object-cover" />
      ) : (
        <span className="text-sm font-semibold">
          {alt
            .split(' ')
            .map((part) => part[0])
            .join('')
            .toUpperCase()}
        </span>
      )}
    </div>
  );
}
