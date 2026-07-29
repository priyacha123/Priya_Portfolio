import { GitFork, Star, Users, BookMarked } from "lucide-react";
import { siteConfig } from "@/config/site";

interface GithubUser {
  public_repos: number;
  followers: number;
  avatar_url: string;
}

interface GithubRepo {
  stargazers_count: number;
  forks_count: number;
}

async function getGithubStats() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${siteConfig.githubUsername}`, {
        next: { revalidate: 3600 }, // cache for 1 hour — keeps us under GitHub's rate limit
      }),
      fetch(
        `https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user: GithubUser = await userRes.json();
    const repos: GithubRepo[] = await reposRes.json();

    const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
    const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars,
      totalForks,
    };
  } catch {
    return null;
  }
}

export async function GithubStats() {
  const stats = await getGithubStats();

  // Fail quietly and small — a broken stats card shouldn't break the page
  if (!stats) return null;

  const items = [
    { icon: BookMarked, label: "Public repos", value: stats.publicRepos },
    { icon: Users, label: "Followers", value: stats.followers },
    { icon: Star, label: "Stars earned", value: stats.totalStars },
    { icon: GitFork, label: "Forks", value: stats.totalForks },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="rounded-lg border border-border bg-card p-4"
        >
          <Icon size={16} className="text-accent" />
          <p className="mt-3 font-display text-2xl font-bold text-text-primary">
            {value}
          </p>
          <p className="font-mono text-xs text-text-secondary">{label}</p>
        </div>
      ))}
    </div>
  );
}