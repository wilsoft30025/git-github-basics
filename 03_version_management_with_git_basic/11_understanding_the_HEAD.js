/* 
    UNDERSTANDING THE HEAD
    ---
        Let's say we are currently in the "master branch" with 3 commits i.e
            --------------
            branch: master
            --------------
                c.1
                    c.2
                        c.3

                    NOTE: 
                        whenever we use the "checkout" command, especially from the master branch, the "LAST COMMIT" which is 
                        "c.3" will be the HEAD

                        It is the HEAD because by checking out the branch we are refering to a specific branch which indirectly points to the lastest commit in this branch


        Another scenario with the other branch
            --------------
            branch: other
            --------------
                c.1
                    c.2
                        c.3
                            c.4

                    NOTE: 
                        whenever we use the "checkout" command, especially switching from "other branch" to "master branch", the last commit which is "c.4" is supposed to be the HEAD
*/
