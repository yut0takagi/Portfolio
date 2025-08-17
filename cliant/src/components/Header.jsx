import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 bg-blue-600 text-white px-3 py-1 rounded"
      >
        メインコンテンツへスキップ
      </a>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-semibold">Yuto Takagi</div>
        <ul className="flex gap-4 text-sm">
          <li><a href="/#featured" className="hover:text-blue-400">Featured</a></li>
          <li><a href="/#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="/#spotlight" className="hover:text-blue-400">Spotlight</a></li>
          <li><a href="/#timeline" className="hover:text-blue-400">Timeline</a></li>
          <li><a href="/#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="/#about" className="hover:text-blue-400">About</a></li>
          <li><a href="/#contact" className="hover:text-blue-400">Contact</a></li>
          <li>
            <a
              href="https://github.com/yut0takagi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="GitHub プロフィールを新しいタブで開く"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
