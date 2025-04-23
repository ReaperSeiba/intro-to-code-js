Labels: Can be used to organize by name and color, useful for understanding what a file's purpose is for at a glance

Create umbrella issue
Sub issues related to umbrella issue

Always create issue branches off of a feature branch.

Feature branches branch off of main, and issue branches branch off of features.

STEPS:

1. Make sure you are on the feature branch.
2. Make sure you pull in (`git pull`) the latest changes after every pull request is merged.
3. While on the feature branch, create your issue branch by running 'git checkout -b INTRO-#-problem-name'
4. After hitting enter you should be on the new branch.
5. Only commit what matters to the branch itself
6. Commit always starts with the issue number 'git commit -m 'keyword' #x message'
7. On Github (can ctrl click from prev commit) switch base repository to my own and base branch to corresponding feature. | Manual Pull Request, New Pull Request, My Repo, Change base branch, change issue branch
8. Create Pull Request | Name [CODE-# Title] | Add reviewer, assignee, labels, projects, milestone
9. Description: # Parent as header #IssueNum to link

Pull Request: A pull request is a code review that a reviewer can pull up to add feedback on submitted code.

11. Wait for an approval. Once the PR is approved you will be able to squash and merge.
12. After the squash and merge is complete delete the branch.
13. Go back to your terminal - `git pull` the latest changes; this brings in all changes, but does not apply them all
14. Checkout your feature branch; you should see a message like the following

```
git checkout feature/grind-75
Switched to branch 'feature/grind-75'
Your branch is behind 'origin/feature/grind-75' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)
```

16. `git pull` your feature branch; this will fast-forward your local and remote branches so they are in sync
17. Once your branches are in sync, you can then create your next issue branch; basically go back to step 3 and go from there.
