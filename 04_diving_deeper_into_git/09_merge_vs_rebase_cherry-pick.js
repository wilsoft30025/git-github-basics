/* 
    MERGE vs REBASE vs CHERRY-PICK
    ---
        Merge (non fast-forward)
        ---
            -> Create MERGE commit
                ...New commit is created

        Rebase
        ---
            -> Change SINGLE commit's parent
                ...New commit ID(s)

        Cherry-Pick
        ---
            -> Add SPECIFIC COMMIT to a SPECIFIC BRANCH (HEAD)
                ...Copies commit with new ID
*/
