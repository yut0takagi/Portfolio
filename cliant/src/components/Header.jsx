import React from "react";
import { useNavigate } from "react-router-dom";
import { smoothScrollTo } from "../utils/scroll";

export const Header = () => {
  const navigate = useNavigate();
  const onSectionClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      smoothScrollTo(id);
    } else {
      navigate('/', { state: { scrollToId: id } });
    }
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 text-white">
      <a
        href="#main"
        onClick={(e) => { e.preventDefault(); smoothScrollTo('main'); }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 bg-blue-600 text-white px-3 py-1 rounded"
      >
        メインコンテンツへスキップ
      </a>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-semibold">Yuto Takagi</div>
        <ul className="flex gap-4 text-sm">
          <li><a href="/#featured" onClick={(e)=>onSectionClick(e,'featured')} className="hover:text-blue-400">Featured</a></li>
          <li><a href="/#skills" onClick={(e)=>onSectionClick(e,'skills')} className="hover:text-blue-400">Skills</a></li>
          <li><a href="/#spotlight" onClick={(e)=>onSectionClick(e,'spotlight')} className="hover:text-blue-400">Spotlight</a></li>
          <li><a href="/#timeline" onClick={(e)=>onSectionClick(e,'timeline')} className="hover:text-blue-400">Timeline</a></li>
          <li><a href="/#projects" onClick={(e)=>onSectionClick(e,'projects')} className="hover:text-blue-400">Projects</a></li>
          <li><a href="/#about" onClick={(e)=>onSectionClick(e,'about')} className="hover:text-blue-400">About</a></li>
          <li><a href="/#contact" onClick={(e)=>onSectionClick(e,'contact')} className="hover:text-blue-400">Contact</a></li>
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
