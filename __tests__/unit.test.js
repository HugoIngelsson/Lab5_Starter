// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber regular', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('isPhoneNumber regular + country code', () => {
  expect(isPhoneNumber("+1 123-456-7890")).toBe(true);
});

test('isPhoneNumber with letters', () => {
  expect(isPhoneNumber("1B3-44R6-789A")).toBe(false);
});

test('isPhoneNumber without dashes', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

// by the way, this function is 100% broken
// doesn't accept john.doe@gmail.com
test('isEmail regular', () => {
  expect(isEmail("johndoe@gmail.com")).toBe(true);
});

test('isEmail with numbers', () => {
  expect(isEmail("cingelsson777@ucsd.edu")).toBe(true);
});

test('isEmail many @s', () => {
  expect(isEmail("john.doe@gmail.com@yahoo.com")).toBe(false);
});

test('isEmail many periods', () => {
  expect(isEmail("john..doe@gmail..com")).toBe(false);
});

test('isStrongPassword regular', () => {
  expect(isStrongPassword("safe_password")).toBe(true);
});

test('isStrongPassword with numbers', () => {
  expect(isStrongPassword("S4f3_p4SSw0Rd")).toBe(true);
});

test('isStrongPassword too long', () => {
  expect(isStrongPassword("safe_password_123")).toBe(false);
});

test('isStrongPassword start with number', () => {
  expect(isStrongPassword("2safe_password")).toBe(false);
});

test('isDate regular', () => {
  expect(isDate("05/05/2025")).toBe(true);
});

test('isDate without unnecessary 0s', () => {
  expect(isDate("5/5/2025")).toBe(true);
});

test('isDate shortened year invalid', () => {
  expect(isDate("5/5/25")).toBe(false);
});

test('isDate dashes instead of slashes invalid', () => {
  expect(isDate("05-05-2025")).toBe(false);
});

test('isHexColor length 6', () => {
  expect(isHexColor("ff0000")).toBe(true);
});

test('isHexColor length 3', () => {
  expect(isHexColor("F00")).toBe(true);
});

test('isHexColor invalid length', () => {
  expect(isHexColor("F00F")).toBe(false);
});

test('isHexColor invalid characters', () => {
  expect(isHexColor("fz00z0")).toBe(false);
});