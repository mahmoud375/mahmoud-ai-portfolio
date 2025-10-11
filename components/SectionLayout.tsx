import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
  title?: string;
  id?: string;
  className?: string;
  noDivider?: boolean;
}

export default function SectionLayout({
  children,
  title,
  id,
  className = "",
  noDivider = false,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={`w-full max-w-content mx-auto px-6 sm:px-8 mb-16 sm:mb-20 scroll-mt-36 ${className}`}
    >
      {title && (
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            {title}
          </h2>
          {!noDivider && (
            <div className="w-16 h-1 bg-primary rounded-full" />
          )}
        </div>
      )}
      <div className="space-y-6">{children}</div>
    </section>
  );
}
