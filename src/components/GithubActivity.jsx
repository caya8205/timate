import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// SVG Icon components
const Icons = {
    Push: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
    ),
    PR: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" />
            <path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
        </svg>
    ),
    Issue: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    ),
    Create: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    ),
    Delete: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
    ),
    Star: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
    Fork: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" />
            <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" /><path d="M12 12v3" />
        </svg>
    ),
    Comment: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    ),
    Member: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" />
        </svg>
    ),
    Repo: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    ),
};

// Team members config — add more members here
const TEAM_MEMBERS = [
    { username: 'caya8205', displayName: 'caya8205' },
    { username: 'yudha556', displayName: 'yudhaaaa' },
    { username: 'Davergyn', displayName: 'DavinVergian' },
];

// Map of event types to display info
const EVENT_CONFIG = {
    PushEvent: {
        label: 'Push',
        color: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
        icon: Icons.Push,
        getMessage: (event) => {
            const commits = event.payload.commits;
            if (!commits || commits.length === 0) return 'Pushed code';
            if (commits.length === 1) return commits[0].message.split('\n')[0];
            return `${commits.length} commits — ${commits[0].message.split('\n')[0]}`;
        },
    },
    PullRequestEvent: {
        label: 'PR',
        color: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
        icon: Icons.PR,
        getMessage: (event) => {
            const action = event.payload.action;
            const title = event.payload.pull_request?.title || '';
            return `${action} PR: ${title}`;
        },
    },
    IssuesEvent: {
        label: 'Issue',
        color: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
        icon: Icons.Issue,
        getMessage: (event) => {
            const action = event.payload.action;
            const title = event.payload.issue?.title || '';
            return `${action} issue: ${title}`;
        },
    },
    CreateEvent: {
        label: 'Create',
        color: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
        icon: Icons.Create,
        getMessage: (event) => {
            const refType = event.payload.ref_type;
            const ref = event.payload.ref;
            return ref ? `Created ${refType}: ${ref}` : `Created ${refType}`;
        },
    },
    DeleteEvent: {
        label: 'Delete',
        color: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
        icon: Icons.Delete,
        getMessage: (event) => {
            return `Deleted ${event.payload.ref_type}: ${event.payload.ref}`;
        },
    },
    WatchEvent: {
        label: 'Star',
        color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
        icon: Icons.Star,
        getMessage: () => 'Starred this repo',
    },
    ForkEvent: {
        label: 'Fork',
        color: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
        icon: Icons.Fork,
        getMessage: (event) => {
            return `Forked to ${event.payload.forkee?.full_name || 'a new repo'}`;
        },
    },
    IssueCommentEvent: {
        label: 'Comment',
        color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
        icon: Icons.Comment,
        getMessage: (event) => {
            const body = event.payload.comment?.body || '';
            return body.length > 80 ? body.substring(0, 80) + '…' : body;
        },
    },
    MemberEvent: {
        label: 'Member',
        color: 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
        icon: Icons.Member,
        getMessage: (event) => {
            return `${event.payload.action} member: ${event.payload.member?.login || ''}`;
        },
    },
};

const GithubActivity = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Build display name lookup from team config
    const displayNameMap = Object.fromEntries(
        TEAM_MEMBERS.map((m) => [m.username.toLowerCase(), m.displayName])
    );

    useEffect(() => {
        const fetchAllEvents = async () => {
            try {
                const promises = TEAM_MEMBERS.map((member) =>
                    fetch(`https://api.github.com/users/${member.username}/events/public?per_page=10`)
                        .then((res) => {
                            if (!res.ok) throw new Error(`Failed for ${member.username}`);
                            return res.json();
                        })
                        .catch(() => []) // If one user fails, don't break the rest
                );

                const results = await Promise.all(promises);

                // Merge all events, sort by date (newest first), take top 8
                const allEvents = results
                    .flat()
                    .filter((event) => EVENT_CONFIG[event.type]) // Only supported event types
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                    .slice(0, 8);

                setEvents(allEvents);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Could not load activity');
                setLoading(false);
            }
        };

        fetchAllEvents();
    }, []);

    // Helper to format relative time
    const getRelativeTime = (dateString) => {
        const now = new Date();
        const date = new Date(dateString);
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);
        const diffWeeks = Math.floor(diffDays / 7);

        if (diffMins < 1) return 'just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        if (diffWeeks < 4) return `${diffWeeks}w ago`;
        return date.toLocaleDateString();
    };

    // Get the link URL for an event
    const getEventUrl = (event) => {
        const repoName = event.repo.name;
        switch (event.type) {
            case 'PushEvent':
                return `https://github.com/${repoName}/commit/${event.payload.head}`;
            case 'PullRequestEvent':
                return event.payload.pull_request?.html_url || `https://github.com/${repoName}`;
            case 'IssuesEvent':
                return event.payload.issue?.html_url || `https://github.com/${repoName}`;
            case 'IssueCommentEvent':
                return event.payload.comment?.html_url || `https://github.com/${repoName}`;
            case 'ForkEvent':
                return event.payload.forkee?.html_url || `https://github.com/${repoName}`;
            default:
                return `https://github.com/${repoName}`;
        }
    };

    if (error) return null;

    return (
        <section className="py-20 px-4 md:px-0 container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center dark:text-white flex items-center justify-center gap-4">
                <img src="https://skillicons.dev/icons?i=github&theme=light" className="w-10 h-10 rounded-full bg-white" alt="GitHub" />
                Team <span className="text-yellow-500">Activity</span>
            </h2>

            {loading ? (
                <div className="flex justify-center p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
                </div>
            ) : events.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400">No recent activity found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events.map((event) => {
                        const config = EVENT_CONFIG[event.type];
                        const actorLogin = event.actor.display_login || event.actor.login;
                        const displayName = displayNameMap[actorLogin.toLowerCase()] || actorLogin;

                        return (
                            <motion.a
                                href={getEventUrl(event)}
                                target="_blank"
                                rel="noreferrer"
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group block"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1.5 ${config.color}`}>
                                            <config.icon /> {config.label}
                                        </span>
                                    </div>
                                    <span className="text-gray-400 text-sm">
                                        {getRelativeTime(event.created_at)}
                                    </span>
                                </div>

                                {/* Repo name */}
                                <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-2 truncate flex items-center gap-1.5">
                                    <Icons.Repo /> {event.repo.name}
                                </p>

                                {/* Event message */}
                                <p className="font-mono text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                                    {config.getMessage(event)}
                                </p>

                                {/* Actor */}
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm gap-2 mt-auto">
                                    <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                        <img src={event.actor.avatar_url} alt={actorLogin} />
                                    </div>
                                    <span className="font-medium group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                                        {displayName}
                                    </span>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default GithubActivity;
