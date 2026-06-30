import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Eye, ExternalLink, Code2 } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

const languageColors: Record<string, string> = {
  HTML: '#E34F26',
  CSS: '#1572B6',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3776AB',
  Java: '#007396',
  'C++': '#00599C',
  C: '#A8B9CC',
  'C#': '#239120',
  PHP: '#777BB4',
  Ruby: '#CC342D',
  Go: '#00ADD8',
  Rust: '#DEA584',
  Swift: '#F05138',
  Kotlin: '#7F52FF',
  Dart: '#0175C2',
  Shell: '#89E051',
  Vue: '#4FC08D',
  React: '#61DAFB',
};

const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [reposRes, userRes] = await Promise.all([
          fetch('https://api.github.com/users/Kevin06160607-KK/repos?sort=updated&per_page=6'),
          fetch('https://api.github.com/users/Kevin06160607-KK'),
        ]);

        const reposData = await reposRes.json();
        const userData = await userRes.json();

        setRepos(reposData);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section id="github" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-accent text-sm font-semibold tracking-wider uppercase mb-3 block">Open Source</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real-time GitHub profile statistics and latest repositories
          </p>
        </motion.div>

        {/* Stats Cards */}
        {user && (
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            {[
              { label: 'Repositories', value: user.public_repos, color: '#00F5D4' },
              { label: 'Followers', value: user.followers, color: '#FF2E88' },
              { label: 'Following', value: user.following, color: '#FFD700' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center glass-card-hover"
              >
                <div className="text-3xl sm:text-4xl font-bold font-display mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <p className="text-text-secondary text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Contribution Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 mb-12 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold font-display flex items-center gap-2">
              <Github className="w-5 h-5 text-primary-accent" />
              Contribution Activity
            </h3>
            <a
              href="https://github.com/Kevin06160607-KK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-accent hover:underline flex items-center gap-1"
            >
              View Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {Array.from({ length: 140 }).map((_, i) => {
              const intensity = Math.random();
              const colors = [
                'rgba(255,255,255,0.05)',
                'rgba(0,245,212,0.2)',
                'rgba(0,245,212,0.4)',
                'rgba(0,245,212,0.6)',
                'rgba(0,245,212,0.8)',
              ];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.005 }}
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm"
                  style={{ backgroundColor: colors[Math.floor(intensity * colors.length)] }}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-end gap-2 mt-3 text-xs text-text-secondary">
            <span>Less</span>
            {['rgba(255,255,255,0.05)', 'rgba(0,245,212,0.2)', 'rgba(0,245,212,0.4)', 'rgba(0,245,212,0.6)', 'rgba(0,245,212,0.8)'].map((c, i) => (
              <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
            ))}
            <span>More</span>
          </div>
        </motion.div>

        {/* Repositories */}
        <div className="grid md:grid-cols-2 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-white/5 rounded w-3/4 mb-4" />
                <div className="h-4 bg-white/5 rounded w-full mb-2" />
                <div className="h-4 bg-white/5 rounded w-2/3" />
              </div>
            ))
          ) : (
            repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="glass-card rounded-2xl p-6 glass-card-hover transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-primary-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-display group-hover:text-gradient transition-all duration-300">
                        {repo.name}
                      </h3>
                      <p className="text-xs text-text-secondary/60">Updated {formatDate(repo.updated_at)}</p>
                    </div>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-text-secondary hover:text-primary-accent transition-colors" />
                  </a>
                </div>

                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs text-text-secondary">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: languageColors[repo.language] || '#CBD5E1' }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-xs text-text-secondary">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-secondary">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
