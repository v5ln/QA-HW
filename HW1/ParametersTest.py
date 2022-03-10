import TestOutput
def parametersTest(lines):
    testType = "parameters"
    defString = 'def'
    letterString = ','
    colomString = ':'
    maxParameterNumber = 3

    for line in lines:
        commaCount = 0 
        if defString in line:
            index = lines[lines.index(line)]
            while colomString not in line:
                index += 1
                line += lines[index]
            for letter in line:
                if letter == letterString:
                    commaCount+=1
            if commaCount >= maxParameterNumber:
                TestOutput.output(line,testType,lines[lines.index(line)])

