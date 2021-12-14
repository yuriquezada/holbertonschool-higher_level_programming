#!/usr/bin/node
exports.esrever = function (list) {
  return list.reduceRight(function (list, current) {
    list.push(current);
    return list;
  }, []);
};
