class User {
<<<<<<< HEAD

    constructor (name, gender, birth, country, email, password, photo, admin){

=======
    constructor (name, gender, birth, country, email, password, photo, admin){
>>>>>>> 6069ae00d6951e50d4a351874e934d40e6075350
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();
<<<<<<< HEAD

    }

    get register() {
        return this._register;
    }

    get name() {
        return this._name;
    }

    get gender() {
        return this._gender;
    }

    get country() {
        return this._country;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get photo() {
        return this._photo;
    }

    get admin() {
        return this._admin;
    }

    set photo(value) {
        this._photo = value;
    }

=======
    }

    get register()  {
        return this._register;
    }
    get name()  {
        return this._name;
    }
    get gender()  {
        return this._gender;
    }
    get birth()  {
        return this._birth;
    }
    get country()  {
        return this._country;
    }
    get email()  {
        return this._email;
    }
    get password()  {
        return this._password;
    }
    get photo()  {
        return this._photo;
    }
    get admin()  {
        return this._admin;
    }

    set photo(value)  {
        this._photo = value
    }
>>>>>>> 6069ae00d6951e50d4a351874e934d40e6075350
}