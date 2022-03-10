import TestOutput

def magicNumberTest(lines):
    equalString = '='
    type = "magic number"
    varDefCaseString = 2
    for line in lines:
        words = line.split()
        for word in words:
            if word.isnumeric():
                priveuosWord = words[words.index(word)-1]
                if line.count(equalString) >= varDefCaseString :
                    TestOutput.output(line, type)
                    break
                if not priveuosWord.isalpha() and not priveuosWord.isnumeric() and priveuosWord != equalString :
                    TestOutput.output(line, type)
                    break
                
def magicStringTest(lines):
    equalString = '='
    type = "magic string"
    varDefCaseString = 2
    for line in lines:
        if ("'" in line or '"' in line) and line.count(equalString) != 1:
            TestOutput.output(line, type)
