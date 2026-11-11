import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WordPressExportModal } from './components/WordPressExportModal';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { TrainingView } from './views/TrainingView';
import { CaseStudiesView } from './views/CaseStudiesView';
import { AboutView } from './views/AboutView';
import { BlogView } from './views/BlogView';
import { BlogPostView } from './views/BlogPostView';
import { ContactView } from './views/ContactView';
import { BlogPost } from './data/siteContent';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [wpModalOpen, setWpModalOpen] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Sync with browser navigation if possible
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    setSelectedPost(null);
    try {
      window.history.pushState({}, '', path);
    } catch (e) {
      // In restricted iframe environments, pushState might be restricted
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentPath(`/blog/${post.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render view based on route
  const renderCurrentView = () => {
    if (selectedPost) {
      return (
        <BlogPostView
          post={selectedPost}
          onBack={() => {
            setSelectedPost(null);
            navigateTo('/blog');
          }}
          onNavigate={navigateTo}
        />
      );
    }

    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return <ServiceDetailView slug={slug} onNavigate={navigateTo} />;
    }

    switch (currentPath) {
      case '/services':
        return <ServicesView onNavigate={navigateTo} />;
      case '/training':
        return <TrainingView onNavigate={navigateTo} />;
      case '/case-studies':
        return <CaseStudiesView onNavigate={navigateTo} />;
      case '/about':
        return <AboutView onNavigate={navigateTo} />;
      case '/blog':
        return <BlogView onNavigate={navigateTo} onSelectPost={handleSelectPost} />;
      case '/contact':
        return <ContactView />;
      case '/':
      default:
        return <HomeView onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-[#0f172a] font-sans selection:bg-[#f26464]/20 selection:text-[#f26464]">
      {/* Sticky Premium Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenWordPressModal={() => setWpModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">{renderCurrentView()}</main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenWordPressModal={() => setWpModalOpen(true)}
      />

      {/* WordPress Ready Export Hub Modal */}
      <WordPressExportModal
        isOpen={wpModalOpen}
        onClose={() => setWpModalOpen(false)}
      />
    </div>
  );
}
