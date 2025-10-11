import SectionLayout from "@/components/SectionLayout";
import ProfileImage from "@/components/ProfileImage";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { profile, experiences, projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="py-12 sm:py-16">
      {/* Hero Section */}
      <SectionLayout noDivider className="mb-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Profile Image */}
          {profile.imagePath && (
            <div className="flex-shrink-0">
              <ProfileImage />
            </div>
          )}

          {/* Hero Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              {profile.name}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              {profile.title}
            </p>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
              <p className="leading-relaxed">{profile.bio[0]}</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center text-primary hover:text-primary-hover font-medium transition-colors underline underline-offset-4"
              >
                {profile.email}
              </a>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              <span className="text-gray-600 dark:text-gray-400">{profile.location}</span>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* About Section */}
      {profile.bio.length > 1 && (
        <SectionLayout title="About" id="about" className="mb-20">
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            {profile.bio.slice(1).map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionLayout>
      )}

      {/* Publications Section */}
      <SectionLayout title="Publications" id="publications">
        <div className="space-y-0">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </SectionLayout>

      {/* Projects Section */}
      <SectionLayout title="Projects" id="projects">
        <div className="grid gap-6 md:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionLayout>

      {/* Contact Section */}
      <SectionLayout title="Contact" id="contact">
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          <p className="leading-relaxed">
            For inquiries, please reach out via email at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-primary hover:text-primary-hover font-medium underline underline-offset-2 transition-colors"
            >
              {profile.email}
            </a>
            {" "}or connect with me on{" "}
            {profile.socialLinks.linkedin && (
              <>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover font-medium underline underline-offset-2 transition-colors"
                >
                  LinkedIn
                </a>
                {profile.socialLinks.github && " or "}
              </>
            )}
            {profile.socialLinks.github && (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover font-medium underline underline-offset-2 transition-colors"
              >
                GitHub
              </a>
            )}
            .
          </p>
        </div>
      </SectionLayout>
    </div>
  );
}
