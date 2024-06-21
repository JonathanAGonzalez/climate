import React from 'react';

export const Search = () => {
  return (
    <form>
      <div className='h-[98px] flex'>
        <input
          type='search'
          placeholder='Find location'
          className='w-full border-b-2 border-b-[#222] bg-transparent  text-white p-4 outline-none placeholder:text-[#575757] placeholder:text-center'
        />
        <button className='min-w-[98px] flex items-center justify-center bg-[#222] text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
