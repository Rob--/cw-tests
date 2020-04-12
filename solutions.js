module.exports = {
    '01.txt': ['PASS', '14'],
    '02.txt': ['PASS', '40'],
    '03.txt': ['FAIL'], // function is called DEF
    '04.txt': ['FAIL'], // MAIN is called somewhere
    '05.txt': ['FAIL'], // no space between bracket and semicolon
    '06.txt': ['FAIL'], // last function does not contain end of line character
    '07.txt': ['FAIL'], // parameter name is invalid (uppercase)
    '08.txt': ['FAIL'], // reference to undefined parameter
    '09.txt': ['FAIL'], // MAIN should not have a parameter definition
    '10.txt': ['FAIL'], // the body of a function contains whitespace
    '11.txt': ['FAIL'], // body contains negative integer
    '12.txt': ['FAIL'], // body contains decimal
    '13.txt': ['FAIL'], // contains parenthesis where a function is not called
    '14.txt': ['FAIL'], // function body is empty
    '15.txt': ['FAIL'], // call to non-existent function
    '16.txt': ['PASS', '40'], // same as 2.txt, different function order definition
    '17.txt': ['PASS', '40'], // same as 2.txt, different function order definition
    '18.txt': ['FAIL'], // MAIN is not defined
    '19.txt': ['FAIL'], // same function is defined twice
    '20.txt': ['FAIL'], // function name contains lower case letter
    '21.txt': ['PASS', '14'], // function name contains lower case letter
    '22.txt': ['PASS', '128'], // function name contains lower case letter
    '23.txt': ['PASS', 'DIVERGENCE'], // recursion
    '24.txt': ['PASS', 'DIVERGENCE'], // recursion
    '25.txt': ['PASS', 'DIVERGENCE'], // recursion
    '26.txt': ['PASS', 'DIVERGENCE'], // recursion
    '27.txt': ['PASS', 'DIVERGENCE'], // recursion
    '28.txt': ['PASS', '3'], // add three through function calls
    '29.txt': ['FAIL'], // syntax error with math ops
    '30.txt': ['PASS', '7783'], // 29.txt without the syntax error
};
