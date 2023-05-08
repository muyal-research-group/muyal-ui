rm -rf dist dist.tar || true && npm run build && tar -cvf dist.tar dist && scp ./dist.tar jcastillo@148.247.201.224:~/
