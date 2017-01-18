SPECS:

  program does nothing to non-alphabetical characters, since they do not contain consonants or vowels
  eg: input:3 output:3

  Program adds "ay" to single letter words beginning with a vowel.
  eg: input: "i" output: "iay"

  program moves beginning consonant to end of word plus "ay"
  eg: input: "pig" ouput: "igpay"

  word beginning in vowel add "ay" to the end of the word.
  eg: input: "apple" output:"appleay"

  words with more than one consonant move all to back and add "ay"
  eg: input: "charmander" output:"armanderchay"

  words beginning with "qu" move to back and add "ay"
  eg: input: "queen" output: "eenquay"

  treat "y" as a consonant
  eg: input: yay output: ayyay
