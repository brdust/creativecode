from google.colab import files

uploaded = files.upload()
for fn in uploaded.keys():
  text = uploaded[fn].decode('utf-8',errors="surrogateescape")

import random
  
import nltk
nltk.download('punkt')

import nltk
nltk.download('averaged_perceptron_tagger')

import nltk
nltk.download('brown')

from textblob import TextBlob
blob = TextBlob(text)

adjectives = []
for word,pos in blob.tags:
  if (pos == 'JJ'):
    adjectives.append(word)

nouns = []
for word,pos in blob.tags:
  if (pos == 'NN'):
    nouns.append(word)
verbs = []
for word,pos in blob.tags:
  if (pos == 'VB'):
    verbs.append(word)
    
nounphrase = []
for word,pos in blob.tags:
  if (pos == 'NNP'):
    nounphrase.append(word)

print('Poem of Facts')
    
for i in range(1):
  a1 = random.choice(adjectives)
  a2 = random.choice(adjectives)
  n1 = random.choice(nouns)
  np1 = random.choice(nounphrase)
  vb = random.choice(verbs)
  print(a1 + " " + n1 + " " +  vb  + " " + a2  + " " + np1)

for i in range(1):
  a1 = random.choice(adjectives)
  n1 = random.choice(nouns)
  np1 = random.choice(nounphrase)
  vb = random.choice(verbs)
  print(np1 + " " +  vb  + " " + a1  + " " + n1)

for i in range(1):
  print( blob.noun_phrases[random.randint(0,850)])
  print( blob.words[random.randint(0,12787)])
  
for i in range(1):
  vb = random.choice(verbs)
  print(vb)

for i in range(1):
  a1 = random.choice(adjectives)
  a2 = random.choice(adjectives)
  n1 = random.choice(nouns)
  np1 = random.choice(nounphrase)
  vb = random.choice(verbs)
  print(a1 + " " + n1 + " " +  vb  + " " + a2  + " " + np1)
  
for i in range(1):
  a1 = random.choice(adjectives)
  np1 = random.choice(nounphrase)
  np2 = random.choice(nounphrase)
  vb = random.choice(verbs)
  print(np1 + " " +  vb  + " " + a1  + " " + np2)

for i in range(1):
  a1 = random.choice(adjectives)
  np1 = random.choice(nounphrase)
  vb = random.choice(verbs)
  print(vb  + " " + a1  + " " + np1)
  
for i in range(1):
  vb = random.choice(verbs)
  print(vb)
