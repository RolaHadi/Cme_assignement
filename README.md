# Cme_assignement

To start the database , run this command on docker

docker run --rm --name mypostgres -e POSTGRES_DB=rola -e POSTGRES_USER=rola -e POSTGRES_PASSWORD=rola -p 5432:5432 postgres:11.4

If you are running docker with docker ToolBox, check the ip on docker toolbox and replace in the .properties in the backend. If you are using docker on your cmd replace the ip by localhost

spring.datasource.url=jdbc:postgresql://192.168.99.101:5432/rola

To access the database you can run "docker exec -it mypostgres psql -U rola" in your cmd
