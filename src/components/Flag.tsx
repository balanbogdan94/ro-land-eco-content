import React from 'react';

interface FlagProps {
  code: 'ro' | 'en';
  alt?: string;
  className?: string;
}

export const Flag: React.FC<FlagProps> = ({
  code,
  alt,
  className = 'w-6 h-4 object-cover  shadow-lg border border-gray-300',
}) => {
  const file = code === 'ro' ? 'ro' : 'gb';
  return (
    <img
      src={`/assets/${file}.svg`}
      alt={alt || code.toUpperCase()}
      className={className}
      loading="lazy"
      width={24}
      height={12}
    />
  );
};
