type WaveDividerProps = {
  position?: 'top' | 'bottom';
  height?: number; // height in rem
  primaryColor?: string;
  secondaryColor?: string;
  flip?: boolean; // mirror horizontally
};

export const WaveDivider = ({
  position = 'bottom',
  height = 6,
  primaryColor = '#ffffff',
  secondaryColor = '#F5F2ED',
  flip = false,
}: WaveDividerProps) => {
  const isTop = position === 'top';
  return (
    <div
      className={[
        'w-full overflow-hidden pointer-events-none',
        isTop ? 'absolute left-0 right-0 top-0' : 'absolute left-0 right-0 bottom-0',
        isTop ? 'transform rotate-180' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ height: `${height}rem` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 960 120"
        preserveAspectRatio="none"
        className={['w-full h-full', flip ? 'scale-x-[-1]' : ''].filter(Boolean).join(' ')}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 90L80 86.3C160 82.7 320 75.3 480 60C640 44.7 800 21.3 880 10.7L960 0V120H880C800 120 640 120 480 120C320 120 160 120 80 120H0Z"
          fill={primaryColor}
        />
        <path
          d="M0 110L80 105.7C160 101.3 320 92.7 480 76C640 59.3 800 34.7 880 22L960 9V120H880C800 120 640 120 480 120C320 120 160 120 80 120H0Z"
          fill={secondaryColor}
        />
      </svg>
    </div>
  );
};
