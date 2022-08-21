/* 
    MERGE vs REBASE vs CHERRY-PICK
    ---
        Merge (non fast-forward)
        ---
            -> Create merge commit
                ...New commit

        Rebase
        ---
            -> Change single commit's parent
                ...New commit ID(s)

        Cherry-Pick
        ---
            -> Add specific commit to branch (HEAD)
                ...Copies commit with new ID
*/
