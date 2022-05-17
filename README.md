# Sweet Pagination

**A ReactJS component to render a pagination.**

By installing this component and writing only a little bit of code you can obtain this:

#####Common Style
<img src="https://raw.githubusercontent.com/jahidulislamzim/sweetpagination/main/Assets/Common-Style.png" alt="Sweet Pagination Style" />
#####Common Style
<img src="https://raw.githubusercontent.com/jahidulislamzim/sweetpagination/main/Assets/Style-1.png" alt="Sweet Pagination Style" />
#####Common Style
<img src="https://raw.githubusercontent.com/jahidulislamzim/sweetpagination/main/Assets/Style-2.png" alt="Sweet Pagination Style" />


## Installation

Install [`Sweet Pagination`](https://www.npmjs.com/package/sweetpagination) with npm:

```
npm i sweetpagination --save
```

## Usage

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
        dataPerPage={10}
        getData={items}
        navigation={true}
      />
    </div>
  );
}
```
Copyright © All rights reserved by [**Jahidul Islam Zim**](https://jahidulislamzim.com/)