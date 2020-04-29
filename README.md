1. Paste your `.jj` file into the directory and rename it `src.jj` (the script will compile it)
2. Run the program and pass the entry point:
```
node test [target] [fast]
```

---

The target is the name of the main class, so instead of doing this: `java Parser <source.txt`

Test it with this Node program by doing this: `node test Parser`

To suppress error output and speed demon all the tests asynchronously: `node test Parser fast`

---

The script compiles your ``src.jj`` file via the ``javacc`` command. If you have not set the PATH environmental variable or wish to use a different command to compile it, go into [test.js](test.js) and modify the call to ``javacc``.
