import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/share';

export default {
	resize: Observable.fromEvent(window, 'resize').share().debounce(() => Observable.timer(100)),
	scroll: Observable.fromEvent(window, 'scroll').share(),
};
