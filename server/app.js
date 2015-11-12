Meteor.startup(function() {

    if(!Prices.findOne()){
        Prices.insert({
            'Poslugi':'Ціолодобовий',
            'grnZaDen': 16,
            'grnZaMisac': 11712

        });
        Prices.insert({
            'Poslugi':'Денний',
            'grnZaDen': 24.60,
            'grnZaMisac': 9000

        });
        Prices.insert({
            'Poslugi':'Нічний',
            'grnZaDen': 25.95,
            'grnZaMisac':  9500

        });
        Prices.insert({
            'Poslugi':'Супровід вантажу',
            'grnZaDen': 25.00,
            'grnZaMisac': 18300

        });
    }

    if(!Stats.findOne()){
        Stats.insert({
            'Spivrobitnuku':'0',
            'dosvid': 0,
            'object': 0

        });
    }
    /*if(!Contacts.findOne()){
        Stats.insert({
            'email':'0',
            'tema': '0',
            'text': '0'

        });
    }*/

});