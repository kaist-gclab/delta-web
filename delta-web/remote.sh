sudo docker load --input docker-image.tar && \
(sudo docker stop delta-web || true) && \
(sudo docker rm delta-web || true) && \
sudo docker run -d --restart=unless-stopped \
--name delta-web delta-web