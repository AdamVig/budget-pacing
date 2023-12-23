FROM nginx:alpine

COPY app.js favicon.ico icon.png icon.svg index.html site.webmanifest /usr/share/nginx/html
COPY default.conf.template /etc/nginx/templates

LABEL org.opencontainers.image.source="https://github.com/AdamVig/budget-pacing"
LABEL org.opencontainers.image.licenses="MIT"
LABEL org.opencontainers.image.title="budget-pacing"
LABEL org.opencontainers.image.description="Web application to view monthly pace of spending."
