import loggerMiddleware from '@/middleware/logger';
import tk from 'timekeeper';
import consoleTest from 'test-console';
import assert from 'assert';


describe("When logger middleware is provoked", () => {
  before(() => {
    const time = new Date("December 17, 1995 03:24:00");
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
    const regex = RegExp("\\[1995-12-17T03:24:00-05:00\\].*");
    assert.ok(regex.test(output));
  });
  it("should log the provoked endpoint", () => {
    const req = {
      protocol: "http",
      get: _ => "localhost:3000/",
      originalUrl: "v1/"
    };
    const stdout = consoleTest.stdout;
    const output = stdout.inspectSync(() => loggerMiddleware(req, {}, () => {}));
    const regex = RegExp(".*v1/");
    assert.ok(regex.test(output));
  });

  after(tk.reset);
});