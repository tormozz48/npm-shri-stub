For pull requests:

-   Be consistent with prevalent style and design decisions.
-   Use `npm test` to avoid regressions.
-   If you would be so kind, add a note to `CHANGELOG.md` in an
    appropriate section:

    -   `Next Major Version` if it introduces backward incompatibilities
        to code in the wild using documented features.
    -   `Next Minor Version` if it adds a new feature.
    -   `Next Patch Version` if it fixes a bug.

For releases:

-   Run `npm test`.
-   Stash any local changes.
-   Update `CHANGELOG.md` to reflect all changes in the differences
    between `HEAD` and the previous tagged version.  Give credit where credit is due.
-   Update `README.md` to address all new, non-experimental features.
-   Use `npm version major|minor|patch` to update `package.json`,
    commit, and tag the new version.
-   Use `npm publish` to send up a new release.
