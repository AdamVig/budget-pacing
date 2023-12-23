# Budget Pacing

Web application to view monthly pace of spending with YNAB (You Need A Budget).

## Deployment with Docker Compose

```yml
budget-pacing:
  image: ghcr.io/adamvig/budget-pacing:latest
  ports:
    - "8080:80"
  environment:
    # YNAB personal access token from https://app.ynab.com/settings/developer
    - YNAB_TOKEN=
```
