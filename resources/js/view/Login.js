Ext.define('JWF.view.Login', {
    extend: 'Ext.Container',
    requires: ['Ext.Toolbar'],

    config: {
        padding: 20,
        scrollable: true,
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                cls: [
                    'jogToolbar'
                ],
                docked: 'top'
            }
        ]
    },

    showLoginText: function() {
        var redirectUrl = Ext.Object.toQueryString({
            redirect_uri: window.location.protocol + "//" + window.location.host + window.location.pathname,
            client_id: JWF.app.facebookAppId,
            response_type: 'token',
            scope: 'publish_stream,publish_actions'
        });

        this.setHtml([
        '<h2>Welcome to Jog with Friends</h2>',
        '<p>With this app you can log your runs and share your progress with your friends</p>',
        '<p>In order to use Jog with Friends you must sign in with your Facebook account.</p>',
        '<a class="fbLogin" href="https://m.facebook.com/dialog/oauth?' + redirectUrl + '"></a>',
        '<div class="fb-facepile" data-app-id="' + JWF.app.facebookAppId + '" data-max-rows="2" data-width="300"></div>'
        ].join(''));

        FB.XFBML.parse(document.getElementById('splash'));
    }

});