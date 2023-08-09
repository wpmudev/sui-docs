#!/bin/bash
remote="$1"
branch="$2"

Red='\033[0;31m'          # Red
Green='\033[0;33m'        # Green
Purple='\033[0;35m'       # Brown/Purple
NC='\033[0m'              # No Color


if [ -z "$remote" ]; then
  echo -e "${Red}Whoops, it seems you forgot to provide the remote name. \nHere's an example of how to use it: sync.sh REMOTE_NAME BRANCH_NAME"
  exit
fi

if [ -z "$branch" ]; then
  echo -e "${Red}Whoops, it seems you forgot to provide the branch name. \nHere's an example of how to use it: sync.sh REMOTE_NAME BRANCH_NAME"
  exit
fi

REPOS=("packages/sui-react" "packages/sui-css" "packages/sui-icons")

echo -e "${Green}SUI 3 Syncing existing repositories. Here are the details:\n${NC}"
echo -e "Remote: ${remote}\nBranch: ${branch}\n------\n"

echo -e "${Purple}Updating sui-docs, please wait...${Green}"
git pull "$remote" "$branch"

for repo in "${REPOS[@]}"; do
  echo -e "\n${Purple}Updating ${repo}, please wait...${Green}"

  if [ -d "$repo" ]; then
    pushd "$repo" > /dev/null && git pull "$remote" "$branch"
    popd > /dev/null || exit
  else
    echo -e "${Red}ERROR: ${repo} is missing. \nPlease clone it first: git clone git@github.com:sui${repo//packages/}.git${NC}"
  fi
done
