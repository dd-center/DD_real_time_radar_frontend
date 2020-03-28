#!/usr/bin/env bash
rm -r html
npm run build
mv dist html
scp -r html/ root@47.240.116.247:/home/user/folder
#scp -r html/ root@47.240.116.247:/var/www