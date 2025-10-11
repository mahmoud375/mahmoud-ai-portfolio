"use client";

import { useState } from "react";
import SectionLayout from "@/components/SectionLayout";
import ProfileImage from "@/components/ProfileImage";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { profile, experiences, projects } from "@/lib/data";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgvnnpbw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 8000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 8000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 8000);
    }
  };

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
      <SectionLayout title="" id="contact" noDivider>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-primary font-medium mb-3">Let&apos;s talk</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Contact
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Have a question or a project in mind? Feel free to reach out.
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={formStatus === "sending"}
                    placeholder="Name"
                    className="w-full px-5 py-4 text-base bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={formStatus === "sending"}
                    placeholder="Email"
                    className="w-full px-5 py-4 text-base bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    disabled={formStatus === "sending"}
                    placeholder="Message"
                    className="w-full px-5 py-4 text-base bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Success/Error Messages */}
                {formStatus === "success" && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-center font-medium">
                      ✓ Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-center font-medium">
                      ✗ Failed to send message. Please try again.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full py-4 px-6 text-base bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formStatus === "sending" ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
