import {Injectable} from "@angular/core";
import {AngularCsv} from "angular-csv-ext/dist/Angular-csv";

@Injectable({
  providedIn: "root",
})
export class DownloadCsvService {
  public static download(data : any[]) {
    let clone = Object.assign({}, data) as unknown as any;
    let date = new Date();
    var time = date.getHours() + `:` + date.getMinutes() + `:` + date.getSeconds();
    let fullDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}-${time}`;
    var options = {
      noDownload: false,
      headers: Object.keys(clone.items[0]),
    };
    new AngularCsv(data, `milk_reporting_${fullDate}`, options);
  }
}
