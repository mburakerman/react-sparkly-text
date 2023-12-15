# ✨ react-sparkly-text

## 🐳 Docker Setup

> 🗒️ `frontend` is our container name. you can replace it with your container name

1. Run this command to build the image on your local machine

`docker-compose build --no-cache`

<br />

2. Start it

`docker-compose up`

<br />

3. Now our container is up and you should be able to test it using the following command

`docker-compose ps`

<br />

4. Stop container

`docker stop frontend`

### Note:

- We added `/app/node_modules`
- With this configuration, `node_modules` directory from the host machine (specified by . in the volumes section) will be mounted to /app/node_modules inside the container. This allows your Docker container to access and use the dependencies
