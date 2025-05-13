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
5. Add ONLY what matters to the branch itself
6. Commit always starts with either the issue number or a commit keyword like "Closes"
   1. For your final commit to a branch, even if it's your one and only commit, you can structure the commit as follows:
   ```
   // If your issue number is 7
   git commit -m 'Closes #7 message detail what this final commit for this issue contains'
   ```
   2. If it's not your final commit, just omit the commit keyword
   ```
   // If your issue number is 7
   git commit -m '#7 message detail what this final commit for this issue contains'
   ```
7. On Github: open a new PR and be sure to switch the base repository to my own and base branch to corresponding feature.
   1. You can also access the "Create New PR for your pushed branch" GitHub page by Ctrl-Clicking the link that appears in the result message after pushing your branch for the first to origin.
   2. Remember, Manual Pull Request, New Pull Request, My Repo, Change base branch, change issue branch
8. Create Pull Request | "CODE-# Title" | Add reviewer, assignee, labels, projects, milestone
   1. If your PR is complete (no more work to be added and ready for review), create a Pull request
   2. If your PR is still in-progress, create a Draft Pull Request
9. Within the PR Description, add the following:

```md
# Parent

#issue-number (e.g. #7)
```

> [!NOTE]
> Pull Request: A pull request is a code review that a reviewer can pull up to add feedback on submitted code.

11. On finished PRs, address any feedback, make necessary changes until you get an approval.
    1.  Same with Draft PRs, but approval comes after it's converted to a regular PR and it's ready for full-review.
12. Once the PR is approved you will be able to squash and merge.
13. After the squash and merge is complete, delete the branch on Github.
14. Go back to your terminal; `git checkout` your feature branch
15. Then, `git pull` the latest changes; this brings in all changes made by your PR
    1.  your local branch is up to date; you may restart from step #3
16. Sometimes, when you pull BEFORE checking ouyt your feature branch, you will see a message like the following

```
git checkout feature/grind-75
Switched to branch 'feature/grind-75'
Your branch is behind 'origin/feature/grind-75' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)
```

16. `git pull` your feature branch; this will fast-forward your local and remote branches so they are in sync
17. Once your branches are in sync, you can then create your next issue branch; basically go back to step 3 and go from there.
