package Test;

import static org.junit.Assert.*;

import org.junit.Test;

public class RomanNumbersTest {

@Test
public void testReturn1() {
    String actual = RomanNumbers.stringToRoman(1);
    String expected = "I";
    assertEquals(expected, actual);
}

@Test
public void testReturn5() {
    String actual = RomanNumbers.stringToRoman(5);
    String expected = "V";
    assertEquals(expected, actual);
}

@Test
public void testReturn2() {
    String actual = RomanNumbers.stringToRoman(2);
    String expected = "II";
    assertEquals(expected, actual);
}

@Test
public void testReturn4() {
    String actual = RomanNumbers.stringToRoman(4);
    String expected = "IV";
    assertEquals(expected, actual);
}

@Test
public void testReturn399() {
    String actual = RomanNumbers.stringToRoman(399);
    String expected = "CCCXCIX";
    assertEquals(expected, actual);
}

@Test
public void testReturn3992() {
    String actual = RomanNumbers.stringToRoman(3992);
    String expected = "MMMCMXCII";
    assertEquals(expected, actual);
}
}
