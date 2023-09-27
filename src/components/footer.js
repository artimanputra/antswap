import React from 'react';

export default function Footer() {
  return (
    <footer
      className="bg-neutral-200 text-center dark:bg-[#13191f] lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >ANTSWAP</a>
      </div>
    </footer>
  );
}