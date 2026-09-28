# ILVORA Healthcare — GitHub + Admin

This package is the ILVORA single-page website with a GitHub-compatible admin panel.

## Website
- `index.html` is the public one-page site.
- `assets/` contains the site's images and videos.
- `data/content.json` stores editable public content.

## Admin
Open:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/admin/`

The admin updates `data/content.json` through the GitHub Contents API.

### GitHub token
Create a fine-grained GitHub Personal Access Token for this repository with:
- Repository access: Only the ILVORA repository
- Repository permissions: Contents = Read and write

The token is kept only in browser session storage and is not written to the repository.

## Editable sections
- Services
- Careers / vacancies
- Opportunity projects (Draft / Published)
- Gallery & Media
- Company registration details: legal name, registered office, Registration Number, CIN, GSTIN

### Media
Images/videos can be added by URL or uploaded into `assets/gallery/`. Keep direct GitHub uploads modest in size; large videos are better hosted elsewhere and added by URL.

## Deployment
Upload the contents of this package to the same GitHub repository that hosts the ILVORA website. Keep `index.html` at repository root and keep `assets`, `data`, and `admin` folders.
