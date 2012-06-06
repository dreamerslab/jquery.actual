# jQuery Actual Plugin CHANGELOG

## 1.0.7

Save/restore element style rather than individual CSS attributes. It is much faster on restore,
as well as more correct. Restoring CSS attributes will create element style where none originally
existed.

## 1.0.6

* [bug fixed] Pass `configs.includeMargin` to only `outerWidth` and `outerHeight` so it does not break in $ 1.7.2



## 1.0.5

* Add package.json for new jquery plugin site



## 1.0.4

* Add `includeMargin` for `outerWidth`( thanks to Erwin Derksen )



## 1.0.3

* Fix `$` namespace conflict



## 1.0.2

* Fix typo in in actual.js



## 1.0.1

* Fix typo



## 1.0.0

* First stable release
