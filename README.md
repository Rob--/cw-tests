1. Paste your `.jj` file into the directory and rename it `src.jj` (the script will compile it)
2. Run the program and pass the entry point:
```
node test [target] [fast]
```

---

The target is the name of the main class, so instead of doing this: `java Parser <source.txt`

Test it with this Node program by doing this: `node test Parser`

To suppress error output and speed demon all the tests asynchronously: `node test Parser fast`