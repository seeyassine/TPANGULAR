export class User {
    // readonly permet d’empêcher les assignations en dehors du constructeur.
    private _firstName: String = "";
    public get firstName(): String {
        return this._firstName;
    }
    public set firstName(value: String) {
        this._firstName = value;
    }

    private _lastName?: String | undefined = "";
    public get lastName(): String | undefined {
        return this._lastName;
    }
    public set lastName(value: String | undefined) {
        this._lastName = value;
    }

    private _age?: Number | undefined;
    public get age(): Number | undefined {
        return this._age;
    }
    public set age(value: Number | undefined) {
        this._age = value;
    }

    private _userType: userType = userType.Guest;
    public get userType(): userType {
        return this._userType;
    }
    public set userType(value: userType) {
        this._userType = value;
    }

    constructor(readonly userId: String){
        
    }

    public fullName(): String{
        return this.firstName + " " + this.lastName
    }

    public greetUser(){
        return this.userType.toString() + "\nHello "+ this.fullName()
    }
}

enum userType {
    Admin = "Admin",
    Member = "Member",
    Guest = "Guest"
  }

export interface IUserCredentials {
    email : string;
    password: string;
}  

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  let user: User = new User("APLLLK");
  user.lastName = "Chaimae"
  user.firstName = "Angular"
  user.userType = userType.Admin
  
  console.log(user.greetUser())

