#!/bin/bash
clear
echo "--------------------------------------------------------------------------"
echo "Pushing Image ..."
echo

source ./input/tags.input

docker push rjgu/$IMAGE_TAG

docker push rjgu/$IMAGE_NAME:latest


echo
echo "--------------------------------------------------------------------------"
echo "Done."
echo
