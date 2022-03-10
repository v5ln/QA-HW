from operator import imod
import ReadFile
import ParametersTest
import AttributeTest
import MagicTest

## Read File 
lines = ReadFile.readFile()

## Parameters Test
ParametersTest.parametersTest(lines)

## Attribute Test
AttributeTest.attributesTest(lines)

## Magic Number Test
MagicTest.magicNumberTest(lines)

## Magic String Test
MagicTest.magicStringTest(lines)
