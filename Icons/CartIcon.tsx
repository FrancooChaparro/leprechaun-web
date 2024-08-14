import React from 'react';

const CartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="2em"
    width="2em"
  >
    <path d="M8 1a2 2 0 00-2 2v2H5V3a3 3 0 116 0v2h-1V3a2 2 0 00-2-2zM5 5H3.36a1.5 1.5 0 00-1.483 1.277L.85 13.13A2.5 2.5 0 003.322 16h9.355a2.5 2.5 0 002.473-2.87l-1.028-6.853A1.5 1.5 0 0012.64 5H11v1.5a.5.5 0 01-1 0V5H6v1.5a.5.5 0 01-1 0V5z" />
  </svg>
);

export default CartIcon;
