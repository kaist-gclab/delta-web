#!/usr/bin/env bash
docker load --input docker-image.tar && \
(docker stop delta-web || true) && \
(docker rm delta-web || true) && \
docker run -d --restart=unless-stopped \
--name delta-web delta-web && \
rm docker-image.tar
