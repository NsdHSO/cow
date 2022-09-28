# [NgxLiburgIcon](https://github.com/NsdHSO/ngx-liburg-icon)

NgxLiburgIcon is a library for make more easy work with svg icon

It is a angular library

## Code scaffolding
You have to added in your workspace
https://fontawesome.com/download

I was inspired by this logic 

https://plnkr.co/edit/eWi18QNOrzhrvVUbK1rH?p=preview&preview

## Installation

1.`npm i ngx-liburg-icon`

2.[Download icon](https://use.fontawesome.com/releases/v6.1.2/fontawesome-free-6.1.2-web.zip)
   - unzip the file,
   - open in sprites
   - copy the 3 files
   - paste in `assets/icons`

3.In `AppModule` you should import `IconCoreModule` 


## After installed 

In your project you should to have this structure 
  src -> assets -> icons -> brands.svg/regular.svg/solid.svgs

  Import module `IconCoreModule` in AppModule
  And you can use like that



    <mat-icon
      [svgIcon]="'fa_solid:person-through-window'"
      class="your classes "
    ></mat-icon>

  
  Enjoy this library :-) 
  

