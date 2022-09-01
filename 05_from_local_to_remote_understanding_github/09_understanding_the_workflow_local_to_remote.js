/* 
    MORE BRANCHES?
    ---
        Now in the previous lesson after pushing to GitHub, on our local machine when we initiated 
        ---
        "git branch -a" 
        --- 
            ...we saw the ff. results below
              -------------------
              * main
              remotes/origin/main
              -------------------
                With "git remote origin" we established a connection between our LOCAL Repo and the REMOTE Repo. 
                Take note that is not related to our branches until we pushed something to the remote repo.

                Let's see this from a theoretical perspective; 
                    ----------------------
                    Local Branch ---> main
                    ----------------------
                        when we run the command "git push -uorigin HEAD:main", what happened behind the scenes is that git created
                            ----------------------------------------------
                            Remote Tracking branch ---> remote/origin/main
                            ----------------------------------------------
                                ...that was the red branch we saw when we executed the command "git branch -a". The Remote Tracking Branch is basically BETWEEN our LOCAL and REMOTE branches.

                                    -> It can be termed as a LOCAL COPY of the Remote Branch i.e local copy of our master branch is copied into the remote master tracking branch
                                    
                                ...as soon as the remote tracking branch was created, we add the changes to our main branch and that is now the remote branch in our origin repo
                                    ---------------------------------------------
                                    Remote Branch ("origin" repository) ---> main
                                    ---------------------------------------------

                                So the Flow is if you run "git push origin main", understand that there is no DIRECT CONNECTION between our LOCAL and REMOTE branches, ANY KIND OF push and pull operations always involve a "Remote Tracking Branch". And this "Remote Tracking Branch" is a Local Copy of the remote branch.
                                    This process is not only for PUSH but also for PULL operations. This works with
                                        ----------------------
                                        git pull origin master
                                        ----------------------

                                NOTE:
                                    There is no direct connection between the Local and Remote Branch
                                        ------------
                                        Local Branch
                                        ------------
                                            ...this is Locally on our machine

                                        -------------
                                        Remote Branch
                                        -------------
                                            ...this is the branch on GitHub

                                        ----------------------
                                        Remote Tracking Branch
                                        ----------------------
                                            ...this is a Local Read Only Copy of the Remote Branch that we always update it when u push or pull information and then finally update the Local or Remote Branch

                                            This is the reason why we always have to add the "origin" and branch name to our push or pull commands
*/
