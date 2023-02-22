#!/bin/bash

cd /home/ubuntu/jgc_web && sudo pnpm install && sudo pnpm run build && sudo pm2 kill && sudo pm2 start pnpm --name "jgc-web" -- start