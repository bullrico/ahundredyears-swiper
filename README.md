ahundredyears-swiper
========

AngularJS module that adds a swiper directive using swipe.js.

Dependencies
============

- AngularJS

- SwipeJS (http://swipejs.com)

Usage
=====

HTML

```
  <swiper speed="2000" continuous=false>
    <div>
       <h1>Slide 1</h1>
    </div>
    <div>
       <h1>Slide 2</h1>
    </div>
    <div>
       <h1>Slide 3</h1>
    </div>
  </swiper>

  <ul class='nav'>
    <li>
      <button ng-click="slide(0)">First slide</button>
    </li>
    <li>
      <button ng-click="slide(1)">Second slide</button>
    </li>
    <li>
      <button ng-click="slide(2)">Last slide</button>
    </li>
    <li>
      <button ng-click="prev()">Previous</button>
    </li>
    <li>
      <button ng-click="next()">Next</button>
    </li>
  </ul>
```