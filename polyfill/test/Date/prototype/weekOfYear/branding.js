// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.date.prototype.weekofyear
---*/

const weekOfYear = Object.getOwnPropertyDescriptor(Temporal.Date.prototype, "weekOfYear").get;

assert.sameValue(typeof weekOfYear, "function");

assert.throws(TypeError, () => weekOfYear.call(undefined), "undefined");
assert.throws(TypeError, () => weekOfYear.call(null), "null");
assert.throws(TypeError, () => weekOfYear.call(true), "true");
assert.throws(TypeError, () => weekOfYear.call(""), "empty string");
assert.throws(TypeError, () => weekOfYear.call(Symbol()), "symbol");
assert.throws(TypeError, () => weekOfYear.call(1), "1");
assert.throws(TypeError, () => weekOfYear.call({}), "plain object");
assert.throws(TypeError, () => weekOfYear.call(Temporal.Date), "Temporal.Date");
assert.throws(TypeError, () => weekOfYear.call(Temporal.Date.prototype), "Temporal.Date.prototype");
