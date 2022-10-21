import {TestBed} from "@angular/core/testing";
import {GetAllToDoResolver} from "./get-all-to-do.resolver";

describe("GetAllToDoResolver", () => {
  let resolver : GetAllToDoResolver;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetAllToDoResolver);
  });
  it("should be created", () => {
    expect(resolver)
      .toBeTruthy();
  });
});
