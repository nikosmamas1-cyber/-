import React from 'react';
import { ArrowLeft, Clock, Calendar, Tag, Share2, ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/siteContent';

interface Props {
  post: BlogPost;
  onBack: () => void;
  onNavigate: (path: string) => void;
}

export const BlogPostView: React.FC<Props> = ({ post, onBack, onNavigate }) => {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#f26464] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Πίσω στο Blog</span>
        </button>

        {/* Metadata */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="font-bold text-[#f26464] px-2.5 py-1 rounded-full bg-[#f26464]/10">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 font-medium leading-relaxed pt-2">
            {post.summary}
          </p>
        </div>

        {/* Post content paragraphs */}
        <div className="pt-6 border-t border-slate-100 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Call to action inside blog */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            Θέλετε να εφαρμόσουμε αυτές τις στρατηγικές στην επιχείρησή σας;
          </h3>
          <p className="text-sm text-slate-600">
            Μιλήστε με έναν digital strategist της Smart Culture για να αναλύσουμε τους στόχους σας.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] transition"
          >
            <span>Κλείστε Συνάντηση Στρατηγικής</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};
