Meteor.startup(function() {

    if(!Price.findOne()){
        Price.insert({
            'Poslugi':'Ціолодобовий',
            'grnZaDen': 16,
            'grnZaMisac': 11712

        });
        Price.insert({
            'Poslugi':'Денний',
            'grnZaDen': 24.60,
            'grnZaMisac': 9000

        });
        Price.insert({
            'Poslugi':'Нічний',
            'grnZaDen': 25.95,
            'grnZaMisac':  9500

        });
        Price.insert({
            'Poslugi':'Супровід вантажу',
            'grnZaDen': 25.00,
            'grnZaMisac': 18300

        });
    }

});