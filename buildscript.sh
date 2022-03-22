#!/bin/bash
# cd ~/satnik
git fetch
git reset origin/main --hard
npm i
npm run build
npx prisma db push
npx prisma generate
supervisorctl restart satnik