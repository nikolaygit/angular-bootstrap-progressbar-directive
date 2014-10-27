angular-bootstrap-progressbar-directive
=======================================

AngularJS directive for bootstrap progressbar

# Dependency

* [Bootstrap progressbar](http://www.minddust.com/project/bootstrap-progressbar/)

# Specification

* type: attribute directive 
* owning element: ``.progress-bar``

other attributes:
* ``data-transitiongoal`` - binding value to this attribute will progress the bar once.
* ``data-transition-property`` - set name of the property to watch for changes and progress the bar according to its value. May be the same property as in ``data-transitiongoal``.

# Examples

Watch the ``testProgress`` property and progress the bar when it changes:

```html
<div class="progress progress-test">
  <div class="progress-bar" role="progressbar" data-transitiongoal="{{testProgress}}"
       progressbar data-transition-property="testProgress">
  </div>
</div>
```

# TODO

* create page with the example
* write tests


# License

MIT
