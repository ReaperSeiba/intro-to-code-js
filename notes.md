# Programming Notes

I've learned some cool things in a git terminal.

## Basic Git Instructions

1. MAKE SURE ALL OF YOUR FILES ARE SAVED
2. To stage files for a commit, we need to run `git add .`
   1. The `.` in the command represents your current directory, so you are telling git to add all of the files in the current directory to stage in preparation for a commit.
3. To check the progress of where our files are commit-wise we can run `git status`
   1. You can run this anytime as a freebie to check the status of your project in git.
4. To collect all of the files and the changes that have been made within we collect all of them in a commit. We want to make sure to provide a concise message that labels the contents of the commit as well. To create a commit out of your staged files, we run `git commit -m "your concise message detailing commit here"`
5. With our collection of changes put together into a commit, we can now send these changes to our remote online which serves as our online backup should anything happen to our local.
   1. Because this repo has two remotes it is important to keep in mind that you push to your origin.
   2. `git push origin`

I LOVE STEAK