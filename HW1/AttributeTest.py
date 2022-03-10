import TestOutput

def getTypeVal (lines,var):
    equalString = "="
    declearLine = ""
    value = ""
    for line in lines:
        if var in line and line.count(equalString) == 1 and line.index(var) < line.index(equalString):
            declearLine = line
            break

    declearLine = declearLine.split()
    while " " in declearLine:
        declearLine = declearLine.remove(" ")
    # print(declearLine)
    for word in declearLine:
        if word == equalString:
            value = declearLine[declearLine.index(word)+1]
            break

    # print(value)
    if value.isalpha():
        dataType = "str"
        return dataType
    if value.__contains__("."):
        dataType = "float"
        return dataType
    if value.isnumeric():
        dataType = "int"
        return dataType
    if value.__contains__("("):
        dataType = "tuple"
        return dataType
    if value.__contains__("{"):
        dataType = "set"
        return dataType
    if value.__contains__("["):
        dataType = "list"
        return dataType

def getTypeDef (line, var):
    var += ":" 
    line = line.replace(')','')
    line = line.replace('(','')
    line = line.replace(',','')
    line = line.split()
    dataType = line[line.index(var)+1]
    return dataType

def getVarNameDef(defLine):
    defLine = defLine[defLine.index('('):defLine.index(')')]

    defLine = defLine.replace('(', '')
    defLine = defLine.replace(')', '')
    defLine = defLine.split(',')

    for var in defLine:
        index = defLine.index(var)
        defLine[index] = var[:var.index(':')]
        if ' ' in defLine[index]:
            defLine[index] = defLine[index].replace(' ','')
    return defLine


def getVarNameCall(callLine):
    
    callLine = callLine[callLine.index('('):callLine.index(')')]
    callLine = callLine.replace('(', '')
    callLine = callLine.replace(')', '')
    callLine = callLine.replace(' ','')
    callLine = callLine.split(',')
    return callLine

def compareTypes(callLine,defLine,lines):
    typesInDef = []
    typesInDeclear = []
    varsInCall = getVarNameCall(callLine)
    varsInDef = getVarNameDef(defLine)
    for var in varsInDef:
        typesInDef.append(getTypeDef(defLine,var))
    for var in varsInCall:
        typesInDeclear.append(getTypeVal(lines,var))
    
    for type in range(len(typesInDef)):
        if typesInDef[type] != typesInDeclear[type]:
            
            explain = ""+ varsInCall[type] + " not type of "+typesInDef[type]
            errorLine = callLine + defLine + explain
            
            TestOutput.output(errorLine,"attribute")



def methodCall(defLine,lines):
    defString = 'def'
    defLineAfterSplit = defLine.split()
    callLine = ""
    methodName = defLineAfterSplit[defLineAfterSplit.index(defString)+1]
    for line in lines :
        if methodName in line and defString not in line:
            callLine = line
    compareTypes(callLine, defLine, lines)
    

def attributesTest(lines):
    defString = "def"
    for line in lines :
        if defString in line:
            methodCall(line, lines)
            