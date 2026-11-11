import React, { useState } from 'react';
import { BookOpen, ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/siteContent';

interface Props {
  onNavigate: (path: string) => void;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogView: React.FC<Props> = ({ onNavigate, onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Διαφήμιση & Meta', 'TikTok & Video', 'B2B & Social Selling', 'Web Design & CRO'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'all') return true;
    return post.category === selectedCategory;
  });

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Digital Marketing Knowledge</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
            Smart Culture <span className="text-[#f26464]">Blog</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Πρακτικά άρθρα, αναλύσεις αλγορίθμων και δοκιμασμένες στρατηγικές digital marketing για να αναπτύξετε την επιχείρησή σας το 2026.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                selectedCategory === cat
                  ? 'bg-[#f26464] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'Όλα τα άρθρα' : cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#f26464] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs mb-3 text-slate-400">
                <span className="font-bold text-[#f26464] uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#f26464] transition leading-snug">
                {post.title}
              </h2>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                {post.summary}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{post.date}</span>
                <span className="inline-flex items-center gap-1 font-bold text-[#f26464] group-hover:translate-x-1 transition">
                  <span>Ανάγνωση</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
