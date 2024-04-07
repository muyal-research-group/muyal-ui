rm -rf dist dist.tar || true && npm run build && tar -cvf dist.tar dist && lz4 ./dist.tar && scp ./dist.tar.lz4 jcastillo@148.247.201.224:~/
