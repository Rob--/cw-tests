module.exports = {
    "01.txt": [["PASS", "14"]],
    "02.txt": [["PASS", "40"]],
    "03.txt": [["FAIL"], "2"], // function is called DEF
    "04.txt": [["FAIL"], "2"], // MAIN is called somewhere
    "05.txt": [["FAIL"], "1"], // no space between bracket and semicolon
    "06.txt": [["FAIL"], "2"], // last function does not contain end of line character
    "07.txt": [["FAIL"], "2"], // parameter name is invalid (uppercase)
    "08.txt": [["FAIL"], "2"], // reference to undefined parameter
    "09.txt": [["FAIL"], "1"], // MAIN should not have a parameter definition
    "10.txt": [["FAIL"], "2"], // the body of a function contains whitespace
    "11.txt": [["FAIL"], "2"], // body contains negative integer
    "12.txt": [["FAIL"], "2"], // body contains decimal
    "13.txt": [["FAIL"], "2"], // contains parenthesis where a function is not called
    "14.txt": [["FAIL"], "2"], // function body is empty
    "15.txt": [["FAIL"], "2"], // call to non-existent function
    "16.txt": [["PASS", "40 "]], // same as 2.txt, different function order definition
    "17.txt": [["PASS", "40"]], // same as 2.txt, different function order definition
    "18.txt": [["FAIL"], "0"], // MAIN is not defined
    "19.txt": [["FAIL"], "3"], // same function is defined twice
    "20.txt": [["FAIL"], "2"], // function name contains lower case letter
    "21.txt": [["PASS", "14"]], // function name contains lower case letter
    "22.txt": [["PASS", "128"]], // function name contains lower case letter
    "23.txt": [["PASS", "DIVERGENCE"]], // recursion
    "24.txt": [["PASS", "DIVERGENCE"]], // recursion
    "25.txt": [["PASS", "DIVERGENCE"]], // recursion
    "26.txt": [["PASS", "DIVERGENCE"]], // recursion
    "27.txt": [["PASS", "DIVERGENCE"]], // recursion
    "28.txt": [["PASS", "3"]], // add three through function calls
    "29.txt": [["FAIL"], "1"], // syntax error with math ops
    "30.txt": [["PASS", "7783"]], // 29.txt without the syntax error
    "31.txt": [["PASS", "DIVERGENCE"]], // recursion
    "32.txt": [["PASS", "DIVERGENCE"]], // recursion
    "33.txt": [["FAIL"], "1"], // syntax error
    "34.txt": [["FAIL"], "2"], // syntax error
    "35.txt": [["FAIL"], "4"], // syntax error
    "36.txt": [["PASS", "2"]],
    "37.txt": [["PASS", "1"]],
    "38.txt": [["PASS", "DIVERGENCE"]], // recursion,
    "39.txt": [["FAIL"], "1"],
    "40.txt": [["PASS", "216"]],
    "41.txt": [["PASS", "2041739400"]],
};
