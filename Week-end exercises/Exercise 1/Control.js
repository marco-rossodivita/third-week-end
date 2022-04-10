let control = () => {

    /**
     * Checks the surname entered by the user
     */
    if (document.getElementById('fcognome').value == "") {
        alert("NOT VALID: Inserire cognome");

    }

    /**
     * Checks the name entered by the user
     */
    if (document.getElementById('fnome').value == "") {
        alert("NOT VALID: Inserire nome");
    }


    /**
     * Controls the matricola number inserted by the user; I used a regular expression
     * 
     * Another method could have been  ->  isNaN(document.getElementById('fmatricola').value)
     *                                     or
     *                                     isNaN(mat)
     */
    let reg = /^\d+$/;
    let mat = document.getElementById('fmatricola').value;
    if (!reg.test(mat) || mat == "") {
        alert("NOT VALID: Inserire matricola valida");
    }


    /**
     * Checks the region selected by the user
     * If it's equals to the default value "--", it will launch an alert
     */
    if (document.getElementById('fregione').value == '--') {
        alert("NOT VALID: Inserire regione");

    }

    /**
     * Checks if the user entered at least one of: email, phone number
     */
    let em = document.getElementById('femail').value;
    let tel = document.getElementById('ftelefono').value;
    if ((em == "") && tel == "") {
        alert("NOT VALID: Inserire uno tra: email, telefono");
    }

    /**
     * Checks if the email entered is valid; I used another regular expression
     */
    let regEm = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regEm.test(em)) {
        alert("NOT VALID: Inserire email valido");
    }

    /**
     * Checks if the telephone number entered is valid; I used another regular expression
     */
    let regTel = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!regTel.test(tel)) {
        alert("NOT VALID: Inserire numero di telefono valido");
    }

}