Router.configure({
    layoutTemplate: 'main'
});
Router.route('main',{
    path: '/',
    template: 'mainWrraper'

});
Router.route('services',{
    path: '/services',
    template: 'services'
});
Router.route('contact',{
    path: '/contact',
    template: 'contact'
});
Router.route('mainAdmin',{
    path: '/admin',
    template: 'admin',
    layoutTemplate: 'yieldAdmin'
});