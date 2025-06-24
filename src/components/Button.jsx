import React from 'react';

export default function Button({ variant = 'primary', children, ...props }) {
  const base = 'px-5 py-2 rounded-md font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
