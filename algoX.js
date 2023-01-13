

//// The length of the sentence (the number of characters).

const sentence1 = "Taiwo is a software developer."

var counter1 = 0;

for (var i = 0; i < sentence1.length; i++) {

    counter1++;

};
    return counter1


//// The number of words in the sentence (assuming that the words are separated by a single space).

const sentence2 = "Taiwo is also known as Herbs."

let counter2 = sentence2.split(' ')

    return counter2.length


//// The number of vowels in the sentence.

const sentence3 = "Herbs is also a plant." 

let vowels = "aeiou";

let counter3 = 0;

for (let i = 0; i < sentence3.length; i++) {
    if(vowels.indexOf(sentence3[i]) > -1){
        counter3 = counter3 + 1;
    }
}
return "number of vowel is: ",counter3

