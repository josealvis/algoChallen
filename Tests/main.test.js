let {solution}  = require('../main');

describe('Reverse in parentesis', () => {
     test('should work', () => {
        expect(solution("(bar)")).toBe("rab");
        expect(solution("foo(bar)baz")).toBe("foorabbaz");
        expect(solution("foo(bar)baz(blim)")).toBe("foorabbazmilb");
        expect(solution("foo(bar(baz))blim")).toBe("foobazrabblim");
        expect(solution("foo(bar(baz))bl(im)")).toBe("foobazrabblmi");
        expect(solution("foo")).toBe("foo");
        expect(solution("foo()")).toBe("foo");
        expect(solution("()foo()")).toBe("foo");
        expect(solution("()foo")).toBe("foo");
        expect(solution("")).toBe("");
        expect(solution("(foo(baz(ax)))")).toBe("bazxaoof");
        expect(solution("(o)")).toBe("o");
        expect(solution("foo(a)")).toBe("fooa");
        expect(solution("((()hola)()")).toBe("hola");
     });
});

