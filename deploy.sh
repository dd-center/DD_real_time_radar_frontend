#!/usr/bin/env bash
rm -r html
npm run build
mv dist html
#scp -r html/ root@8.210.51.250:/home/user/folder
#scp -r html/ root@8.210.51.250:/var/www

#scp -r html/ feixue@20.48.1.127:/home/feixue/folder
scp -r html/ feixue@20.48.1.127:/var/www

# TempPassword114