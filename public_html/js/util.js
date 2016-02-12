
Array.prototype.contains = function (element) {
    for (var i in this) {
        if (this[i] === element) {
            return true;
        }
    }
    return false;
};

// from : http://stackoverflow.com/questions/3954438/remove-item-from-array-by-value
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

// array is assumed to be sorted
Array.prototype.unique = function (caseInsentitive) {

    var res = [];
    var k = 0;

    if (this.length > 0) {
        res.push(this[0]);
        k = 1;
    }

    for (var i = 1; i < this.length; i++) {
        if (this[i] !== res[k - 1] && caseInsentitive || this[i].toLowerCase() !== res[k - 1].toLowerCase() && !caseInsentitive) {
            res.push(this[i]);
            k++;
        }
    }
    return res;

};


function hash(str) {
    var hash = 0;
    if (!str)
        return hash;
    if (str.length == 0)
        return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}