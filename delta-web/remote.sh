#!/usr/bin/env bash
IMAGE="delta-web"

(docker stop $IMAGE || true) && \
(docker rm $IMAGE || true) && \
docker run --init -d \
$DELTA_WEB_RUN_OPTIONS \
--restart=unless-stopped \
--log-opt max-size=16m --log-opt max-file=8 \
--name $IMAGE $IMAGE
