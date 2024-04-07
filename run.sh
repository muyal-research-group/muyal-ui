#!/bin/bash
docker rm -f muyalui
docker build -f ./Dockerfile -t nachocode/muyal:ui .
docker run --name muyalui -p 80:80  --network=mictlanx -d nachocode/muyal:ui
