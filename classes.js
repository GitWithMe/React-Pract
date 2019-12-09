class Human{
  constructor(){
    this.gender = "Male";
  }
  PrintGender(){
    console.log(this.gender);
  }
}

class Age extends Human{
  constructor(){
    super();
    this.age = 23;
  }
  PrintAge(){
    console.log(this.age);
  }
}

class Person extends Age{
  constructor(){
    super();
    this.name = "Namit";
  }
  PrintMyName(){
    console.log(this.name);
  }
}

let person = new Person();
person.PrintMyName();
person.PrintGender();
person.PrintAge();