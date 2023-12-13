pm2 kill;

git pull origin;

turbo build --filter api;
cd apps/api;
pm2 start 'npm run serve' --name cms;

cd ../../;

turbo build --filter web;
cd apps/web;
pm2 start 'npm run start' --name web;
