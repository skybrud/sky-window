# sky-window
> Simple js lightweight module for window events based on RxJs - handles resize and scroll events.

## Dependencies
- [RxJs](https://github.com/ReactiveX/rxjs)

## Usage
1. Install RxJs
2. Import sky-window
``` js
SkyWindow.resize.subscribe(() => {
    // On resize do what I type here
});

SkyWindow.scroll.subscribe(() => {
    // On scroll do what I type here
});
```

## How it works
Sky-window uses hot observbles by invoking `.share` which is the same as `.publish().refCount()`. This means that when at least one instance is listening til e.g. resize it will run, but if refcount is 0 it will automaticly be unsubscribed. In addition resize will only fire 100ms after the last resize event.

``` js
resize: Observable.fromEvent(window, 'resize').share().debounce(() => Observable.timer(100)),
scroll: Observable.fromEvent(window, 'scroll').share(),
```

# Credits
This module is made by the Frontenders at [skybrud.dk](http://www.skybrud.dk/). Feel free to use it in any way you want. Feedback, questions and bugreports should be posted as issues. Pull-requests appreciated!
