# Sweet Pagination

**A ReactJS component to render a pagination.**

By installing this component and writing only a little bit of code you can obtain this:

**Some Styles**

<img src="https://raw.githubusercontent.com/jahidulislamzim/sweetpagination/main/Assets/Common-Style.png" alt="Sweet Pagination Style" />

<img src="https://raw.githubusercontent.com/jahidulislamzim/sweetpagination/main/Assets/Style-1.png" alt="Sweet Pagination Style" />

<img src="https://raw.githubusercontent.com/jahidulislamzim/sweetpagination/main/Assets/Style-2.png" alt="Sweet Pagination Style" width=full/>



## Installation

Install [`Sweet Pagination`](https://www.npmjs.com/package/sweetpagination) with npm:

```
npm i sweetpagination --save
```

## Basic Usage

```javascript
import React, { useState } from "react";
import SweetPagination from "sweetpagination";

function Items() {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  // Example items, to simulate fetching from another resources.
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div>
      {currentPageData.map((item) => (
        <div>
          <h3>Item #{item}</h3>
        </div>
      ))}

      <SweetPagination
        currentPageData={setCurrentPageData}
        getData={items}
      />
    </div>
  );
}
```

## Change Per-Page Data 
**If you want, you can show the data as you wish on the page then follow the code below.**

**Add this props `dataPerPage={10}` remember props type always Number.**

```javascript
      <SweetPagination
        currentPageData={setCurrentPageData}
        getData={items}
        dataPerPage={10}
      />
```

## Add Navigation

**If you want to add navigation button then follow the code below.**
**Add this props `navigation={true}` remember props type always Boolean.**

```javascript
      <SweetPagination
        currentPageData={setCurrentPageData}
        getData={items}
        dataPerPage={10}
        navigation={true}
      />
```

## Add Pre Loaded Style 
**If you want, you can add the pre loaded style then follow the code below.**
**Add this props `getStyle={'style-1'}` remember props type always String.**

```javascript
      <SweetPagination
        currentPageData={setCurrentPageData}
        getData={items}
        dataPerPage={10}
        navigation={true}
        getStyle={'style-1'}
      />
```
## Available Pre-Loaded Style List
<ol>
<li>style-1</li>
<li>style-2</li>
</ol>


## Added You Custom Style
**If you want, you can add your custom style then follow the code below.**
**Add this props `getStyle={'style-custom'}` remember props type always String.**

```javascript 
      <SweetPagination
        currentPageData={setCurrentPageData}
        getData={items}
        dataPerPage={10}
        navigation={true}
        getStyle={'style-custom'}
      />
```

## Add CSS

```css
    .style-custom{
      //add your coustom code here
    }
```
Copyright © All rights reserved by [**Jahidul Islam Zim**](https://jahidulislamzim.com/)