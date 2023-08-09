/* 
    UNDERSTANDING THE HEAD
    ---
        Let's say we are currently in the "master branch" with 3 commits i.e
            ------
            master
            ------
                c.1
                    c.2
                        c.3

                    NOTE: 
                        whenever we use the "CHECKOUT" command, especially from the MASTER branch, the "LAST COMMIT" which is 
                        "c.3" will be the HEAD

                        It is the HEAD because by checking out the branch we are referring to a specific branch which indirectly points to the LATEST commit in this branch. This is the DEFAULT behavior we have in GIT


        Another scenario with the OTHER BRANCH
            -----
            other
            -----
                c.1
                    c.2
                        c.3
                            c.4

                    NOTE: 
                        whenever we use the "checkout" command, especially switching from "OTHER BRANCH" to "MASTER BRANCH", the last commit which is "c.4" is supposed to be the HEAD
*/
