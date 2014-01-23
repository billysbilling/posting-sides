require('ember');

debit = Ember.Object.create({
    value: 'debit',
    isDebit: true,
    isCredit: false,
    toString: function() {
        return '<PostingSide.debit>';
    }
});
credit = Ember.Object.create({
    value: 'credit',
    isDebit: false,
    isCredit: true,
    toString: function() {
        return '<PostingSide.credit>';
    }
});
debit.opposite = credit;
credit.opposite = debit;

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