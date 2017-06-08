docker-compose stop $1
docker-compose rm -vf
docker-compose build $1
docker-compose up $1