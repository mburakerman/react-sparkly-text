# ✨ react-sparkly-text

## 🐳 Docker Setup

> 🗒️ `frontend` is our container name. you can replace it with your container name

1. Run this command to build the image on your local machine and start the container. You only need to run this command the first time, and whenever you make changes to docker-compose.yml.

`docker-compose up --build --no-recreate -d`
`docker-compose build --no-cache`

<br />

2. From the second time, we can use

`docker-compose up -d`

<br />

3. Now our container is up and you should be able to test it using the following command.

`docker-compose ps`

<br />

4. Stop container

`docker stop frontend`
