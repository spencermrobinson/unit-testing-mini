class Person{
    constructor(birthYear){
        this.age = this.calculateAge(new Date(`01/01/${birthYear}`));
        this.birthYear = birthYear;
    }
    calculateAge(birthday){
        let ageDiffMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDiffMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    isMillennial(){
        return this.birthYear > 1982;
    }

    isRetiree(){
        return this.age >= 65
    }
}

module.exports = Person;
