import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IMilkCow} from "../interface/i-milk-cow";

const csvData = [
  ["id", "name", "message"],
  {
    id     : 1,
    name   : "Mandy",
    message: "hello\nworld",
  },
  {
    id     : 2,
    name   : "Mars",
    message: "hello Angular",
  },
];

@Injectable({
              providedIn: "root",
            })
export class ReportingService {
  constructor(private readonly _httpClient : HttpClient, @Inject("env") private environment : any) { }

  public getDataForReporting(item : number, page : number) : Observable<IMilkCow> {
    return this._httpClient.get<IMilkCow>(`${this.environment.api}/cow/milk/${item}/${page}`);
  }

  public getCsv(items : number, page : number) {
    const pathCsv  = "searchResults/project_" + "/OutputsCsv/";
    const fileName = "project_" + "_output_datas.csv";
    const fullPath = pathCsv + fileName;
    this._httpClient.get(`${this.environment.api}/cow/milk/${items}/${page}`)
      .subscribe(resp => {
        this.download(resp);
      });
  }

  download(csvData : any) {
    const newData = csvData.filter((e : any, i : any) => i !== 0)
      .map((e: any) => {
        return Object.keys(e)
          .reduce((acc, curr : string) => {
            debugger
            // @ts-ignore
            return {...acc, ...{[curr]: "\"" + e[curr] + "\""}};
          }, {});
      });
    console.log("newdata", csvData, [csvData["0"], ...newData]);
    this.exportFile(newData);
  }

  exportFile(rows : any, fileTitle? : any) {
    const jsonObject = JSON.stringify(rows);
    const csv        = "\ufeff" + this.convertToCSV(jsonObject); // support Chinese
    const blob       = new Blob([csv], {type: "text/csv;charset=utf-8;"});
    const link       = document.createElement("a");
    const url        = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", fileTitle || "data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /* CSV: convert json to json */
  convertToCSV(objArray : any) : string {
    const array =
            typeof objArray !== "object"
              ? JSON.parse(objArray)
              : objArray;
    let str     = "";
    for(let i = 0 ; i < array.length ; i++) {
      let line = "";
      Object.entries(array[i])
        .forEach(([key, value]) => {
          if(line !== "") {
            line += ",";
          }
          line += value;
        });
      str += line + "\r\n";
    }
    return str;
  }
}
