import ReadFile
import ParametersTest
import AttributeTest

## Read File 
lines = ReadFile.readFile()

## Parameters Test
ParametersTest.parametersTest(lines)

## Attribute Test
AttributeTest.attributesTest(lines)