import TestOutput
def unreachableTest(lines):
    whileString = "while"
    ifString = "if"
    elifString = "elif"
    trueString = "True"
    falseString = "False"
    breakString = "break"
    returnString = "return"
    type = "unreachable"

    for line in lines:
        if (ifString in line or elifString in line or whileString in line) and falseString in line:
            TestOutput.output(line,type)
            
            
        elif whileString in line and trueString in line:
            TestOutput.output(line,type)

        elif breakString in line or returnString in line:
            
            spaces = 0
            nextSpaces = 0
            for letter in line:
                if letter.isspace():
                    spaces += 1
                else:
                    break
            for letter in lines[lines.index(line)+1]:
                if letter.isspace():
                    nextSpaces += 1
                else:
                    break
            if spaces <= nextSpaces :
                TestOutput.output(line,type)
