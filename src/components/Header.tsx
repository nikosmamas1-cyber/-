import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Phone, Code2 } from 'lucide-react';
import { AGENCY_INFO, SERVICES } from '../data/siteContent';
import { BrandLogo } from './BrandLogo';

interface Props {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenWordPressModal: () => void;
}

export const Header: React.FC<Props> = ({ currentPath, onNavigate, onOpenWordPressModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Αρχική', path: '/' },
    { label: 'Υπηρεσίες', path: '/services', hasDropdown: true },
    { label: 'Εκπαίδευση', path: '/training' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Σχετικά', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Επικοινωνία', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group shrink-0 cursor-pointer"
            aria-label="Smart Culture Αρχική"
          >
            <BrandLogo size="lg" className="transition-transform group-hover:scale-[1.03]" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive =
                item.path === '/' ? currentPath === '/' : currentPath.startsWith(item.path);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleLinkClick('/services')}
                      className={`whitespace-nowrap flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-xl text-sm font-semibold transition ${
                        isActive
                          ? 'text-[#f26464] bg-[#f26464]/5 font-bold'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 top-full pt-2 w-80 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                          <button
                            onClick={() => handleLinkClick('/services')}
                            className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#f26464] hover:bg-[#f26464]/5 transition flex items-center justify-between"
                          >
                            <span>Όλες οι Υπηρεσίες</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          <div className="h-px bg-slate-100 my-1" />
                          {SERVICES.map((srv) => (
                            <button
                              key={srv.slug}
                              onClick={() => handleLinkClick(`/services/${srv.slug}`)}
                              className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition flex flex-col group"
                            >
                              <span className="font-semibold text-slate-800 group-hover:text-[#f26464] transition">
                                {srv.title}
                              </span>
                              <span className="text-[11px] text-slate-400 line-clamp-1">
                                {srv.badge}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`whitespace-nowrap px-2.5 xl:px-3 py-2 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'text-[#f26464] bg-[#f26464]/5 font-bold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* WordPress Export Hub Trigger */}
            <button
              onClick={onOpenWordPressModal}
              title="Επεξεργασία & Εξαγωγή σε WordPress"
              className="whitespace-nowrap hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-full border border-slate-200 text-slate-600 bg-slate-50 hover:bg-white hover:border-[#f26464] hover:text-[#f26464] transition shadow-xs cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 shrink-0" />
              <span>WordPress Ready</span>
            </button>

            {/* Direct Phone / Contact */}
            <a
              href={`tel:${AGENCY_INFO.phone}`}
              className="whitespace-nowrap hidden 2xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-2 py-1 transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#f26464] shrink-0" />
              <span>{AGENCY_INFO.phone}</span>
            </a>

            {/* Primary Action Button */}
            <a
              href={`mailto:${AGENCY_INFO.email}`}
              className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] active:scale-[0.98] transition shadow-md shadow-[#f26464]/20 cursor-pointer"
            >
              <span>Ξεκινήστε τη Συνεργασία</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`mailto:${AGENCY_INFO.email}`}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#f26464]"
            >
              Συνεργασία
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition focus:outline-none"
              aria-label="Μενού"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 shadow-2xl p-5 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition ${
                  currentPath === item.path
                    ? 'bg-[#f26464]/10 text-[#f26464] font-bold'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="h-px bg-slate-100 my-2" />

            {/* Services breakdown in mobile */}
            <div className="px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Υπηρεσίες Agency
              </span>
              <div className="mt-2 grid grid-cols-1 gap-1">
                {SERVICES.map((srv) => (
                  <button
                    key={srv.slug}
                    onClick={() => handleLinkClick(`/services/${srv.slug}`)}
                    className="text-left py-2 px-2 text-sm text-slate-600 hover:text-[#f26464] transition flex items-center justify-between"
                  >
                    <span>{srv.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-slate-100 my-2" />

            {/* Mobile Actions */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWordPressModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 bg-slate-50 hover:bg-white"
            >
              <Code2 className="w-4 h-4 text-[#f26464]" />
              <span>WordPress Ready Export Hub</span>
            </button>

            <a
              href={`mailto:${AGENCY_INFO.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-sm font-bold text-white bg-[#f26464] shadow-md shadow-[#f26464]/20 mt-2"
            >
              <span>Ξεκινήστε τη Συνεργασία</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
