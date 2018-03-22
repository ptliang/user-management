function PaginationController() {
  this.$onInit = function(){
    // this.list = this.list.slice(0, 10);
  }
}

App.component('pagination', {
  templateUrl: './src/templates/pagination.html',
  controller: ['$scope', '$element', '$attrs', 'usersService', PaginationController],
  bindings: {
    fullList: '<',
    pageList: '='
  }
})
