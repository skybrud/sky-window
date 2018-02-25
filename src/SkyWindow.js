import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/first';

const _window = typeof window === 'undefined' ? {} : window;

export default {
	on(eventName) {
		return Observable.fromEvent(_window, eventName).share();
	},
	once(eventName) {
		return Observable.fromEvent(_window, eventName).share().first();
	},
	load: Observable.fromEvent(_window, 'load').share().first(),
	instantResize: Observable.fromEvent(_window, 'resize').share().debounceTime(40),
	resize: Observable.fromEvent(_window, 'resize').share().debounceTime(200),
	scroll: Observable.fromEvent(_window, 'scroll').share(),
};
