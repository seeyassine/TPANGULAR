var User = /** @class */ (function () {
    function User(userId) {
        this.userId = userId;
        // readonly permet d’empêcher les assignations en dehors du constructeur.
        this._firstName = "";
        this._lastName = "";
        this._userType = userType.Guest;
    }
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userType", {
        get: function () {
            return this._userType;
        },
        set: function (value) {
            this._userType = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.prototype.greetUser = function () {
        return this.userType.toString() + "\nHello " + this.fullName();
    };
    return User;
}());
var userType;
(function (userType) {
    userType["Admin"] = "Admin";
    userType["Member"] = "Member";
    userType["Guest"] = "Guest";
})(userType || (userType = {}));
var user = new User("APLLLK");
user.lastName = "Chaimae";
user.firstName = "Angular";
user.userType = userType.Admin;
console.log(user.greetUser());
