const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];
for (const lang of languages) process.stdout.write(lang + (lang !== languages[languages.length - 1] ? "\n" : ""));
