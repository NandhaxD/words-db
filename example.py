import json
import random


def get_random_word():
    with open('words.json') as f:
        words = json.load(f)
    random_word = random.choice(words)
    return random_word