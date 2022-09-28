# LibsWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

# Material Shared

For using material table you follow the next step

1. at ngOnInit you need to put the initialize table, it should receive an array of objects like this:

```{
 datasource={
  actions:
  {
    iconClass: "class for icon",
    classCss: " class what you need to maipulate in DOM",
    method: " a function "
  },
  editable: "If you want the table be editable: true/false",
  data for table { ES 6 } ...dataTable
}
```

2. In html template you need to declare

```
<elix-table [dataSource] ="data at you initialized in ngOnInit">
  <elix-column-text className="what class css you want for this column"
  [iconClass]="Optional"
  field="column from table"
  name="what name you want to do"> ...
  <elix-column-area-text require !!!  field name > ...
</elix-table>
```

```

dataSource: your Type;
  public list = [{
    name: 'dasdasd',
    name1: 'dasdasd',
    age: 1,
    iu: 'dasdsdasd',
    iu1: 'dasdsdasd',
    iu41: 'dasdsdasd',
    iu1321: 'dasdsdasd',
    iu21: 'dasdsdasd',
    iu3: 'dasdsdasd',
    age1: 1,
    iu2: 'dasdsdasd',
    iu11: 'dasdsdasd',
    iu414: 'dasdsdasd',
    iu13214: 'dasdsdasd',
    iu251: 'dasdsdasd',
    iu33: 'dasdsdasd'
  }, ....]

```

```

this.dataSource = this.list.map(resp => {
      const model = <{ name: string, age: number }>resp
      return {
        actions: [{
          iconClass: 'fa_solid:stethoscope',
          classCss: 'driver__existing',
          method: () => {
          }
        }] as IActionMaterialColumn[],
        editable: false,
        model: {
          ...model
        }
      } as DataSourceMaterialTable<any>

    })

```
    <div>
      <elix-table [dataSource]="dataSource">
        <elix-column-text
          field="name"
          name="TASDASD"
        >
        </elix-column-text>
        <elix-column-text
          field="age"
          name="TASDASD"
        >
        </elix-column-text>
        <elix-column-text
          field="name1"
          name="TASDASD"
        >
        </elix-column-text>
      
        .
        .
        . 
      </elix-table>
    </div>


# and enjoy at this beautiful library
