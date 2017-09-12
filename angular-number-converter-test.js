describe('angularNumberConverter', function() {

  var romanConverterService;

  beforeEach(module("angularNumberConverter"));

  beforeEach(inject(function (_numberConverter_) {
    romanConverterService = _numberConverter_;
  }));

  describe('convertToRoman', function() {

    it('should convert correct positive numbers', function() {
      expect(romanConverterService.convertToRoman(1)).toBe('i');
      expect(romanConverterService.convertToRoman(1, true)).toBe('I');

      expect(romanConverterService.convertToRoman(890)).toBe('dcccxc');
      expect(romanConverterService.convertToRoman(890, true)).toBe('DCCCXC');
    });

    it('should do nothing if parameter is NaN', function() {
      expect(romanConverterService.convertToRoman('string')).toBe('string');
    });

  });
});