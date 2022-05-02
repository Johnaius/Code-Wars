// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.





function DNAtoRNA(dna) {
    return dna.replace(/T/g,'U')
    
  // googled this, since .replaceAll() "is not a function"  :
  //  As a substitute for String.prototype.replaceAll(), use the 
  //  String.prototype.replace() method with a regular expression that has the 
  //  global ("g") flag set. It works in the same way and has great browser support.
  // Note that the String.prototype.replaceAll() method was added in ES2021/ES12.
  }