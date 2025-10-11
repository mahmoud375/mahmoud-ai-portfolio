import { Experience } from "@/lib/data";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-8 last:pb-0">
      <div className="space-y-3">
        {/* Header */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            {experience.role}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-base text-gray-600 dark:text-gray-300">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover font-medium underline underline-offset-2 transition-colors"
              >
                {experience.company}
              </a>
            ) : (
              <span className="font-medium">{experience.company}</span>
            )}
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-gray-500 dark:text-gray-400">{experience.location}</span>
          </div>
          <p className="text-sm text-muted dark:text-gray-400">
            {experience.startDate} – {experience.endDate}
          </p>
        </div>

        {/* Description */}
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          {experience.description.map((desc, index) => (
            <p key={index} className="leading-relaxed">
              {desc}
            </p>
          ))}
        </div>

        {/* Highlights */}
        {experience.highlights && experience.highlights.length > 0 && (
          <ul className="space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside ml-2">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
