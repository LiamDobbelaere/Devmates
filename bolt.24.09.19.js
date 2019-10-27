function reverseWords(inputString) {
  let reversed = "";
  let word = "";
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (char !== " ") {
      word = char + word;
    } else {
      reversed += word + " ";
      word = "";
    }
  }

  reversed += word;

  return reversed;
}

console.log(reverseWords("hello this is amadeo"));
