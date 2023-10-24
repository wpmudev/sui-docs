#!/bin/bash

# path to components
COMPONENTS_DIR="./packages/sui-react/packages/components/"

# Loop through each folder in the components directory
for DIR in "$COMPONENTS_DIR"*/ ; do
    # Check if package.json exists inside the folder
    if [[ -f "${DIR}package.json" ]]; then
        # generate the README file
        ./node_modules/.bin/readme generate \
          --package "${DIR}package.json" \
          --output "${DIR}README.md"
    fi
done