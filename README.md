<<<<<<< HEAD
# Sweet Pagination

**A ReactJS component to render a pagination.**

By installing this component and writing only a little bit of code you can obtain this:


<img src="https://cloud.githubusercontent.com/assets/2084833/24840237/7accb75a-1d1e-11e7-9abb-818431398b91.png" alt="Pagination demo 2" />


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
=======
# sweetpagination
>>>>>>> 8f8a0408ebc20d734882ab428c4f7536828f8a72
