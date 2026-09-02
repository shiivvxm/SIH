import React from 'react';

export default function Logo({ className = 'h-8' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox='0 0 32 32' className='h-full aspect-square text-primary' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' />
        <path d='M16 4V16L24.5 24.5' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'/>
        <circle cx='16' cy='16' r='3' fill='currentColor' />
        <path d='M16 4L20 8M16 4L12 8' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'/>
      </svg>
      <span className='font-headline-md text-headline-md font-bold tracking-tight text-primary'>FreightIQ</span>
    </div>
  );
}
