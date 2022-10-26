import {
  ComponentFixture,
  TestBed,
} from "@angular/core/testing";
import {HeaderDropDownDownloadComponent} from "./header-drop-down-download.component";

describe("HeaderDropDownDownloadComponent", () => {
  let component : HeaderDropDownDownloadComponent;
  let fixture : ComponentFixture<HeaderDropDownDownloadComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderDropDownDownloadComponent],
    })
      .compileComponents();
    fixture = TestBed.createComponent(HeaderDropDownDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component)
      .toBeTruthy();
  });
});
