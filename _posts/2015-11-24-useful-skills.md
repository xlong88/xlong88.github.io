---
layout: post
title: Useful Git Commands
description: "useful skills"
tags: [Skill post]
image:
  background: triangular.png
---

## 1. Fast Commit
```
git commit -a -m "commit message"
```

## 2. Remember Credential on Windows
```
$ git config credential.helper store
$ git push http://example.com/repo.git
Username: <type your username>
Password: <type your password>

[several days later]
$ git push http://example.com/repo.git
[your credentials are used automatically]
```

## 3. Reset Last Commit
```
$ git commit -m "Something terribly misguided" # your last commit
$ git reset --soft HEAD^   # reset
```

It is extremely useful, when you encounter **LARGE** file problems

## 4. Skip Certain Changes
```
git update-index --no-skip-worktree <file>
git add -p <file>
git update-index --skip-worktree <file>
```

If you want skip (ignore) certain type of files, the following configuration can be applied: Edit file ".gitignore", and add the types you want to ignore, for example,

```
# ignore thumbnails created by windows
Thumbs.db
# Ignore files build by Visual Studio
*.user
*.aps
*.pch
*.vspscc
*_i.c
*_p.c
*.ncb
*.suo
*.bak
*.cache
*.ilk
*.log
[Bb]in
[Dd]ebug*/
*.sbr
obj/
[Rr]elease*/
_ReSharper*/
```
  
## Push Local Branch to New Remote Repository

Suppose you have made a empty repository and named it _myapp.git_, you can:
    
    git remote add <branch_name> <repository_url>

where _<branch\_name>_ can be any valid name you want. Then, you can push your local branch to the newly created remote repository by using

    git push <branch_name> master

    


