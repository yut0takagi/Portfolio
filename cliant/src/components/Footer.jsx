import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm flex items-center justify-between">
        <p>© {new Date().getFullYear()} Yuto Takagi</p>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:text-blue-400"
          aria-label="ページ上部へ戻る"
        >
          ↑ Top
        </a>
      </div>
    </footer>
  );
};

