// src/components/DynamicContent.tsx
import React from 'react';

interface DynamicContentProps {
  domain: 'developer' | 'devops' | 'data-engineering';
}

const DynamicContent: React.FC<DynamicContentProps> = ({ domain }) => {
  const content = {
    developer: {
      title: 'Developer',
      description: 'Building robust applications using modern programming languages and frameworks.',
      skills: ['React', 'TypeScript', 'Python', 'Flask'],
      projects: [
        { name: 'Portfolio Website', description: 'Built with React and TailwindCSS.' },
        { name: 'Chat App', description: 'Real-time chat application using WebSockets.' },
      ],
    },
    devops: {
      title: 'DevOps',
      description: 'Ensuring seamless CI/CD pipelines and efficient infrastructure management.',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD'],
      projects: [
        { name: 'K8s Cluster Setup', description: 'Automated setup for scalable web services.' },
        { name: 'CI/CD Pipeline', description: 'Configured pipelines with Jenkins and GitHub Actions.' },
      ],
    },
    'data-engineering': {
      title: 'Data Engineering',
      description: 'Designing and maintaining scalable data pipelines for analytics and reporting.',
      skills: ['Apache Airflow', 'BigQuery', 'ETL Pipelines'],
      projects: [
        { name: 'ETL Pipeline', description: 'Designed for an NBFC with medallion architecture.' },
        { name: 'Data Lake', description: 'Built a data lake using AWS S3 and Athena.' },
      ],
    },
  }[domain];

  return (
    <section className="p-6 bg-white shadow-md rounded mb-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">{content.title}</h2>
      <p className="mt-4 text-gray-700">{content.description}</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Key Skills</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {content.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Highlighted Projects</h3>
        <ul className="mt-2 space-y-2">
          {content.projects.map((project) => (
            <li key={project.name} className="bg-gray-100 p-4 rounded shadow">
              <h4 className="font-bold text-gray-800">{project.name}</h4>
              <p className="text-gray-600">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DynamicContent;
