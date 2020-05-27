#!/bin/bash
clear
echo "--------------------------------------------------------------------------"
echo "Building Docker Image ..."
echo


source ./input/tags.input

echo "removing container ..."
docker rm -f $IMAGE_NAME-latest

echo "removing image ..."
docker rmi -f $IMAGE_TAG

# Build Docker image

docker build --no-cache --tag $IMAGE_TAG -f ./Dockerfile ./context

docker tag $IMAGE_TAG $REPO/$IMAGE_TAG

docker tag $IMAGE_TAG $REPO/$IMAGE_NAME:latest

# create run.sh
echo "creating run.sh ..."
cat ./input/header.input > ./generated/run.sh

cat ./input/tags.input >> ./generated/run.sh

cat ./input/credentials.input >> ./generated/run.sh

cat ./input/run.input >> ./generated/run.sh

chmod u+x ./generated/run.sh

echo
echo "--------------------------------------------------------------------------"
echo "Done."
echo

echo
echo "--------------------------------------------------------------------------"
echo "Generated run.sh:"
echo

cat ./generated/run.sh

echo
echo "--------------------------------------------------------------------------"
echo "./generated/run.sh"
echo "--------------------------------------------------------------------------"
echo

# The end.
