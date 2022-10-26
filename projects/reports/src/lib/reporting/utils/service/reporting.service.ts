import {HttpClient} from "@angular/common/http";
import {
  Inject,
  Injectable,
} from "@angular/core";
import {Subject} from "rxjs";
import {IMilkCow} from "../interface/i-milk-cow";
import {DownloadCsvService} from "./download-csv.service";

@Injectable({
  providedIn: "root",
})
export class ReportingService {
  public getData : Subject<IMilkCow[]> = new Subject<IMilkCow[]>();
  private _item = 10;
  private _page = 0;

  public get item() : number {
    return this._item;
  }

  public set item(value : number) {
    this._item = value;
  }

  public get page() : number {
    return this._page;
  }

  public set page(value : number) {
    this._page = value;
  }

  constructor(private readonly _httpClient : HttpClient, @Inject(
    "env") private environment : any) { }

  public getCsv(items : number, page : number) {
    const pathCsv = "searchResults/project_" + "/OutputsCsv/";
    const fileName = "project_" + "_output_datas.csv";
    const fullPath = pathCsv + fileName;
    this._httpClient.get(`${this.environment.api}/cow/milk/${this._item ?? 10}/${this._page ?? 0}`)
      .subscribe(resp => {
        DownloadCsvService.download(resp as any[]);
      });
  }

  public getDataForReporting(item : number, page : number) : void {
    this._item = item;
    this._page = page;
    this._httpClient.get<IMilkCow[]>(`${this.environment.api}/cow/milk/${item}/${page}`)
      .subscribe(cows => {
        this.getData.next(cows);
      });
  }
}
