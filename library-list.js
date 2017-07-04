(function() {

  var list = [
    { type: 'naive', id: 'angular', url: './angular', label: 'DBMON Angular' },
    { type: 'naive', id: 'angular2', url: './angular2', label: 'DBMON Angular 2.0 Alpha' },
    { type: 'naive', id: 'react', url: './react', label: 'DBMON React' },
    { type: 'naive', id: 'vue', url: './vue', label: 'DBMON Vue.js' },
    { type: 'naive', id: 'vue2', url: './vue2', label: 'DBMON Vue2.js' },
   ];

  function Library() {
    var url = this.props.lib.url;
    return Elem.el('div', { className: 'child ' + this.props.lib.type, onClick: function() { window.open(url, '_blank'); } }, [
      Elem.el('a', { href: url, target: '_blank' }, this.props.lib.label)
    ]);
  }

  function LibraryList() {
    return Elem.el('div', { className: 'container', style: { marginTop: '20px' } }, this.props.array.sort(function(a, b) { return a.id.localeCompare(b.id); }).map(function(item) {
      return Elem.el(Library, { lib: item })
    }));
  }

  Elem.render(LibraryList, '#list', { array: list, name: '' });
})();
