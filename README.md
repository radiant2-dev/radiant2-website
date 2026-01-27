# Radiant2

[![CI](https://github.com/radiant2-dev/radiant2-website/actions/workflows/ci.yaml/badge.svg)](https://github.com/radiant2-dev/radiant2-website/actions/workflows/ci.yaml)

Radiant2 main homepage.

## Repository layout

Setup follows standard Vite project.

Tech stack is: Vite, JavaScript, React, Tailwind, Shadcdn.

- Main app and pages are in `src`
- Static assets are in `public`

## Setup

Manage the project using standard `npm` commands:

- Run dev: `npm run dev`
- Run build: `npm run build`
- Run linting (via `eslint`): `npm run lint`
- Format (via `prettier`): `npm run format`
- Check formatting: `npm run format:check`

## Deployment

The deployment is done via GitHub pages using the `deploy` GitHub Action. The
GitHub provided URL is: https://radiant2-dev.github.io/radiant2-website.

DNS setup for radiant2.dev domain is done using Cloudflare.
