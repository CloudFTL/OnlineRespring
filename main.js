(function($){
function loadPage(sel, p){
        $(sel).load(p + ' #content', function(){
            document.title = $('#pageData').data('title');
        });
   $(document).on('click', 'a', function(e){
        e.preventDefault();
        history.pushState({page: this.href}, '', this.href);
        loadPage('#frontPage', this.href);
         $(window).on('popstate', function(e){
        loadPage('#frontPage', location.pathname);
        console.log(e.originalEvent.state);
    });
}(jQuery));
