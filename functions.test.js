let fns = require('./functions');

test("returnTwo should return 2", () => {
    let result = fns.returnTwo();
    expect(result).toBe(2);
});

test('greeting() should return a greeting with the correct name', () => {
    expect(fns.greeting('Spencer')).toEqual('Hello, Spencer.');
    expect(fns.greeting("Celina")).toEqual("Hello, Celina.");
});
test("add() should return a dynamic sum based on two number parameters.", () => {
    expect( fns.add( 1, 2 ) ).toEqual( 3 );
    expect( fns.add( 5, 9 ) ).toEqual( 14 );
  });

  test("divide() should return a number that is correctly divided", () => {
      expect(fns.divide( 34, 2)).toBe(17);
      expect(fns.divide( 96, 3)).toBe(32);
  });

  test('cubed() should return a value that is cubed of the number', () => {
      expect(fns.cubed(3)).toEqual(27);
      expect(fns.cubed(8)).toEqual(512);
  });