SPECS:

Years divisible by 4 should pass so long as they are not also divisible by 100.  eg:
  1900 % 4 = 0 BUT 2000 % 100 = 0  -> result is False, not a leap year
  2004 % 4 = 0 AND 2004 % 100 != 0 -> result is True, leap year


Years divisible by 100 but also divisible by 400 should pass.  eg:
  2000 % 100 = 0 AND 2000 % 400 = 0 -> result is True, leap year

  
