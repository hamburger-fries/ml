#!/bin/bash

# Function to check if last command was successful
check_status() {
    if [ $? -ne 0 ]; then
        echo "Error occurred. Exiting."
        exit 1
    fi
}

# 1. Status Check
echo "Checking status..."
git status
check_status

# 2. Pull
echo "Pulling changes..."
git pull
check_status

# 3. Push + Commit
echo "Adding changes..."
git add .
check_status

echo "Committing changes..."
git commit -m "More stuff"
check_status

echo "Pushing changes..."
git push
check_status

# 4. Sync
echo "Syncing with remote..."
git fetch --all
check_status

echo "Git operations completed successfully."
