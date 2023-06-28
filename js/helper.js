const getLength = (string1, string2) => {
    let date1 = new Date(string1);
    let date2 = new Date(string2);
    let months = (date2.getFullYear() - date1.getFullYear()) * 12;
    months -= date1.getMonth();
    months += date2.getMonth();
    months <= 0 ? 0 : months;
    let yr = "";
    let mon = "";
    if (months >= 12) {
        yr = Math.round(months/12).toString() + ' year(s) ';
    }
    if (months%12 != 0) {
        mon = '  ' + (months%12).toString() + ' month(s)';
    }
    if (yr !== "" && mon !== "") {
        return yr + ' + ' + mon;
    } else {
        return yr + mon;
    }
};

const getToday = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
};

document.getElementById("2022-2022-length").innerHTML = getLength('2022-05-16', '2022-10-07');
document.getElementById("2021-2023-length").innerHTML = getLength('2021-07-01', '2023-05-31');
document.getElementById("2019-2021-length").innerHTML = getLength('2019-12-01', '2021-06-30');
document.getElementById("2017-2019-length").innerHTML = getLength('2017-08-01', '2019-11-30');
document.getElementById("2017-2017-length").innerHTML = getLength('2017-03-26', '2017-07-31');

document.getElementById("2016-2017-length").innerHTML = getLength('2016-09-01', '2017-02-28');
document.getElementById("2016-2016-length").innerHTML = getLength('2016-01-27', '2016-08-31');
document.getElementById("2014-2016-length").innerHTML = getLength('2014-01-27', '2016-01-26');