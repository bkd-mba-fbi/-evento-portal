# Evento Portal

[![Lint & Test ✨](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/test.yml)
[![Build & Deploy ZIP 📦](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/zip.yml/badge.svg?branch=main)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/zip.yml)
[![Build & Push Docker Image 🚀](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/docker.yml/badge.svg)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/docker.yml)
[![SBOM](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/bom.yml/badge.svg?branch=main)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/bom.yml)
[![Netlify main deploy](https://api.netlify.com/api/v1/badges/fccfe392-ffb5-4e40-b95a-5d319e431559/deploy-status)](https://app.netlify.com/sites/evtapp/deploys)

The _Evento Portal_ is used to integrate various applications for school administration in a single web portal with a common look and feel.

This project is realised with:

- [Vite](https://vitejs.dev/)
- [Lit](https://lit.dev/) with [lit-localize](https://lit.dev/docs/localization/overview/) and [@lit-app/state](https://github.com/lit-apps/lit-app/tree/main/packages/state).
- [Cypress](https://www.cypress.io/)

Download the [latest build](https://bkd-mba-fbi.github.io/evento-portal/evento-portal.zip).

## Contents

- [Setup & Development](./doc/development.md)
- [Browser Support](./doc/browser-support.md)
- [Architecture](./doc/architecture.md)
- [Authentication via OAuth 2.0](./doc/auth.md)
- [App Integration with iframe](./doc/app-integration.md)
- [Branching, Releasing & Deployment](./doc/releasing.md)
