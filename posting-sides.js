require('ember');

var debit = Ember.Object.create({
    value: 'debit',
    isDebit: true,
    isCredit: false
});

var credit = Ember.Object.create({
    value: 'credit',
    isDebit: false,
    isCredit: true
});

//Set opposites
debit.opposite = credit;
credit.opposite = debit;

//Set toString methods (can't be handled by Ember, crashes in older versions of IE)
debit.toString = function() {
    return '<PostingSide.debit>';
};
credit.toString = function() {
    return '<PostingSide.credit>';
};

function resolveSide(side) {
    if (side === debit || side === credit) {
        return side;
    }
    if (side === 'debit') {
        return debit;
    }
    if (side === 'credit') {
        return credit;
    }
    throw new Error('Invalid side `'+side+'`');
}

module.exports = {
    debit: debit,
    credit: credit,
    resolveSide: resolveSide
};