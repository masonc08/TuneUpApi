import loggerMiddleware from '@/middleware/logger';
import tk from 'timekeeper';
import consoleTest from 'test-console';
import assert from 'assert';


describe("When logger middleware is provoked", () => {
  before(() => {
    const time = new Date("1995-12-17T03:24:00");
    tk.freeze(time);
  });

  it("should log the current time", () => {
    const req = {
      protocol: "http",
      get: _ => "localhost:3000/",
      originalUrl: "v1/"
    };
    const stdout = consoleTest.stdout;
    const output = stdout.inspectSync(() => loggerMiddleware(req, {}, () => {}));
    assert.match(output[0], /\[1995-12-17T03:24:00.*/);
  });
  it("should log the provoked endpoint", () => {
    const req = {
      protocol: "http",
      get: _ => "localhost:3000/",
      originalUrl: "v1/"
    };
    const stdout = consoleTest.stdout;
    const output = stdout.inspectSync(() => loggerMiddleware(req, {}, () => {}));
    assert.match(output[0], /.*v1\//);
  });

  after(tk.reset);
});
