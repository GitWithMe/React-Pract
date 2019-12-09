class Human{
    gender = "Male";
  PrintGender = () => {
    console.log(this.gender);
  }
}

class Age extends Human{
  age = 23;
  PrintAge = () => {
    console.log(this.age);
  }
}
class Person extends Age{
      
  name = "Namit";
  
  PrintMyName = () => {
    console.log(this.name);
  }
}

let person = new Person();
person.PrintMyName();
person.PrintGender();
person.PrintAge()