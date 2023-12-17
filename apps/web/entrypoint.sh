#!/bin/sh

# Wait for the CMS service to be ready
until nc -z -w 1 cms 3001; do
  echo "Waiting for CMS service to be ready..."
  sleep 1
done

# Run the actual command (e.g., start your application)
# Build the Next site including SSG
npm run build

# Start the production server
npm run start
