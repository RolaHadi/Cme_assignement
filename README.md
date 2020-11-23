# Cme_assignement

To start the backend run the following commande on docker
docker run --rm --name mypostgres -e POSTGRES_DB=rola -e POSTGRES_USER=rola -e POSTGRES_PASSWORD=rola -p 5432:5432 postgres:11.4

If you are using docker toolbox to run the container check the ip of docker toolbox and change it in application.properties.
If you are using the command line change the ip to localhost.
