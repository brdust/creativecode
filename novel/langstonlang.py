import random
import textblob
with open("langstonsapir.txt") as f:
    text = f.read()

novel = ''
text_model = markovify.Text(text)


for i in range(10000):
    novel += str(text_model.make_sentence()) + " "
    s = random.randrange(0,10)
    if (s <3):
      novel += "\n"

print(novel)
with open('langstonlang.txt', 'w') as f:
  f.write(novel)
