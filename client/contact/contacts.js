Template.contact.events({ // плавна прокрутка до якоря
    'submit form':function(e){
        e.preventDefault();
        var contactForm = {
            email: $(e.target).find('[id=inputEmail]').val(),
            tema: $(e.target).find('[id=tema]').val(),
            text: $(e.target).find('[id=textArea]').val()
        }
        if(contactForm.email === '' || contactForm.tema === ''){
            /*var mainContacts = document.getElementById('contacts');
            console.log(mainContacts);
            var div = document.createElement('div');
            div.className = "alert  alert-danger";
            div.className = "alert-dismissible";
            div.className = "alert-danger";
            div.innerHTML = "<strong>Помилка!</strong> Ви не заповнили всі поля!";
            mainContacts.appendChild(div);*/

            var mainContacts = document.getElementById('email');
            mainContacts.className = "form-group has-error";
        }else{
            Meteor.call('addContacts',contactForm,function(err,res) { // добавляемо в колецию резерв
                if(res){
                    alert('Ваше повiдомленя доставленно!Ми з вами зв\'яжемося як зможем');
                }
                if(err){
                    alert('eoro');
                }

            });
        }

    }
});