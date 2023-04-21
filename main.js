// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

/*
const pAequorFactory = (num, dnaArr) => {
  return {
    specimenNum: num,
    dna: dnaArr,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (newBase === this.dna[randIndex]) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      const identicalBases = this.dna.reduce((acc, curr, idx, arr) => {
        if (pAequor.dna[idx] === curr) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const percentIdentical = ((identicalBases / this.dna.length) * 100).toFixed(2);
      console.log(`${this.specimenNum} and ${pAequor.specimenNum} have ${percentIdentical}% DNA in common.`);
    },
    willLikelySurvive() {
      const cOrGCount = this.dna.filter(base => base === 'C' || base === 'G').length;
      const percentCG = (cOrGCount / this.dna.length) * 100;
      return percentCG >= 60;
    },
    complementStrand() {
      const basePairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
      };
      return this.dna.map(base => basePairs[base]);
    }
  }
};

//console.log(pAequorFactory(1, mockUpStrand()))

*/


const pAequorFactory = (num, dnaArr) => {
  return {
    specimenNum: num,
    dna: dnaArr,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (newBase === this.dna[randIndex]) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      const identicalBases = this.dna.reduce((acc, curr, idx, arr) => {
        if (pAequor.dna[idx] === curr) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const percentIdentical = ((identicalBases / this.dna.length) * 100).toFixed(2);
      console.log(`${this.specimenNum} and ${pAequor.specimenNum} have ${percentIdentical}% DNA in common.`);
    },
    willLikelySurvive() {
      const cOrGCount = this.dna.filter(base => base === 'C' || base === 'G').length;
      const percentCG = (cOrGCount / this.dna.length) * 100;
      return percentCG >= 60;
    },
    complementStrand() {
      const basePairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
      };
      return this.dna.map(base => basePairs[base]);
    }
  }
};

const mypAequor = pAequorFactory(1, mockUpStrand());
console.log(mypAequor.dna); // original dna
mypAequor.mutate();
console.log(mypAequor.dna); // mutated dna

























































