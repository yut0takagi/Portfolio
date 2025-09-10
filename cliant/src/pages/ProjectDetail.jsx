import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import projectList from "../data/projects.json";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const index = Number(id);
  const project = Number.isInteger(index) ? projectList[index] : undefined;

  if (!project) {
    return (
      <div className="bg-black min-h-screen text-white">
        <Header />
        <main id="main" className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="text-gray-400 mb-8">指定されたプロジェクトが見つかりませんでした。</p>
          <RouterLink to="/" className="text-blue-400 hover:underline">ホームへ戻る</RouterLink>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main id="main" className="max-w-5xl mx-auto px-6 py-12">
        <nav className="text-sm text-gray-400 mb-6">
          <RouterLink to="/" className="hover:text-blue-400">Home</RouterLink>
          <span className="mx-2">/</span>
          <RouterLink to="/" state={{ scrollToId: 'projects' }} className="hover:text-blue-400">Projects</RouterLink>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{project.title}</span>
        </nav>

        <h1 className="text-4xl font-bold mb-4 text-blue-400">{project.title}</h1>
        <p className="text-gray-300 mb-8 text-lg">{project.description}</p>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full max-h-[420px] object-cover rounded-xl mb-8 border border-gray-800"
          />
        )}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Tech</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((t, i) => (
              <span key={i} className="bg-blue-700 text-white text-xs px-2 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            外部リンクを開く
          </a>
        )}

        <div className="mt-10">
          <RouterLink to="/" className="text-blue-400 hover:underline">← ホームへ戻る</RouterLink>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
