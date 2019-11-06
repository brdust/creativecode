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

there = []
for word,pos, in blob.tags:
  if (pos == 'EX'):
    there.append(word)

pronoun = []
for word,pos in blob.tags:
  if (pos == 'PRP'):
    pronoun.append(word)

presverb = []
for word,pos in blob.tags:
  if (pos == 'VBP'):
    presverb.append(word)

plnoun = []
for word,pos in blob.tags:
  if (pos == 'NNS'):
    plnoun.append(word)

gerund = []
for word,pos in blob.tags:
  if (pos == 'VBG'):
    gerund.append(word)

# modal = [" "]
# for word,pos in blob.tags:
#   if (pos == 'MD'):
#     modal = []



    
for i in range(1):
  a1 = random.choice(adjectives)
  a2 = random.choice(adjectives)
  a3 = random.choice(adjectives)
  a4 = random.choice(adjectives)
  a5 = random.choice(adjectives)
  a6 = random.choice(adjectives)
  n1 = random.choice(nouns)
  n2 = random.choice(nouns)
  n3 = random.choice(nouns)
  n4 = random.choice(nouns)
  np1 = random.choice(nounphrase)
  np2 = random.choice(nounphrase)
  np3 = random.choice(nounphrase)
  vb1 = random.choice(verbs)
  vb2 = random.choice(verbs)
  t = random.choice(there)
  pv1 = random.choice(presverb)
  pv2 = random.choice(presverb)
  pv3 = random.choice(presverb)
  pl1 = random.choice(plnoun)
  pl2 = random.choice(plnoun)
  pl3 = random.choice(plnoun)
  pn1 = random.choice(pronoun)
  pn2 = random.choice(pronoun)
  g1 = random.choice(gerund)
  g2 = random.choice(gerund)
  g3 = random.choice(gerund)

  print('~' + a3 + " " + pl1 + "~")
  print (a1 + " " + np1)
  print (pn1 + " " + pv1 + " " + a2 + " " + n1)
  print ('there are ' + a3 + " " + pl1 + " " + g1 + " " + n2 + " ")
  print (a5 + " " + np2 + " " + pv2 + " " + vb1)
  print (pl2 + " " + g2 + " " + np3)
  print ('there are ' + a4 + " " + pl3 + " " + g3 + " " + n3 + " ")
  print (pn2 + " " + pv3 + " " + a6 + " " + n4)

