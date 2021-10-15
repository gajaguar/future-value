#!/bin/bash

echo "=> Building image. It can take several minutes..."
echo "   running: docker-compose build -q"
echo ""
docker-compose build -q

echo ""
echo "=> Installing dependencies..."
echo "   running: docker-compose run --rm package yarn"
echo ""
docker-compose run --rm package pnpm i

echo ""
echo "=> Edit code locally and use 'run' compose command"
echo "   to execute a npm script in the container"
echo ""
echo "NOTE: If preferred can add the next alias to '~/.bash_aliases':"
echo "alias yarn='docker-compose run --rm server pnpm'"
echo "To substitute the local command for the command in the container"
echo ""
