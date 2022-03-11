


def output (line, testType):
    print("["+testType+"] test faild")
    if testType == "magic number":
        print("there is a magic number in line")
        print(line)
        print('----------------------------')
    if testType == "magic string":
        print("there is a magic stirng in line")
        print(line)
        print('----------------------------')
    if testType == "attribute":
        print("data types doesnt match in line")
        print(line)
        print('----------------------------')
    if testType == "unreachable":
        print("after this line there is an unreachable code")
        print(line)
        print('----------------------------')
    if testType == "parameters":
        print("there is more than 3 parameters in line")
        print(line)
        print('----------------------------')
