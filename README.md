# Words Database
This repository contains a database of over 400,000 words with their definitions. The data is stored in a JSON file called `words.json`.

## Data Format
The `words.json` file contains a list of objects, each representing a word and its definition. The format is as follows:

```python
[
{
'word': 'apple',
'definition': 'a sweet, juicy fruit'
}, ...
]
```

## Usage
You can use this database for any purpose, such as building a dictionary app, generating word lists, or analyzing language patterns.

## Python Code to Get a Random Word
Here is an example Python code to open the `words.json` file and get a random word dictionary:

```python
import json
import random

with open('words.json') as f:
    words = json.load(f)

random_word = random.choice(words)
print(random_word)
```

⚡ **Made by**: [NandhaBots](https://github.com/nandhabots)

💬 **Contact**: [NandhaSupport](https://t.me/nandhasupport)
