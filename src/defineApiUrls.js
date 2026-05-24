/**
 * Defines API URLs based on the selected platform.
 *
 * This version is updated for a personal GitHub account, such as:
 * https://github.com/zoeduan
 *
 * Usage:
 * import { getPlatformApiUrls } from './defineApiUrls.js';
 *
 * Input:
 * platform: "github"
 * organizationName: GitHub username, for example "zoeduan"
 *
 * Output:
 * platformApiUrls[platform] = {
 *   org: USER_REPOS_API_URL,
 *   repo: REPO_API_URL
 * }
 */

/**
 * Utility function to get the platform-specific API URLs.
 *
 * For GitHub personal accounts, we use:
 * https://api.github.com/users/{username}/repos
 *
 * @param {string} platform - "github", pending: "gitlab" or "codeberg"
 * @param {string} organizationName - GitHub username, for example "zoeduan"
 * @returns {object} An object containing org and repo API URLs
 */
export function getPlatformApiUrls(platform, organizationName) {
    const platformApiUrls = {
        github: {
            // Personal GitHub account repositories
            org: `https://api.github.com/users/${organizationName}/repos?type=owner&per_page=100`,

            // Individual repository details
            repo: "https://api.github.com/repos/"
        },

        // GitLab support is under development
        // gitlab: {
        //     org: `https://gitlab.com/api/v4/users/${organizationName}/projects?per_page=100`,
        //     repo: "https://gitlab.com/api/v4/projects/"
        // },

        // Codeberg support is under development
        // codeberg: {
        //     org: `https://codeberg.org/api/v1/users/${organizationName}/repos?limit=50`,
        //     repo: "https://codeberg.org/api/v1/repos/"
        // }
    };

    return platformApiUrls[platform.toLowerCase()];
}
