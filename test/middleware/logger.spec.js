import loggerMiddleware from '@/middleware/logger';
import tk from 'timekeeper';


describe("When logger middleware is provoked", () => {
  it("should log the current time", () => {
    const time = new Date("December 17, 1995 03:24:00");
    const req = {
      protocol: "http",
      get: _ => "localhost:3000/",
      originalUrl: "v1/"
    };
    tk.freeze(time);
    loggerMiddleware(req, {}, () => {});
    tk.reset();
  });
  it("should log the provoked endpoint", () => {

  });
});