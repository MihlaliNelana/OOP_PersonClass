class Person {
  Person(name, age, gender, interest){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
  }

  get name(){
    return this._name;
  }
  set name(value){
    if(value.length < 2){
      alert("Your name is too short.");
      return;
    }
    this._name = value;
  }

  get age(){
    return this._age;
  }
  set age(value){
    if(value.length < 18){
      alert("You are under age.");
      return;
    }
    this._age = value;
  }

  get gender(){
    return this._gender;
  }
  set gender(value){
    if(value != "male" || value != "female" || value != "Would rather not say"){
      alert("Please enter your gender.");
      return;
    }
    this._gender = value;
  }

  get interest(){
    return this._interest;
  }
  set interest(value){
    if(value < 100){
      alert("Please tell us what you're interested in over 100 characters");
      return;
    }
    this._interest = value;
  }
}



function Person(name, age, gender, interest){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.interest = interest;
}

  this.sayIntro = function(){
    console.log('I am ${name} and I am ${age} years of age. I am a ${gender} and interested in ${interest}');
  }
  this.sayHello = function(){
    console.log('Hello, I am ${name}.');
  }

  const mihlali = new Person("Mihlali Nelana", 23, "Male", "Software Technology");
  const sinovuyo = new Person("Sinovuyo Kalolo", 24, "Female", "Bio-Med Tech");
  const hobana = new Person("Siphosihle Hobana", 25, "Male", "Human Resources");
  const sibabalwe = new Person("Sibabalwe Qhude", 24, "Male", "Human Centered Design");
  const sikelelwa = new Person("sikelelwa Mngqwnci", 26, "Female", "Human Recruitment");

  sikelelwa.sayHello();
  mihlali.sayHello();
  hobana.sayHello();
  sibabalwe.sayHello();
  sinovuyo.sayHello();
