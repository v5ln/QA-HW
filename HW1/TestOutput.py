


def output (line, testType):
    print("["+testType+"] test faild")
    if testType == "magic number":
        pass
    if testType == "magic string":
        pass
    if testType == "attribute":
        print("data types doesnt match in line")
        print(line)
        print('----------------------------')
    if testType == "unreachable":
        pass
    if testType == "parameters":
        print("there is more than 3 parameters in line")
        print(line)
        print('----------------------------')
        pass

