QUnit.module('PostingSide.debit and PostingSide.credit');

var postingSides = require('../posting-sides');

test('value', function() {
    strictEqual(postingSides.debit.value, 'debit');
    strictEqual(postingSides.credit.value, 'credit');
});

test('toString (direct call)', function() {
    strictEqual(postingSides.debit.toString(), '<PostingSide.debit>');
    strictEqual(postingSides.credit.toString(), '<PostingSide.credit>');

});

test('toString (via concatenation)', function() {
    strictEqual(postingSides.debit + '', '<PostingSide.debit>');
    strictEqual(postingSides.credit + '', '<PostingSide.credit>');

});

test('isDebit and isCredit', function() {
    strictEqual(postingSides.debit.isDebit, true);
    strictEqual(postingSides.debit.isCredit, false);
    strictEqual(postingSides.credit.isDebit, false);
    strictEqual(postingSides.credit.isCredit, true);
});

test('opposite', function() {
    strictEqual(postingSides.debit.opposite, postingSides.credit);
    strictEqual(postingSides.credit.opposite, postingSides.debit);
    strictEqual(postingSides.debit.opposite.opposite, postingSides.debit);
    strictEqual(postingSides.credit.opposite.opposite.opposite, postingSides.debit);
});


test('resolveSide', function() {
    strictEqual(postingSides.resolveSide(postingSides.debit), postingSides.debit);
    strictEqual(postingSides.resolveSide(postingSides.credit), postingSides.credit);
    strictEqual(postingSides.resolveSide('debit'), postingSides.debit);
    strictEqual(postingSides.resolveSide('credit'), postingSides.credit);
    throws(function() {
        strictEqual(postingSides.resolveSide(null));
    }, /Invalid side/);
    throws(function() {
        strictEqual(postingSides.resolveSide('wtf'));
    }, /Invalid side/);
    throws(function() {
        strictEqual(postingSides.resolveSide(postingSides));
    }, /Invalid side/);
});
