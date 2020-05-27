#!/bin/bash
clear
echo "--------------------------------------------------------------------------"
echo "Create run-interactive.sh"

source ./input/tags.input

echo "removing container ..."
docker rm -f $CONTAINER_NAME


# create run-interactive.sh
RUN_SCRIPT_NAME="run-interactive.sh"
echo "creating $RUN_SCRIPT_NAME ..."
cat ./input/header.input > ./generated/$RUN_SCRIPT_NAME

cat ./input/tags.input >> ./generated/$RUN_SCRIPT_NAME

cat ./input/credentials.input >> ./generated/$RUN_SCRIPT_NAME

cat ./input/run-interactive.input >> ./generated/$RUN_SCRIPT_NAME

chmod u+x ./generated/$RUN_SCRIPT_NAME

echo
echo "--------------------------------------------------------------------------"
echo "Done."
echo

echo
echo "--------------------------------------------------------------------------"
echo "Generated $RUN_SCRIPT_NAME:"
echo

cat ./generated/$RUN_SCRIPT_NAME

echo
echo "script: ./generated/$RUN_SCRIPT_NAME"
echo

# The end.
