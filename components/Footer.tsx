import React from "react";
import { profile } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-24">
      <div className="max-w-content mx-auto px-6 sm:px-8 py-8 sm:py-12">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          {profile.socialLinks.github && (
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          )}
          {profile.socialLinks.linkedin && (
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          )}
          {profile.socialLinks.twitter && (
            <a
              href={profile.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
          )}
          {profile.socialLinks.scholar && (
            <a
              href={profile.socialLinks.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Google Scholar"
            >
              Scholar
            </a>
          )}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
