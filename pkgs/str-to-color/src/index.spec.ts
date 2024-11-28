import * as StrToColor from './color/color';

describe("string to hex", () => {
  it("string: 0", () => {
    expect(StrToColor.rgb('0')).toEqual('#303030');
  });
});

describe("string to hex", () => {
  it("string: A", () => {
    expect(StrToColor.rgb('A')).toEqual('#414141');
  });
});

describe("string to hex", () => {
  it("string: a", () => {
    expect(StrToColor.rgb('a')).toEqual('#616161');
  });
});

describe("string to hex", () => {
  it("string: zb", () => {
    expect(StrToColor.rgb('zb')).toEqual('#dcdcdc');
  });
});

describe("string to hex", () => {
  it("string: Fike", () => {
    expect(StrToColor.rgb('Fike')).toEqual('#17f17f');
  });
});

describe("string to hex", () => {
  it("string: Fake", () => {
    expect(StrToColor.rgb('Fake')).toEqual('#177177');
  });
});

describe("string to hex", () => {
  it("string: The quick", () => {
    expect(StrToColor.rgb('The quick')).toEqual('#35e35e');
  });
});

describe("string to hex", () => {
  it("string: The quick brown fox jumps over the lazy dog", () => {
    expect(StrToColor.rgb('The quick brown fox jumps over the lazy dog')).toEqual('#fd9fd9');
  });
});

describe("get font color", () => {
  it("Get dark color", () => {
    expect(StrToColor.fontColor('#e4e2e4')).toEqual('#000000');
  });
});

describe("get font color", () => {
  it("Get light color", () => {
    expect(StrToColor.fontColor('#133600')).toEqual('#f8f8f8');
  });
});
