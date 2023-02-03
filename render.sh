#!/bin/bash

set -x
cd dist
busybox httpd -p 32212 -f &
prince http://127.0.0.1:32212 --page-margin=0 --page-size=letter -o './Manmeet Singh Resume.pdf'
kill $(jobs -p)
